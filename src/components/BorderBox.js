import React from 'react'

const BorderBox = (props)=>{

  return(
    <>
    <div className="border-box" style={{width:props.width,height:props.height}}>
      {props.children}
    </div>
    </>
  )


}

export default BorderBox; 
