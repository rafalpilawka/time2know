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
      return  (<div className="center"><h1>{check(min)}:{check(se)}</h1> </div>)
}


 

class  Counter extends Component { 
  
  state={
     time: 25,
     flag: true,
     pause: false,
     pauseTime: 0,
     interval: undefined,
     audio: new Audio(alertSound),
     totalSeconds: 0
  }
 


toggleTimeHandler=( number)=>{
    console.log('clicked button' + number)
    this.setState({time: number, totalSeconds: number*60},()=>{console.log(this.state)})
    

};


start=()=>{
    this.setState({totalSeconds: this.state.time*60})
    this.counting()
    // let totalSeconds = this.state.time*60;
    // this.setState({flag: true})
    // this.setState({pause:false})
    // //this.myInterval(totalSeconds)
    
   

    // const interval = setInterval(() => {
    //         this.setState({seconds: totalSeconds});
    //         // console.log(this.state.seconds)
    //         totalSeconds --
            
                
    //             if (this.state.pause){
                       
    //                 this.setState({pauseTime: totalSeconds},console.log('Time remain' , this.state.pauseTime))                   
    //                 clearInterval(interval)
                    
    //             }
    //             if(totalSeconds === -1 || !this.state.flag){
    //                     clearInterval(interval);
    //                     console.log('finished')
    //                     this.resetTime();
    //                     let audio = new Audio(alertSound);
    //                     audio.play()
                        
    //                 }   
                
    // }, 1000);
    
   }
// sound=()=>{
//     console.log('playSound')
//    const audio = new Audio(./)
//    audio.play()
// }
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
        // totalSeconds: this.state.time*60,
    interval: setInterval(this.counter, 1000)
    })
    //const int = setInterval(()=>this.counter(),1000);
    //clearInterval(int)}
}


counter=()=>{
    let i= this.state.totalSeconds

    console.log("inside extarnal interval", this.state.totalSeconds)
    i--
    this.setState({totalSeconds: i})
        if (i===0){
            let audio= new Audio(alertSound)
            audio.play()
            clearInterval(this.interval)
        }
   
    // if (!this.state.flag){
    //     clearInterval(this.state.int)}
    }


stop=()=>{  

    this.setState({flag: false});
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
  
}   if(!this.state.pause){
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
      <Buttons clicked={this.toggleButtons}></Buttons>
      <Time time={this.state.totalSeconds}></Time>
      <button className=" btn blue lighten-2 center" onClick={this.stateCheck}>State </button>
      </div>
     
      
      
    </div>
  )
}

}

export default Counter

