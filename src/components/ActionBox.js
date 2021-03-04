import React from 'react'

const ActionBox = ({title,subtitle,id})=>{


  return (
    <div className="action-box" id={id}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </div>

  )

}

export default ActionBox; 