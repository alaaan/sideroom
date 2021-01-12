import { React, useState } from 'react'
import { motion, useCycle } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Modal from '../components/Modal';
import HostProfile from '../components/HostProfile';
import ReactPlayer from 'react-player'
import SRPriceButton from '../components/SRPriceButton'
import FooterCard from '../components/FooterCard'
import calendar from '../img/calendar-animated-2.png'
import videochat from '../img/video-chat-animated.png'


const HostDetailPage = () => {

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

  // function toggleModal() {setShowModal(true)};

  return (
    <motion.div
      className="host-detail-page"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      exit={{ y: 200, opacity: 0 }}
      data-isCheckout={checkoutOn}>

      <motion.div layout 
      transition={spring} 
      className="host-detail-card" 
      data-CheckoutCard={checkoutOn}>

        {!checkoutOn &&
        <>
        <HostProfile img="http://placecorgi.com/150/150" genre='Athlete' price='$100' name='David Shaw' />
        <div className="host-profile-content-container">
          <ReactPlayer width='auto' loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/testfacetime.mp4' />
          <div className="host-profile-info-container">
            <p>Super excited to meet you guys, im goign to be playing you personal song.</p>
             <SRPriceButton clickHandler={() => {toggleCheckout()}}>Let's do it!</SRPriceButton> 
          </div>
        </div> </>}

        <div className="host-profile-footer-container">
          <FooterCard title="Guaranteed Call.">
            <div className="gauranteed-call-container">
              <h1>2</h1>
              <h2>minutes</h2>
            </div>
          </FooterCard>
          <FooterCard title="Fulfilled in 15 days.">
            <div className="gauranteed-call-container">
              <img src={calendar} alt="calendar" style={{height:'60%',borderRadius:0}} />
            </div>
          </FooterCard>
          <FooterCard title="3 chances to answer.">
            <div className="gauranteed-call-container">
                <img src={videochat} alt="calendar" style={{height:'90%',borderRadius:0}} />
              </div>
          </FooterCard>
        </div>
        <p className="footer-p">You dont pay if you dont get a call.</p>

        <div className="host-header-layout" data-isCheckout={checkoutOn}>
          
          {/* <motion.img
            layout
            animate={checkoutOn ? "checkout" : "noCheckout"}
            variants={imgVariants}
            src="https://www.fillmurray.com/200/200" />
          <motion.h1
            animate={checkoutOn ? "checkout" : "noCheckout"}
            variants={nameVariants}>
            Dave Shaw</motion.h1> */}
        </div>
        <Elements stripe={stripePromise}>
          {checkoutOn && <CheckoutForm toggle={toggleCheckout} />}
          {/* {!checkoutOn && <SRButton>Let's do it!</SRButton>} */}
          {/* {!checkoutOn && <h2 onClick={() => toggleCheckout()}>Purchase</h2>} */}
        </Elements>
      </motion.div>



    </motion.div>
  );
}

export default HostDetailPage;