import logo from './logo.svg';
import './App.css';
import { motion } from 'framer-motion';

import {
  useRef,
  useEffect
} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TextPlugin } from "gsap/TextPlugin";
import LivingRoom from '../src/components/livingroom'
import Phone from '../src/components/phone'
import Sofa from '../src/img/sofa.png';
import HostCard from '../src/components/HostCard'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

function App() {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  };

  useEffect(() => {

    let tl = gsap.timeline({
      smoothChildTiming: true,
    });

    // tl.to('.phone', 3, { rotation: "360", ease: 'none' });
    // tl.to('.phone', 1, { opacity: 0, display: 'none' });
    tl.to('.sofa', 3, { rotation: "360", ease: 'none', opacity: 0, display: 'none' });
    // tl.fromTo('.phone', .5, { xPercent: 200 }, { xPercent: 0 })
    tl.to('.loading-text', { text: 'Are you ready to meet them?', duration: 2, opacity: 1 })
    // tl.fromTo('.loading-text', { y: -100 }, { y: 0, opacity: 1 })
    // tl.to('.loading-text', { y: 25, zIndex: 0, delay: 2 })
    tl.to('.section-1', .1, { opacity: 1, delay: 2 })
    tl.fromTo('.section-1', { y: -1000 }, { y: 0, ease: 'Bounce.easeOut', duration: 2 }, '-=.5')
    tl.from('.hero-text', { y: 10, opacity: 0, delay: 1 })

    let tl2 = gsap.timeline(); 

    tl2.to(('.get-call-headline'),
      {
        text: "How does this work?",
        duration: 1,
        scrollTrigger: { id: 'get-call-id', trigger: '.get-call-headline', start: 'top center', toggleActions: 'play none none none' }
      });
      tl2.from('.get-call-subheading', { y: 10, opacity: 0, delay: 1 })

    



  }, []);



  return (
    <div className="App" >
      <div className="section-wrapper">
        <section className="loading-section">
          <img className="sofa" src={Sofa} />
          <h1 className="loading-text"></h1>
        </section>
        <section className="section-1">
          <div className="logo-section">
            <h1>SIDE<span style={{ display: 'block', marginTop: '-1.5rem' }}>ROOM</span></h1>
          </div>
          <div style={{ gridRow: '3', gridColumn: '1', alignSelf: 'center', paddingLeft: '1rem' }}>
            <h1 className="hero-text-secondary" style={{alignSelf: 'center', justifySelf: 'center' }}>Get a call from your favorite celeb</h1>
            <h2 className="hero-text" style={{ alignSelf: 'center', justifySelf: 'center' }}>Meet them in the sideroom.</h2>
          </div>
          <LivingRoom />
        </section>
        <section className="section-2">
          <div className="host-grid">
            <HostCard />
            <HostCard />
            <HostCard />
            <HostCard />
            <HostCard />
            <HostCard />
            <HostCard />
            <HostCard />

          </div>
          <div style={{alignSelf:'end'}}>
            <h1 className="get-call-headline"></h1>
            <h2 className="get-call-subheading">Pick your host to get started.</h2>
          </div>
        </section>
        <section className="section-3">
          <div className="howto-grid"></div>
            <div style={{alignSelf:'end'}}>
              <h1>How does this work?</h1>
            </div>
        </section>


      </div>
    </div>
  );
}

export default App;