import React from 'react';

const HostBox = ({name,genre,img})=>{

  return(
    <div className="host-box">
        <img src={img} alt="host"/>
        <div className="host-box-info">
          <h2>{name}</h2>
          <h3>{genre}</h3>
        </div>

    </div>

  )

}

export default HostBox; 