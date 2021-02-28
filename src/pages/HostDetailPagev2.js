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
import SRButton from '../components/SRButton'


const HostDetailPagev2 = () => {

  


  return (
    <div className="host-detail-pagev2">
      <ReactPlayer width='auto' loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/testfacetime.mp4' />
      <div className='host-detail-right'>
        <div className="host-detail-info-container">
          <h3 style={{color:'white'}}>A personal video call from</h3>
          <h2>David Shaw</h2>
          
          <div>
            <h3 style={{marginTop:'5%'}}>About the Event</h3>
            <p>Dave is a good guy, you should buy this call. He is going to call you and then you’ll be stoked.  Request whatever song you want in the order.</p>
          </div>

          <div>
            <h3 style={{marginTop:'5%'}}>Details and Info</h3>
            <p>You’ll have three chances to answer your call. You wont be charged if David doesn’t fulfill the order within 14 days.</p>
          </div>
        </div>
        <SRButton type="submit" style={{ marginTop: '40px', marginBottom: '20px' }}>Purchase Call</SRButton>
      </div>
    </div>
    
    
  );
}

export default HostDetailPagev2;