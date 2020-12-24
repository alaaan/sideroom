
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

    // let tl = gsap.timeline({
    //   smoothChildTiming: true,
    // });

    // // tl.to('.phone', 3, { rotation: "360", ease: 'none' });
    // // tl.to('.phone', 1, { opacity: 0, display: 'none' });
    // tl.to('.sofa', 3, { rotation: "360", ease: 'none', opacity: 0, display: 'none' });
    // // tl.fromTo('.phone', .5, { xPercent: 200 }, { xPercent: 0 })
    // tl.to('.loading-text', { text: 'Are you ready to meet them?', duration: 2, opacity: 1 })
    // // tl.fromTo('.loading-text', { y: -100 }, { y: 0, opacity: 1 })
    // // tl.to('.loading-text', { y: 25, zIndex: 0, delay: 2 })
    // tl.to('.section-1', .1, { opacity: 1, delay: 2 })
    // tl.fromTo('.section-1', { y: -1000 }, { y: 0, ease: 'Bounce.easeOut', duration: 2 }, '-=.5')
    // tl.from('.hero-text', { y: 10, opacity: 0, delay: 1 })

    // let tl2 = gsap.timeline();

    // tl2.to(('.get-call-headline'),
    //   {
    //     text: "Pick your host to get started! ",
    //     duration: 1,
    //     scrollTrigger: { id: 'get-call-id', trigger: '.section-2', start: 'top center', toggleActions: 'play none none none' }
    //   });
    // tl2.from('.get-call-subheading', { y: 10, opacity: 0, delay: 1 })

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
      <Header />
      <div className="section-wrapper">
        {/* <section className="loading-section">
          <img className="sofa" src={Sofa} />
          <h1 className="loading-text"></h1>
        </section> */}
        <section className="hero-section">
          <div className="hero-left-container" style={{ gridRow: 2, gridColumn: 2 }}>
            <h1>Get a call from your favorite celeb.</h1>
            <h2 className="hero-secondary-text">Meet them in the sideroom.</h2>
          </div>
          <img src={hero} style={{ gridRow: 2, gridColumn: 3 }} />
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
        <section className="how-to-section">
          <div style={{ gridRow: 2, gridColumn: 2 }}>
            <h1 className="get-call-headline">How does this work?</h1>
            <h2 className="hero-secondary-text">We got you covered.</h2>
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
          </div>
        </section>


      </div>
    </motion.div>
  );
}

export default App;