
import '../App.css';
import '../styles/HomePage.css';
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


    let tl = gsap.timeline({

      delay:10
      // scrollTrigger: {
      //   trigger: ".how-to-section",
      //   start: "top middle", // when the top of the trigger hits the top of the viewport
      //   end: "bottom top", // end after scrolling 500px beyond the start
      //   scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar,
      //   markers:true
      // }
    });



    gsap.from('.testimonial-video',{duration:.5,stagger:.5,opacity:0,y:50,
      scrollTrigger:{trigger:'.testimonial-video',scrub:.5,start:'top 75%',end:'bottom 75%'}})

    let box1Tl = gsap.timeline({
      scrollTrigger:{trigger:'.how-to-box',start:'top 50%',end:'50% 50%'}
    });

    let wave1Tl = gsap.timeline(
      {scrollTrigger:{trigger:'.how-to-box',scrub:1,start:'top 50%',end:'bottom 50%',markers:true}});
    wave1Tl.from('#top-wave',{y:25})
    wave1Tl.from('#middle-wave',{y:200},'<')

    box1Tl.fromTo('#box-1',{rotateY:-5,opacity:0,y:50,z:5},{duration:1,stagger:.5,rotateY:0,opacity:1,z:0, y:0,x:0,ease:'back'})
    box1Tl.from('#box-1-title',{opacity:0,y:20,duration:.05},'<.5');
    box1Tl.from('#box-1-p',{opacity:0,y:20,duration:.05},'<.5');
    
    box1Tl.from('#box-1-img',{opacity:0,xPercent:5,y:5,duration:1,ease:'back'},'<.25');



    // tl.to('.how-to-section',{'background':'radial-gradient(circle, rgba(97, 45, 140, 1) 0%, rgba(33, 26, 68, 1) 93%)',duration:3},'startbg')
    // tl.to('.shape3',{scale:2,rotate:15,repeat:2},'startbg-=2');



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
          <div className="hero-left-container" style={{ gridRow: 2, gridColumn: 2 }}>
      <h1 className='headline-h1' style={{paddingBottom:'1rem'}}>Get a video call from your favorite <span id="host-type-celeb"> celeb</span><span id="host-type-athlete" style={{display:'none'}}> athlete</span><span id="host-type-artist" style={{display:'none'}}> artist</span>
      </h1>
      

            <h2 className="hero-secondary-text" style={{visiblity:'hidden',height:'2rem'}}></h2>
          </div>
          <div className='header-video' style={{overflow:'hidden',borderRadius:'7px'}}>
            <h3>Animated Content</h3>
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

          <div id="box-1" className="how-to-box" style={{opacity:0}}>
            <h1 id='box-1-title'className='how-to-title'>book it</h1>
            <p id='box-1-p'>Securely and easily on our site.</p>
            {/* <img id='box-1-img' alt="calendar" src={calendarSVG } style={{width:'40%',marginTop:'20px',opacity:0}} /> */}
            <img id='box-1-img' alt="book" src={webscreenbuy} style={{width:'75%',marginTop:'20px'}} /> 
            <WaveSVG />
            {/* <img id='box-1-waves' alt="waves" style={{position:'absolute',bottom:'0px',zIndex:'-1'}} src={waves} /> */}


          </div>

          <div className="how-to-box">
            <h1 className='how-to-title'>download the app</h1> 
            <p>we got you covered on iOS and Android.</p>
            <img src={downloadSVG } style={{width:'40%',marginTop:'30px'}} />

            {/* <div className='checkoutVideo' style={{overflow:'hidden',borderRadius:'7px'}}>
              <ReactPlayer loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/fancheckout.mov' />
            </div> */}
            <img style={{position:'absolute',bottom:'0px',zIndex:'-1'}} src={waves} />
          </div>

          <div className="how-to-box">
            <h1 className='how-to-title'>wait for your call</h1> 
            <p>get ready for the magic.</p>
            <img src={videochatSVG } style={{width:'40%',marginTop:'20px'}} />


            {/* <div className='checkoutVideo' style={{overflow:'hidden',borderRadius:'7px'}}>
              <ReactPlayer loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/fancheckout.mov' />
            </div> */}
            <img style={{position:'absolute',bottom:'0px',zIndex:'-1'}} src={waves} />
          </div>



       
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
        <section className="footer">
        </section>

        {/* https://conectrmedia.blob.core.windows.net/files/reaction.mp4 */}

      </div>
    </motion.div>
  );
}

export default App;