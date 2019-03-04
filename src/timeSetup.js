import React from 'react';


const Controls = (props) =>{

    return (
      <div>
          <div className="container grey-text text-darken-3 center"><h4><strong>TIME2KNOW</strong></h4></div>
        <div className=" grey darken-3">
            <div className="container center">
           
        
                <button className = " col btn grey darken-3 z-depth-0" onClick={()=>props.clicked(25)}>25 min</button>
                <button className = "col btn grey darken-3  z-depth-0" onClick={()=>props.clicked(5)} >Pause</button>
                <button className = "col btn grey darken-3 z-depth-0"onClick={()=>props.clicked(10)}>Long Pause</button>
           
            </div>
        </div>
       
      </div>
        
    )
  }


export default Controls
