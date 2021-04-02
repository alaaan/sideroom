import React from 'react';

const StatDisplay = ({stat,statName})=>{

  return(
    <div className="stat-wrapper">
      <h2>{stat}</h2>
      <p>{statName}</p>

    </div>


  )



}

export default StatDisplay; 