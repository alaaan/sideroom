import { React, useState } from 'react'
import { motion, useCycle } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


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
    noCheckout: { scale: 1, display: 'visible' },
  }

  //load stripe
  const stripePromise = loadStripe("pk_test_3buay5fqqWRRQ6lsNDXiqph5");

  const spring = {
    stiffness: 100,
    damping: 30
  };

  return (
    <motion.div
      className="host-detail-page"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      exit={{ y: 200, opacity: 0 }}
      data-isCheckout={checkoutOn}>

      <motion.div layout transition={spring} className="host-detail-card" data-CheckoutCard={checkoutOn}>
        {checkoutOn && <motion.h2>CHECKOUT</motion.h2>}
        <div className="host-header-layout" data-isCheckout={checkoutOn}>
          <motion.img
            layout
            animate={checkoutOn ? "checkout" : "noCheckout"}
            variants={imgVariants}
            src="https://www.fillmurray.com/200/200" />
          <motion.h1
            animate={checkoutOn ? "checkout" : "noCheckout"}
            variants={nameVariants}>
            Dave Shaw</motion.h1>
        </div>
        <Elements stripe={stripePromise}>
          {checkoutOn && <CheckoutForm toggle={toggleCheckout} />}
          {!checkoutOn && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fuga, doloremque voluptatum sed quo rerum dolorum eligendi sint et dicta.</p>}
          {!checkoutOn && <h2 onClick={() => toggleCheckout()}>Purchase</h2>}
        </Elements>
      </motion.div>

      {/* {checkoutVisible && <div className="checkout">
        <h2 style={{ backgroundColor: "white", height: "300px" }}>THIS IS CHECKOUT</h2>
      </div>} */}

    </motion.div>
  );
}

export default HostDetailPage;