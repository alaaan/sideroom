import { React, useState } from 'react'
import { motion, useCycle } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm'

const HostDetailPage = () => {
  const hostInfo = {
    name: "Brad Pitt",
    genre: "Actor",
    price: "$100",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, repellat?"
  }

  const [checkoutOn, toggleCheckout] = useCycle(false, true);

  const imgVariants = {
    checkout: { scale: .85 },
    noCheckout: { scale: 1 }
  }

  const nameVariants = {
    checkout: { display: 'none' },
    noCheckout: { scale: 1 },
  }



  return (
    <motion.div
      className="host-detail-page"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      exit={{ y: 200, opacity: 0 }}>

      <div className="host-detail-card" data-isCheckout={checkoutOn}>
        {checkoutOn && <motion.h2>CHECKOUT</motion.h2>}
        <div className="host-header-layout" data-isCheckout={checkoutOn}>
          <motion.img
            layout
            animate={checkoutOn ? "checkout" : "noCheckout"}
            variants={imgVariants}
            src="https://www.fillmurray.com/200/200" />
          <motion.h1
            animate={checkoutOn ? "checkout" : "noCheckout"}
            variants={nameVariants}
            layout>Dave Shaw</motion.h1>
        </div>
        {checkoutOn && <CheckoutForm />}
        {!checkoutOn && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fuga, doloremque voluptatum sed quo rerum dolorum eligendi sint et dicta.</p>}
        {!checkoutOn && <h2 onClick={() => toggleCheckout()}>Purchase</h2>}
      </div>

      {/* {checkoutVisible && <div className="checkout">
        <h2 style={{ backgroundColor: "white", height: "300px" }}>THIS IS CHECKOUT</h2>
      </div>} */}

    </motion.div>
  );
}

export default HostDetailPage;