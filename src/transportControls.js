import React from 'react'

const transportControls=({clicked, buttonList})=> {

 
const  commandList = buttonList.map(bttn=>{
             return (<button className="btn" key={bttn} onClick={()=>clicked(bttn)}>{bttn}</button>)
       })
         

     
  return (
<div>
    {commandList}
</div>
    
  )
     
  
}

export default transportControls
