
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
      scrollTrigger: {
        trigger: ".how-to-section",
        markers:true,
        //pin: true,   // pin the trigger element while active
        pinSpacing:true,
        pin:'.how-to-section',
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=5000", // end after scrolling 5000px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // snap: {
        //   snapTo: "labels", // snap to the closest label in the timeline
        //   duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        //   ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
        // }
        }

    });

      // .to(".test-thing-1", {opacity:1})
      tl.addLabel("start")
      .to(".test-thing-1", {opacity:1,scale:1.2})
      .to(".test-thing-1", {scale:1,opacity:0,autoAlpha:true})
      tl.addLabel("second step")
      .to('.test-thing-2',{scale:1.2,opacity:1})
      .to('.test-thing-2',{opacity:0,scale:1})
      tl.addLabel("third step")
      .to('.test-thing-3',{scale:1.2,opacity:1})
      .to('.test-thing-3',{opacity:0,scale:1})
  


    // tl.to('.test-thing-1',{
    // scrollTrigger: {
    //   trigger: ".how-to-section",
    //   markers:true,
    //   //pin: true,   // pin the trigger element while active
    //   pinSpacing:true,
    //   pin:'.how-to-section',
    //   start: "top top", // when the top of the trigger hits the top of the viewport
    //   end: "+=500", // end after scrolling 500px beyond the start
    //   scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //   },opacity:1},1);

      // tl.to('.test-thing-1',{
      //   scrollTrigger: {
      //     trigger: ".how-to-section",
      //     markers:true,
      //     //pin: true,   // pin the trigger element while active
      //     pinSpacing:true,
      //     pin:'.how-to-section',
      //     start: "top +=500", // when the top of the trigger hits the top of the viewport
      //     end: "+=500", // end after scrolling 500px beyond the start
      //     scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      //     },opacity:0},1);

      // tl.to('.test-thing-2',{
      //   scrollTrigger: {
      //     trigger: ".test-thing-2",
      //     markers:true,
      //     pin: true,   // pin the trigger element while active
      //     pinSpacing:true,
      //     start: 2000, // when the top of the trigger hits the top of the viewport
      //     end: "+=500", // end after scrolling 500px beyond the start
      //     scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      //     },opacity:1},1);

      let headerTl=gsap.timeline();
      headerTl.addLabel('start');
      headerTl.from('.headline-h1',{transform:'skew(0deg)',repeat:3,yoyo:true,duration:.5,ease:'Power2.out'},'start'); 
      headerTl.from('.hero-secondary-text',{opacity:0,duration:.5},'start+=1')
      headerTl.staggerFrom('.phoneSVG path',.5,{opacity:0,stagger:.05},'start+=1'); 
      headerTl.staggerFrom('.phoneSVG rect',.5,{opacity:0,stagger:.05},'start+=1'); 
      headerTl.staggerFrom('.phoneSVG circle',.5,{opacity:0,stagger:.05,y:100},'start+=1'); 


      
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
            <h1 className='headline-h1'>Get a call from your favorite celeb.</h1>
            <h2 className="hero-secondary-text">Meet them in the sideroom.</h2>
          </div>
          <PhoneSvg className='phoneSVG' style={{ gridRow: 2, gridColumn: 3, justifySelf:'center' }} />
  
        </section>

        
        <section className="how-to-section">
          <div className='test-thing-1'>
            <h1>Purchase Graphic</h1>
          </div>
          <div className='test-thing-2'>
          <h2>second step fam</h2>
            <ReactPlayer width='auto' loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/testfacetime.mp4' />
          </div>
          <div className='test-thing-3'>
            <h2>Third step fam</h2>
            <ReactPlayer width='auto' loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/testfacetime.mp4' />

          </div>
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