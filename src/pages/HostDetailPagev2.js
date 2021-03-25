import { React, useState,useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import CheckoutForm from '../components/CheckoutForm'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SRButton from '../components/SRButton'
import gsap from 'gsap';
import { Redirect,useParams } from "react-router-dom";
import HostWebService from '../web_services/host_webservice';
import SRLoader from '../components/SRLoader';
import useImageLoader from '../hooks/useImageLoad';



const HostDetailPagev2 = () => {

  let {hostParam} = useParams();
  const [showCheckout,setShowCheckout] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [price,setPrice]=useState(null);
  const [time,setTime]=useState(null);
  const [hostImage,setHostImage]=useState(null);
  const [hostName,setHostName]=useState(null);
  const [description,setDescription]=useState(null);
  // const [soldOut,setSoldOut]=useState(null);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [listing,setListing]=useState({});
  const [hostImg,hostImgLoaded] = useImageLoader(hostImage);

  useEffect(() => {

    setIsLoading(true);
    console.log('host param:' + hostParam)
    const webService = new HostWebService();
    const loadData = async () => {
      var payload = await webService.getHostListing(hostParam);
      if (!payload.Errored) {
        setStates(payload.Payload);
      } else {
        setShouldRedirect(true);
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
        hostImg:data.HostImage, 
        hostName:data.HostName, 
        description:data.Descripton
      })

      setIsLoading(false);

    }
  
  },[hostParam]);

  const handleCheckout = ()=>{
    setShowCheckout(true);
  }

  const redirect = () =>{
    console.log('should be redirecting');
    setShouldRedirect(true);
  }

  //load stripe
  const stripePromise = loadStripe("pk_test_3buay5fqqWRRQ6lsNDXiqph5");



  return (
    <>
    {shouldRedirect && <Redirect to={"/"} />}
  
  
    <AnimatePresence>
    {isLoading && <SRLoader label="loading event details..."/> }
    {!showCheckout && !isLoading && hostImgLoaded &&
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1,duration:1}}
    exit={{ opacity: 0 }}>
    <div className="host-detail-pagev2">
      {/* <ReactPlayer width='auto' loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/testfacetime.mp4' /> */}

      <div className='host-detail-right'>
        <div className="host-detail-info-container">
          <img src={hostImage} alt='host' style={{alignSelf:'center'}} />

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
        <SRButton type="submit" onClick={handleCheckout} style={{ marginTop: '5%',marginBottom:'5%'}}>Purchase Call</SRButton>
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
          <CheckoutForm redirect={redirect} listing={listing} toggle={()=>{setShowCheckout(false)}}/>
        </motion.div>
      </Elements>
    }
    </AnimatePresence>

    </>
  );

  
}

export default HostDetailPagev2;