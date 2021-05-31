import React from 'react'
import squareSvg from '../img/squareboxsvg.svg'

const SquareBorderBox = (props)=>{

  return(
    <>
    <div className="border-box" style={{backgroundImage:`url(${squareSvg})`,width:'300px',height:'300px'}}>
      {props.children}
    </div>
    </>
  )


}

export default SquareBorderBox; 
