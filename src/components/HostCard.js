import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import Skeleton from '@material-ui/lab/Skeleton';

const HostCard = (props) => {
  let history = useHistory();
  const name = props.name;
  const genre = props.genre;
  const price = props.price;
  const img = props.img;

  return (

    <Route render={(props) => (
      <div className="host-card" onClick={() => { history.push('/host') }} >

        <div className="host-img-container">
          <div className="host-img-border">
            <img className="host-card-img" src={img} />
          </div>
          <div className="price-container">
            <svg height="70" width="70" className="price-circle">
              <defs>
                <linearGradient id="myGradient">
                  <stop offset="10%" stop-color="#437df8" />
                  <stop offset="95%" stop-color="#51c9fe" />
                </linearGradient>
              </defs>
              <circle cx="35" cy="35" r="35" fill="url('#myGradient')" />
            </svg>
            <h3 className="price">$100</h3>
          </div>
        </div>

        <div className="host-card-info">
          <h2 className="host-name">{name}</h2>
          <h3 className="host-genre">{genre}</h3>
        </div>
      </div>
    )} />
  )
}


export default HostCard; 
