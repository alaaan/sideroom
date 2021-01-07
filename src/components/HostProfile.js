import React from 'react'

const HostProfile = ({name,genre,price,img}) => {

  return (
      <>
        <div className="host-profile-container">
          <div className="host-profile-border">
            <img className="host-profile-img" src={img} alt="hostImage"/>
          </div>
          <div className="host-profile-info">
            <h2 className="host-profile-name">{name}</h2>
            <h3 className="host-profile-genre">{genre}</h3>
          </div>
        </div>
       
      </>
  )
}

export default HostProfile; 
