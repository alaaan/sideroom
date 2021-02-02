
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
import paymentMethod from '../img/paymentmethod.png'
import waves from '../img/waves.svg';

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
        end: "middle top", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar,
        markers:true
      }
    });

    tl.addLabel('startbg')
    // tl.to('.shape2',{x:500,y:-100,rotate:360,rotateZ:5},'startbg')
    // tl.to('.shape1',{x:-300,y:500,rotate:270,rotateZ:100},'startbg')
    tl.fromTo('.video1',{rotateX:-10,opacity:0,y:100,x:-300,z:-200},{rotateX:0,duration:2,opacity:1,z:0, y:0,x:0,ease:'Power2.out'},'startbg')
    tl.fromTo('.video2',{rotateX:-10,opacity:0,y:-100,x:300,z:-200},{rotateX:0,duration:2,opacity:1,z:0, y:0,x:0,ease:'Power2.out'},'startbg+=3')
    tl.fromTo('.how-to-box',{rotateY:-20,opacity:0,y:-100,x:600,z:20},{rotateY:0,duration:2,opacity:1,z:0, y:0,x:0,ease:'Power2.out'},'startbg+=2')
    tl.from('.how-to-title',{z:100,rotateX:10,duration:1},'startbg+=4')

    // tl.to('.how-to-section',{'background':'radial-gradient(circle, rgba(97, 45, 140, 1) 0%, rgba(33, 26, 68, 1) 93%)',duration:3},'startbg')
    // tl.to('.shape3',{scale:2,rotate:15,repeat:2},'startbg-=2');



      let headerTl=gsap.timeline();
      gsap.set('.hero-secondary-text',{visibility:'visible'});
      headerTl.addLabel('start');
      headerTl.from('.headline-h1',{transform:'skew(0deg)',rotateY:50,rotateX:25,y:500,x:-800,duration:1,delay:.5,ease:'Power2.out'},'start'); 
      // headerTl.from('.hero-secondary-text',{opacity:0,duration:.5},'start+=2')
      headerTl.to('.hero-secondary-text',{text:"prepare to pickup",duration:1.5,ease:'none'},'start+=2')
      headerTl.to('.hero-secondary-text',{text:"prepare to pickup.",duration:4,ease:'none'},'start+=4')

  



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
          {/* <img src={shape} className='shape1'/>
          <img src={shape} className='shape2'/> */}
          <div className='video1' style={{overflow:'hidden',borderRadius:'7px'}}>
            <ReactPlayer loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/reaction.mp4' />
          </div>
          
          <div className='video2' style={{overflow:'hidden',borderRadius:'7px'}}>
            <ReactPlayer loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/reaction.mp4' />
          </div>

          <div className="how-to-box">
            <h1 className='how-to-title'>book it</h1>
            <p>Securely and easily on our site.</p>
            <div>
              <img className="book-call-img-left" src={paymentMethod} width='200px' />
              <img className="book-call-img-right" src={paymentMethod} width='200px' />
            </div>
            
            {/* <div className='checkoutVideo' style={{overflow:'hidden',borderRadius:'7px'}}>
              <ReactPlayer loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/fancheckout.mov' />
            </div> */}
            <img style={{position:'absolute',bottom:'0px',zIndex:'-1'}} src={waves} />


          </div>

          <div className="how-to-box">
            <h1 className='how-to-title'>download the app</h1> 
            <p>we got you covered on iOS and Android.</p>
            {/* <div className='checkoutVideo' style={{overflow:'hidden',borderRadius:'7px'}}>
              <ReactPlayer loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/fancheckout.mov' />
            </div> */}
            <img style={{position:'absolute',bottom:'0px',zIndex:'-1'}} src={waves} />
          </div>

          <div className="how-to-box">
            <h1 className='how-to-title'>wait for your call</h1> 
            <p>get ready for the magic.</p>

            {/* <div className='checkoutVideo' style={{overflow:'hidden',borderRadius:'7px'}}>
              <ReactPlayer loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/fancheckout.mov' />
            </div> */}
            <img style={{position:'absolute',bottom:'0px',zIndex:'-1'}} src={waves} />
          </div>




       
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

        {/* https://conectrmedia.blob.core.windows.net/files/reaction.mp4 */}

      </div>
    </motion.div>
  );
}

export default App;