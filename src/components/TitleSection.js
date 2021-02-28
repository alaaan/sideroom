import React from 'react';

const TitleSection = ({title,titleId,subtitleId,subtitle,lineId}) =>{

  return(
  <div className="title-section">
    <div className="title-wrapper">
  <h1 id={titleId}>{title}</h1>
    <div className="line" id={lineId}></div>
    </div>
  <h3 id={subtitleId}>{subtitle}</h3>
  </div>

  )
}

export default TitleSection; 