import React from 'react'; 

const CheckoutItem = ({listing}) =>{

  return (

    <div className="checkout-item">
      <div className="checkout-item-top">
        <img src={listing.hostImage} alt='host' />
        <h2>{listing.hostName}</h2>
        <h3>${listing.price} for {listing.time} minutes</h3>
      </div>
      <p>{listing.description}</p>
    </div>

  )


}

export default CheckoutItem;