
import '../App.css';
import { motion, AnimatePresence } from 'framer-motion';



import {
  useRef,
  useEffect
} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TextPlugin } from "gsap/TextPlugin";
import LivingRoom from '../components/livingroom'
import Phone from '../components/phone'
import Sofa from '../img/sofa.png';
import HostCard from '../components/HostCard'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


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
      name: "Dansby Swanson",
      img: "https://i.pravatar.cc/200",
      genre: "athlete",
      price: "$100",
      id: "dansby"
    },

  ];

  function HostCards(props) {
    const hosts = props.hosts;
    const hostCardsList = hosts.map((host) => {
      console.log("got into host mapping");
      return (<HostCard name={host.name} img={host.img} genre={host.genre} price={host.price} slug={host.id} />);
    })

    return (hostCardsList);

  }

  return (
    <motion.div className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      <div className="section-wrapper">
        {/* <section className="loading-section">
          <img className="sofa" src={Sofa} />
          <h1 className="loading-text"></h1>
        </section> */}
        <section className="section-1">
          <div style={{ gridRow: '3', gridColumn: '1', alignSelf: 'center', paddingLeft: '1rem' }}>
            <h1 className="hero-text-secondary" style={{ alignSelf: 'center', justifySelf: 'center' }}>Get a call from your favorite celeb</h1>
            <h2 className="hero-text" style={{ alignSelf: 'center', justifySelf: 'center' }}>Meet them in the sideroom.</h2>
          </div>
          <LivingRoom />
        </section>

        <section className="section-2">
          <div style={{ alignSelf: 'start', justifySelf: 'end' }}>
            <h1 className="get-call-headline">Ready for a call?</h1>
            <h2 className="get-call-subheading">Pick your host to get started.</h2>
          </div>
          <div className="host-grid">
            <HostCards hosts={dummyHosts} />
          </div>

        </section>
        <section className="section-3">
          <div className="howto-grid"></div>
          <div style={{ alignSelf: 'end' }}>
            <h1>How does this work?</h1>
          </div>
        </section>


      </div>
    </motion.div>
  );
}

export default App;