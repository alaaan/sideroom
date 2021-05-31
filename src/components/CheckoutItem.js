import React from 'react'; 

const CheckoutItem = ({listing}) =>{

  return (

    <div className="checkout-item">
      <div className="checkout-item-top">
        <img src={listing.hostImg} alt='host' />
        <h2 style={{textAlign:'center'}}>{listing.hostName}</h2>
        <h3 style={{textAlign:'center'}}>${listing.price} for {listing.time} minutes</h3>
      </div>
      <p style={{textAlign:'center',marginTop:'5%'}}>{listing.description}</p>
    </div>

  )


}

export default CheckoutItem;