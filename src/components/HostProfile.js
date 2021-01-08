import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton';

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
            <div className="host-profile-info-container">
              <p>Super excited to meet you guys, im goign to be playing you personal song.</p>
            </div>
            
          </div>
        </div>
       
      </>
  )
}

export default HostProfile; 
