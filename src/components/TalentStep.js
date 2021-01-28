import React from 'react'

const TalentStep = ({title,img,info,image})=>{

  return(
  <div className="talent-step-container">
    <img style={{borderRadius:'7px',boxShadow:'rgba(80, 63, 205, 0.5) 0px 1px 5px',width:'375px',height:'250px'}} src={image} alt="step"/>
    <div className="talent-step-content">
      <h2 style={{fontSize:'1.75rem',fontWeight:'700'}}>{title}</h2>
  <p style={{fontSize:'1rem',marginTop:'1vw'}}>{info}</p>
    </div>
  </div>
  )

}

export default TalentStep; 