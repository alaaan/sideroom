import { React, useState,useEffect,useContext } from 'react'
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
import {Helmet} from "react-helmet";
import {ThemeContext} from '../context/theme-context';
import ReactPlayer from 'react-player';
import HostVideo from '../components/HostVideo'
import videoGradient from '../img/video-gradient.svg'





const HostDetailPagev2 = () => {

  let {hostParam} = useParams();
  const [showCheckout,setShowCheckout] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [price,setPrice]=useState(null);
  const [time,setTime]=useState(null);
  const [hostImage,setHostImage]=useState(null);
  const [hostName,setHostName]=useState(null);
  const [description,setDescription]=useState(null);
  const [soldOut,setSoldOut]=useState(false);
  const [hostVideo,setHostVideo]=useState(null);
  // const [soldOut,setSoldOut]=useState(null);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [listing,setListing]=useState({});
  const hostImgLoaded = useImageLoader(hostImage);
  const {setHasHeader} = useContext(ThemeContext);
  const [videoExists,setVideoExists] = useState(false);
  const [videoReady,setVideoReady] = useState(false);


  useEffect(() => {
    setHasHeader(true);
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
      setSoldOut(data.SoldOut);

      if (data.HostVideo){
        setVideoExists(true);
        setHostVideo(data.HostVideo)
      }

      setListing({
        price:data.Price,
        time:data.Time,
        hostImg:data.HostImage, 
        hostName:data.HostName, 
        description:data.Description,
        soldOut:data.SoldOut,
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
         {/* <Helmet>
              
        </Helmet> */}

    {shouldRedirect && <Redirect to={"/"} />}
  
  
    <AnimatePresence>
    {isLoading && <SRLoader label="loading event details..."/> }
    {!showCheckout && !isLoading && hostImgLoaded &&
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1,duration:1}}
    exit={{ opacity: 0 }}>
    <div className="host-detail-pagev2">

      <div className='host-detail-right'>
        <div className="host-detail-info-container">
       
          <img className='host-image' src={hostImage} alt='host' style={{alignSelf:'center'}} />
         
         


          <h3 style={{color:'white'}}>A personal {time} minute video call from</h3>
          <h2>{hostName}</h2>
          <div style={{height:'10px',width:'20%',background:'var(--ocean-blue'}}></div>
          <h3 style={{color:'white',marginTop:'2%',fontSize:'2rem'}}>${price}</h3>

          <div>
            <h3 className="gradient" style={{marginTop:'5%'}}>About the Video Call</h3>
            <p>{description}</p>
          </div>

          <div>
            <h3 className="gradient" style={{marginTop:'5%'}}>Details and Info</h3>
            <p>You’ll have three chances at different times to answer your video calls. Calls are made at random, and you will be refunded if {hostName} doesn’t fulfill the order within 14 days.</p>
          </div>
        </div>
        {!soldOut && <SRButton type="submit" onClick={handleCheckout} style={{ marginTop: '5%',marginBottom:'5%'}}>Purchase Video Call</SRButton>}
        {soldOut && <SRButton disabled style={{ marginTop: '5%',marginBottom:'2%'}}>Sold Out</SRButton>}
        {soldOut && <p>Check back soon for more openings.</p>}

        {/* <div style={{visibility:(videoReady ? 'hidden' : 'visible'),height:'20px'}}><SRLoader/></div> */}
        <section className='host-welcome-video' style={{display:(videoReady ? 'block' : 'none'), width:'250px', height:'406px', marginTop:'20px',marginBottom:'50px',position:'relative'}}>
          {/* <img style={{position:'absolute',left:'5%',top:'5%'}} src={videoGradient} alt='background' /> */}

          {videoExists && <HostVideo loaded={()=>setVideoReady(true)} url={hostVideo} />}
        </section>


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