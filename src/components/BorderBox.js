import React from 'react'
import boxSvg from '../img/box800x250.svg'

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
