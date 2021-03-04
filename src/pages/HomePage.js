
import '../App.css';
import '../styles/HomePage.css';
import '../styles/ConfirmationModal.css';
import '../styles/HostDetailPagev2.css'

import { motion, AnimatePresence } from 'framer-motion';
import {
  useState,
  useEffect
} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TextPlugin } from "gsap/TextPlugin";
import HostCard from '../components/HostCard'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactPlayer from 'react-player';

import {ReactComponent as PhoneSvg} from '../img/phone.svg'
import shape from '../img/shape.svg'
import shape2 from '../img/shape2.svg'
import paymentMethod from '../img/paymentmethod.png'
import waves from '../img/waves.svg';
import calendarSVG from '../img/booking.svg';
import downloadSVG from '../img/download.svg';
import videochatSVG from '../img/videochat.svg';
import {ReactComponent as WaveSVG} from '../img/waves.svg';
import {ReactComponent as WaveTop} from '../img/wave-top.svg';
import {ReactComponent as LogoSpinner} from '../img/logo-spinner.svg'
import webscreenbuy from '../img/web_screen_buy.png'
import TitleSection from '../components/TitleSection';
import phoneStockPhoto from '../img/phone-stock-photo.jpg'
import ActionBox from '../components/ActionBox'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

function HostCards(props) {
  const hosts = props.hosts;
  const hostCardsList = hosts.map((host) => {
    return (<HostCard name={host.name} img={host.img} genre={host.genre} price={host.price} slug={host.id} />);
  })
  return (hostCardsList);
}

function StepImage(props) {

  return (
    <div className="step-img-container">
      <img className="step-img" src={props.src} />
    </div>

  )

}


function App() {

  const [hostText,setHostText] = useState('celeb');

  useEffect(() => {

    //setup animations here

    gsap.to('#logo-spinner-text',{delay:5,rotate:360,duration:8,repeat:-1,ease: 'none',transformOrigin:'center'});


    let headerTextTl = gsap.timeline();
    headerTextTl.set('#host-type-celeb',{display:'inline-block'})
    headerTextTl.from('.headline-h1',{transform:'skew(0deg)',rotateY:20,rotateX:25,y:500,x:-800,duration:.5,ease:'power1'}) ;
    headerTextTl.to('#host-type-celeb',{delay:1,duration:.25,opacity:0,display:"none"});

    headerTextTl.set('#host-type-athlete',{display:'inline-block'})
    headerTextTl.from('#host-type-athlete',{opacity:0,rotateX:-100,rotateZ:-1,duration:.5,transformOrigin:'center',ease:'back'});
    headerTextTl.to('#host-type-athlete',{duration:.25,opacity:0,display:"none"},'<2');

    headerTextTl.set('#host-type-artist',{display:'inline-block'})
    headerTextTl.from('#host-type-artist',{opacity:0,rotateX:-100,rotateZ:-1,duration:.5,transformOrigin:'center',ease:'back'});
    headerTextTl.to('.hero-secondary-text',{text:"prepare to pickup.",duration:3,ease:'back'})


    let howToTl = gsap.timeline({scrollTrigger:{trigger:'.how-to-section',start:'top 75%', end: '+000'}});
    howToTl.from('#action-1',{opacity:0,xPercent:100,z:10});
    howToTl.from('#action-2',{opacity:0});
    howToTl.from('#action-3',{opacity:0});




    gsap.from('.testimonial-video',{duration:.5,stagger:.5,opacity:0,y:50,
      scrollTrigger:{trigger:'.testimonial-video',scrub:.5,start:'top 75%',end:'bottom 75%'}})


      let headerTl=gsap.timeline();
      gsap.set('.hero-secondary-text',{visibility:'visible'});
      headerTl.from('.header-video',{x:100,duration:1,opacity:0});

     


      
  }, []);

  const cycleHostText = ()=>{
    setHostText("athlete");
  }

  const dummyHosts = [
    {
      name: "brad pitt",
      img: "https://i.pravatar.cc/200",
      genre: "actor",
      price: "$100",
      id: "bradpitt"
    },

    {
      name: "Dansby Swanson",
      img: "https://i.pravatar.cc/200",
      genre: "athlete",
      price: "$100",
      id: "dansby"
    },
    {
      name: "brad pitt",
      img: "https://i.pravatar.cc/200",
      genre: "actor",
      price: "$100",
      id: "bradpitt"
    },

    {
      name: "brad pitt",
      img: "https://i.pravatar.cc/200",
      genre: "actor",
      price: "$100",
      id: "bradpitt"
    },
    {
      name: "brad pitt",
      img: "https://i.pravatar.cc/200",
      genre: "actor",
      price: "$100",
      id: "bradpitt"
    },

    {
      name: "Dansby Swanson",
      img: "https://i.pravatar.cc/200",
      genre: "athlete",
      price: "$100",
      id: "dansby"
    }

  ];

  return (
    <motion.div className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      {/* <Header /> */}
      <div className="section-wrapper">
        {/* <section className="loading-section">
          <img className="sofa" src={Sofa} />
          <h1 className="loading-text"></h1>
        </section> */}
        <section className="hero-section">
          <div className="hero-left-container" style={{ gridRow: 2}}>
      <h1 className='headline-h1' style={{paddingBottom:'1rem'}}>Get a video call from your favorite <span id="host-type-celeb"> celeb</span><span id="host-type-athlete" style={{display:'none'}}> athlete</span><span id="host-type-artist" style={{display:'none'}}> artist</span>
      </h1>
      

            <h2 className="hero-secondary-text" style={{visiblity:'hidden',height:'2rem'}}></h2>
          </div>
          <div className='header-video' style={{overflow:'hidden',borderRadius:'7px'}}>
            <img src={phoneStockPhoto} alt='phone' style={{maxWidth:'300px'}} />
           </div>
          {/* <PhoneSvg className='phoneSVG' style={{ gridRow: 2, gridColumn: 3, justifySelf:'center' }} /> */}
          <div className="wave-top">
          <WaveTop />
          </div>
        </section>
        
        <section className="testimonial-section">

        {/* <div className='testimonial-video' style={{overflow:'hidden',borderRadius:'7px'}}>
          <ReactPlayer loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/testvideo.mp4' />
        </div> */}

          
         
        
                <div className='testimonial-video' style={{overflow:'hidden',borderRadius:'7px'}}>
                  <ReactPlayer loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/reaction.mp4' />
              </div>
              <div className='testimonial-video' style={{overflow:'hidden',borderRadius:'7px'}}>
                  <ReactPlayer loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/reaction.mp4' />
              </div>
              <div className='testimonial-video' style={{overflow:'hidden',borderRadius:'7px'}}>
                  <ReactPlayer loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/reaction.mp4' />
              </div>  

        </section>

        
        <section className="how-to-section">
          {/* <LogoSpinner /> */}

          <ActionBox id='action-1' title="book it." subtitle="book it securely on our website." />
          <ActionBox id='action-2' title="download the app." subtitle="available on iOS and Android." />
          <ActionBox id='action-3' title="wait for that moment." subtitle="get your call within 14 days." />




    
      



       
        </section>

            {/* Host Section Code  */}
        {/* <section className="host-section">
          <div style={{ gridRow: 2, gridColumn: 2 }}>
            <h1 className="get-call-headline">Ready for a call?</h1>
            <h2 className="host-secondary-text">Pick your host to get started.</h2>
          </div>
          <div className="host-grid" style={{ gridRow: 3, gridColumnStart: 2, gridColumnEnd: 4 }}>
            <HostCards hosts={dummyHosts} />
          </div>

        </section> */}
        {/* <section className="footer">
          <h1>Footer Content</h1>
        </section> */}

        {/* https://conectrmedia.blob.core.windows.net/files/reaction.mp4 */}

      </div>
    </motion.div>
  );
}

export default App;