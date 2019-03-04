import React from 'react'

const transportControls=({clicked, buttonList, flag})=> {

 
const  commandList = buttonList.map(bttn=>{
        if (bttn  ==='pause' && flag){
                         return (<button className="btn disabled" key={bttn} onClick={()=>clicked(bttn)}>{bttn}</button>)

        } else {
            return (<button className="btn" key={bttn} onClick={()=>clicked(bttn)}>{bttn}</button>)

        }
        
       })
         

     
  return (
<div>
    {commandList}
</div>
    
  )
     
  
}

export default transportControls
