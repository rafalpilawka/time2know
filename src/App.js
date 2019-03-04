import React, {Component} from 'react'
import Controls from './timeSetup'
import alertSound from './assets/beep.mp3'
import Buttons from './transportControls'

const Time =({time})=>{

    let se = time%60 
    let min= Math.floor(time/60)
   
    const check =(t)=>{if ((t)<10) {
    return t='0'+t
    } else {
     return t
    }}
      return  (<div className="center flow-text"><h1>{check(min)}:{check(se)}</h1> </div>)
}


 

class  Counter extends Component { 
  
  state={
     time: 25,
     flag: true,
     pause: false,
     pauseTime: 0,
     interval: undefined,
     audio: new Audio(alertSound),
     totalSeconds: 1500,
     buttonList: ['start','stop','pause'],
     stock: 0
  }
 


toggleTimeHandler=( number)=>{
    console.log('clicked button' + number)
    this.setState({time: number, totalSeconds: number*60},()=>{console.log(this.state)})
    

};


start=()=>{
    clearInterval(this.state.interval)
    let time = this.state.time
    this.setState({totalSeconds: time*60 , flag: false})
    this.counting()

}

toggleButtons=(button)=>{
    switch(button){
        case 'start':
            this.start();
            return console.log('Start');
        
        case 'stop':
            this.stop();
            return console.log('Stop')
        
        case 'pause':
            this.pause();
            return console.log('Pause')
        
        default: return console.log('default')
    }
}

counting =()=> {
    this.setState({
    interval: setInterval(this.counter, 1000)
    })
  
}

counter=()=>{
    let i= this.state.totalSeconds

    console.log("inside extarnal interval", this.state.totalSeconds)
    i--
    this.setState({totalSeconds: i})
        if (i===0){
            let audio= new Audio(alertSound)
            audio.play()
            if(this.state.time===25){
                this.setState({stock: this.state.stock+1 })
                this.state.stock===4 ||this.state.stock===8?this.setState({time:10}): this.setState({time:5})
            }           
            clearInterval(this.interval)
        }
    }


stop=()=>{  

    this.setState({flag: true, pause: false});
    clearInterval(this.state.interval)
    this.state.audio.play()

}

pause=()=>{
    if (this.state.pause){
        this.setState({
            totalSeconds: this.state.pauseTime,
            pause: false
        });
        this.counting();
  
        }  
    if(!this.state.pause){
        clearInterval(this.state.interval)

        this.setState({pauseTime:this.state.totalSeconds}, console.log(this.state.pause))
        this.setState({pause: true})
    }
}
       
stateCheck=()=>{
    console.log(this.state, this.interval)
}

resetTime=()=>{
    this.setState({seconds: this.state.time*60});
    console.log(this.state)
}


render (){
    return (
    <div>
      
      <Controls clicked={this.toggleTimeHandler}/>
      <div className="container center">
      <Buttons clicked={this.toggleButtons} buttonList={this.state.buttonList} flag={this.state.flag} ></Buttons>
      <Time time={this.state.totalSeconds}></Time>
      <h5 className="warning red-text">{!this.state.flag&& this.state.pause ? "PAUSE":null}</h5>
      <button className=" btn blue lighten-2 center" onClick={this.stateCheck}>State </button>
      <div className="blue-text">TOTAL ROUNDS:{this.state.stock}</div>
      </div>
     
      
      
    </div>
  )
}

}

export default Counter

