import { React, useState,useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
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
import gsap from 'gsap';
import { Redirect } from "react-router-dom";
import HostWebService from '../web_services/host_webservice';


const HostDetailPagev2 = () => {

  const [showCheckout,setShowCheckout] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [price,setPrice]=useState(null);
  const [time,setTime]=useState(null);
  const [hostImage,setHostImage]=useState(null);
  const [hostName,setHostName]=useState(null);
  const [description,setDescription]=useState(null);
  const [soldOut,setSoldOut]=useState(null);
  const [redirect, setRedirect] = useState(false);
  const [listing,setListing]=useState({});

  const listingObject = {
    price:'$5',


  }

  useEffect(() => {

    setIsLoading(true);
    const webService = new HostWebService();
    const loadData = async () => {
      var payload = await webService.getHostListing('revivalists');
      if (!payload.Errored) {
        setStates(payload.Payload);
      } else {
        setRedirect(true);
      }
    };
    loadData();
    let mainTl = gsap.timeline();
    mainTl.from('.host-detail-right',{xPercent:100});

    const setStates = (data) => {
      setPrice(data.Price);
      setTime(data.Time);
      setHostImage(data.HostImage);
      setHostName(data.HostName);
      setPrice(data.Price);
      setDescription(data.Description);

      setListing({
        price:data.Price,
        time:data.Time,
        hostImage:data.HostImage, 
        hostName:data.HostName, 
        description:data.Descripton
      })

      setIsLoading(false);
    }
  
  },[]);



    // setCharityImage(data.CharityImage);
    // setHostName(data.HostName);
    // setHostImage(data.HostImage);
    // const myDate = new Date(data.StartDateTime);
    // console.log(myDate.toString());
    // setStartDateTime(myDate);
    // console.log(data.StartDateTime.toString());
    // const priceText = `$${(data.Price * data.TimeLimit).toFixed(2)} for ${
    //   data.TimeLimit
    // } minutes`;
    // setPrice(priceText);
    // setCharityName(data.CharityName);
    // setCharityAbout(data.CharityAbout || "");
    

  const handleCheckout = ()=>{
    setShowCheckout(true);
  }

  const closeCheckout = ()=>{
    console.log('closecheckout');
    setShowCheckout(false);
  }

  //load stripe
  const stripePromise = loadStripe("pk_test_3buay5fqqWRRQ6lsNDXiqph5");



  return (
    <>
    {redirect && <Redirect to={"/"} />}
    <AnimatePresence>
    {!showCheckout &&
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1,duration:1}}
    exit={{ opacity: 0 }}>
    <div className="host-detail-pagev2">
      {/* <ReactPlayer width='auto' loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/testfacetime.mp4' /> */}
      <img src={hostImage} style={{width:'50%',borderRadius:'7px',marginBottom:'5%'}} alt='host' />

      <div className='host-detail-right'>
        <div className="host-detail-info-container">
          <h3 style={{color:'white'}}>A personal video call from</h3>
          <h2>{hostName}</h2>
          <div style={{height:'10px',width:'20%',background:'var(--ocean-blue'}}></div>
          <h3 style={{color:'white',marginTop:'2%',fontSize:'1.5rem'}}>${price} for {time} minutes</h3>

          <div>
            <h3 style={{marginTop:'5%'}}>About the Event</h3>
            <p>{description}</p>
          </div>

          <div>
            <h3 style={{marginTop:'5%'}}>Details and Info</h3>
            <p>You’ll have three chances to answer your call. You wont be charged if David doesn’t fulfill the order within 14 days.</p>
          </div>
        </div>
        <SRButton type="submit" onClick={handleCheckout} style={{ marginTop: '40px', marginBottom: '20px' }}>Purchase Call</SRButton>
      </div>
      
    </div>
    </motion.div> }

    </AnimatePresence>

      <AnimatePresence>
    {(showCheckout && stripePromise) && 
      <Elements stripe={stripePromise}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1,duration:1}}
          exit={{ opacity: 0 }}>
          <CheckoutForm listing={listing} toggle={()=>{setShowCheckout(false)}}/>
        </motion.div>
      </Elements>
    }
    </AnimatePresence>

    </>
  );

  
}

export default HostDetailPagev2;