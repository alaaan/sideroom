import React from 'react'; 

const CheckoutItem = ({name,img,description,price}) =>{

  return (

    <div className="checkout-item">
      <div className="checkout-item-top">
        <img src="http://www.fillmurray.com/g/300/300" alt='host' />
        <h2>David Shaw</h2>
        <h3>$200 for 2 minutes</h3>
      </div>
      <p>Dave is really cool, here is a call description.</p>
    </div>

  )


}

export default CheckoutItem;