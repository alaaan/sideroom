import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import Skeleton from '@material-ui/lab/Skeleton';

const HostCard = (props) => {
  let history = useHistory();
  console.log("host card render")
  const name = props.name;
  const genre = props.genre;
  const price = props.price;
  const img = props.img;

  return (

    <Route render={(props) => (
      <div className="host-card" onClick={() => { history.push('/host') }} >
        {img ? (<img className="host-card-img" src={img} />) : (
          <Skeleton variant="rect" color='primary' width={300} height='100%' />
        )}
        <div className="host-card-info">
          <h3 id="host-name">{name}</h3>
          <h3 id="host-genre">{genre}</h3>
          <p id="host-price">{price}</p>
        </div>
      </div>
    )} />
  )
}

export default HostCard; 
