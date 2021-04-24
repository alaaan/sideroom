import React from 'react'
import boxSvg from '../img/boxsvg.svg'

const BorderBox = (props)=>{

  return(
    <>
    <div className="border-box">
      {props.children}
    </div>
    </>
  )


}

export default BorderBox; 
