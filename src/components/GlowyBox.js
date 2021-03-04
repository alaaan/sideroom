import React from 'react'

const GlowyBox = ({boxWidth,boxHeight,children})=>{

  return(
    <div className="glowy-box" style={{width:boxWidth, height:boxHeight,width:'80%'}}>
      {children}
    </div>
  )
}

export default GlowyBox; 