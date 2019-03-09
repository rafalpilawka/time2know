import React, {Component} from 'react'
import Controls from './containers/timeSetup'
import alertSound from './assets/beep.mp3'
import Buttons from './containers/transportControls'
import './App.css'
import Time from './containers/time'
import Info from './containers/info'





function AddSetup() {
  return (
    <div className="center">ADD SETUP</div>
  )
}






 

class  Counter extends Component { 
  
  state={
     time: 25,
     flag: true,
     pause: false,
     pauseTime: 0,
     interval: null,
     audio: new Audio(alertSound),
     totalSeconds: 1500,
     buttonList: ['start','stop','pause','longrun'],
     stock: 0,
     timeArray: [],
     round: false

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
        case 'longrun':
            this.longrun();
            return console.log('Long run')
        
        default: return console.log('default')
    }
}

longrun=()=>{
    this.setState({timeArray: [25,5,25,5,25,5,25]}, this.startLongOne)
    // setTimeout(this.startLongOne, 500)

}

longInterval=()=>{
                        let i = this.state.totalSeconds;
                        let arr= this.state.timeArray
                        i--
                        this.setState({totalSeconds: i})
                        if (this.state.totalSeconds === 0){
                                clearInterval(this.state.interval)
                                arr.shift()
                                console.log(arr)
                                let audio= new Audio(alertSound)
                                audio.play()

                                this.setState({timeArray: arr},console.log(this.state.timeArray) )

                                this.startLongOne()
                                console.log('why object is not workinh ', arr)
                            
                    }   
                    }
                     

startLongOne=()=>{
        clearInterval(this.state.interval)
        let currentTime = this.state.time
        
        let arr=this.state.timeArray
        currentTime=arr[0]
            if (arr.length > 0  ){
                    console.log(arr[0])
                    this.setState({totalSeconds: arr[0]*60, round: false , time:currentTime},
                         console.log(this.state.totalSeconds, this.state.timeArray))
                   
                    this.setState({timeArray:arr});
                    this.setState({interval: setInterval(this.longInterval,1000)}) 
                    
    
   
        // if (this.state.totalSeconds===0){
        //         arr = arr.shift()
        //         console.log('round finished' , this.state.timeArray)
        //         this.setState({timeArray:arr})
        //         this.counting()
        // }  
} 
   
}



counting =()=> {
    this.setState({
    interval: setInterval(this.counter, 1000)
    })
  
}

counter=(e)=>{

    switch (e){
        case e==='longrun':
                {

                    
                    
                    break
                }
                
        default:{
        let i= this.state.totalSeconds

            console.log("inside default interval ", this.state.totalSeconds)
            i--
            this.setState({totalSeconds: i})
            if (i===0){
                let audio= new Audio(alertSound)
                audio.play()       
                clearInterval(this.state.interval)
                console.log('if we can do something after interval')
                this.setState({round:false})
        }

    }  
}   
}


stop=()=>{  

    this.setState({flag: true, pause: false, totalSeconds: 1500});
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
      <Time seconds={this.state.totalSeconds}></Time>
      <h5 className="warning red-text">{!this.state.flag&& this.state.pause ? "PAUSE":null}</h5>
      <button className=" btn blue lighten-2 center" onClick={this.stateCheck}>State </button>
      
      {/* <div className="blue-text">TOTAL ROUNDS:{this.state.stock}</div> */}
      </div>
        <Info time={this.state.time} stock={this.state.stock}/>
        <AddSetup/>
      
      
    </div>
  )
}

}

export default Counter

