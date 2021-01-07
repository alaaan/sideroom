import { React, useState } from 'react'
import { motion, useCycle } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Modal from '../components/Modal';
import HostProfile from '../components/HostProfile';
import ReactPlayer from 'react-player'


const HostDetailPage = () => {
  const hostInfo = {
    name: "Brad Pitt",
    genre: "Actor",
    price: "$100",
    bio: "I'll be calling you guys to talk about how epic this is! "
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

  // function toggleModal() {setShowModal(true)};

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
        
        <HostProfile img="https://i.pravatar.cc/200" genre='Athlete' price='$100' name='David Shaw' />
        
        <ReactPlayer width='auto' muted playing playsinline url='https://pro-mock-videos.s3.amazonaws.com/e5855990-508b-11eb-9752-eb858e3f6a86.mp4?AWSAccessKeyId=ASIA3SXPH6QV3KVKNRGK&Expires=1610071143&Signature=HGIbSSYb0Ao4nlNT52YuBeQ9nYQ%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEHIaCXVzLWVhc3QtMSJHMEUCIChrRDg6py%2FGO4f7n5n1%2FBYiyQgTqBORgQRdG8Hz5z9iAiEAka3ioIpqFOCZB02gRd4wKKNLnfuA8wNW%2B6OLlfL8oUUq0gEIOxAAGgw3OTYxNDQ0MzIxNzEiDFT1G5uFpidZPBg69iqvAbp7%2Bvj%2F2ywE%2Ban5qf5DldbAYa9ZzecXvlgZnqzlEQoRmaOi8ZYDeWV6HUQBpVretcVDpGiUUUtqCOgJU%2B59byBmqasYbxH%2Bb8XvT%2B3gLsPwYBMEkx62O0pdNfl0kCpzamKDVmx3tly0zMU09aagIdEri7UwX%2BZawrIHmFmitCaCfY0lJDEbuGitTbV1oz%2BBsHqPJdBtrTgKa6SyibOCkq7Y7yWkcP7FkbyvxbtClqEw3NXZ%2FwU64AFZw8tY8QERNHSPtUD4gqGkMMIAe63NFbQOcLM6DNd7C0NedAvF1F9vxtvvBlImrlQK4PdPuc69X2ec6ojz25G9s7eK2weDdPii6FD8rUo9L8IR7J5jMbHjMxx6s8Yd%2B86UMqEhn0ZzsUTd5uI2l%2F9nYBTNAJ5nBC6wxT2oZKayDu6kry1jeIwruYI8aoqFIFtCynTkceLhfvIkBuNNqc6Fvy6LFlhR1dSIR7s12N4xNSUMmQUCfEwQgRtUMBMICNeueq%2Bsv2fy5Bw0Cs%2Bs9yhDscGZ2ZC0mieDRND2JffEcQ%3D%3D' />

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
          {!checkoutOn && <p>Super excited to meet you guys, im goign to be playing you personal song.</p>}
          {!checkoutOn && <h2 onClick={() => toggleCheckout()}>Purchase</h2>}
        </Elements>
      </motion.div>



    </motion.div>
  );
}

export default HostDetailPage;