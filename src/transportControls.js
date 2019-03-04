import React from 'react'

function transportControls(props) {
  return (
    <div>
      <button className="btn" onClick={()=>props.clicked('start')}>Start count</button>
      <button className="btn red" onClick={()=>props.clicked('stop')}>Stop count</button>
      <button className="btn red" onClick={()=>props.clicked('pause')}>Pause count</button>
      <button className="btn red" onClick={()=>props.clicked('start')}>Check internal interval</button>
    </div>
  )
}

export default transportControls
