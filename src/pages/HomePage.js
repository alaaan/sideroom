
import '../App.css';
import { motion, AnimatePresence } from 'framer-motion';
import hero from '../img/header-illustration.png';
import step1 from '../img/step1.png'
import calendar from '../img/calendar.png';
import waiting from '../img/waiting.png'
import step4 from '../img/step4.png';
import Header from '../components/Header';
import door from '../img/door.png';
import {
  useRef,
  useEffect
} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TextPlugin } from "gsap/TextPlugin";
import Phone from '../components/phone'
import Sofa from '../img/sofa.png';
import HostCard from '../components/HostCard'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactPlayer from 'react-player';

import {ReactComponent as PhoneSvg} from '../img/phone.svg'
import shape from '../img/shape.svg'
import shape2 from '../img/shape2.svg'

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

  useEffect(() => {

    //setup animations here

    let tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: ".how-to-section",
        start: "top bottom", // when the top of the trigger hits the top of the viewport
        end: "bottom top", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar,
        markers:true
      }
    });

    tl.addLabel('startbg')
    tl.to('.shape2',{x:500,y:-100,rotate:360,rotateZ:5},'startbg')
    tl.to('.shape1',{x:-300,y:500,rotate:270,rotateZ:100},'startbg')
    tl.to('.shape3',{x:-120,y:100,rotate:100},'startbg')




      let headerTl=gsap.timeline();
      gsap.set('.hero-secondary-text',{visibility:'visible'});
      headerTl.addLabel('start');
      headerTl.from('.headline-h1',{transform:'skew(0deg)',rotateY:50,rotateX:25,rotateZ:10,y:500,x:-800,z:200,duration:1,delay:.5,ease:'Power2.out'},'start'); 
      // headerTl.from('.hero-secondary-text',{opacity:0,duration:.5},'start+=2')
      headerTl.to('.hero-secondary-text',{text:"prepare to pickup",duration:1.5,ease:'none'},'start+=2')
      headerTl.to('.hero-secondary-text',{text:"prepare to pickup.",duration:2,ease:'none'},'start+=4')

  



      // headerTl.staggerFrom('.phoneSVG path',.5,{opacity:0,stagger:.05},'start+=1'); 
      // headerTl.staggerFrom('.phoneSVG rect',.5,{opacity:0,stagger:.05},'start+=1'); 
      // headerTl.staggerFrom('.phoneSVG circle',.5,{opacity:0,stagger:.05,y:100},'start+=1'); 


      
  }, []);

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
            <h1 className='headline-h1' style={{paddingBottom:'1rem'}}>Get a video call from your favorite celeb.</h1>
            <h2 className="hero-secondary-text" style={{visiblity:'hidden',height:'2rem'}}></h2>
          </div>
          {/* <PhoneSvg className='phoneSVG' style={{ gridRow: 2, gridColumn: 3, justifySelf:'center' }} /> */}
  
        </section>

        
        <section className="how-to-section">
          <img src={shape} className='shape1'/>
          <img src={shape} className='shape2'/>
          <img src={shape2} className='shape3'/>

        <section className="home-card step1"></section>
        <section className="home-card step2"></section>
        <section className="home-card step3"></section>

          {/* <div className='test-thing-1'>
            <h1>Purchase Graphic</h1>
          </div>
          <div className='test-thing-2'>
          <h2>second step fam</h2>
            <ReactPlayer width='auto' loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/testfacetime.mp4' />
          </div>
          <div className='test-thing-3'>
            <h2>Third step fam</h2>
            <ReactPlayer width='auto' loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/testfacetime.mp4' />
          </div> */}
          {/* <div style={{ gridRow: 2, gridColumn: 2 }}>
            <h1 className="get-call-headline">How does this work?</h1>
            <h2 className="hero-seco%;dary-text">We got you covered.</h2>
          </div>
          <div className="how-to-grid">
            <div className="step-container">
              <div className="step-1">
                <StepImage src={step1} />
                <h2 style={{ justifySelf: "end", marginRight: '100px' }}>Pick your favorite host</h2>
              </div>
              <div className="step-2">
                <h2 style={{ justifySelf: "start", marginLeft: '100px' }}>Pick your preffered date</h2>
                <StepImage src={calendar} />
              </div>
              <div className="step-3">
                <StepImage src={waiting} />
                <h2 style={{ justifySelf: "end", marginLeft: '100px' }}>Wait for that special moment.</h2>
              </div>
              <div className="step-4">
                <h2 style={{ justifySelf: "start", marginLeft: '100px' }}>Get your call!</h2>
                <StepImage src={step4} />
              </div>
            </div>
          </div> */}
        </section>

        <section className="host-section">
          <div style={{ gridRow: 2, gridColumn: 2 }}>
            <h1 className="get-call-headline">Ready for a call?</h1>
            <h2 className="host-secondary-text">Pick your host to get started.</h2>
          </div>
          <div className="host-grid" style={{ gridRow: 3, gridColumnStart: 2, gridColumnEnd: 4 }}>
            <HostCards hosts={dummyHosts} />
          </div>

        </section>
        <section className="footer">
        </section>



      </div>
    </motion.div>
  );
}

export default App;