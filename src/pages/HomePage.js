
import '../App.css';
import '../styles/HomePage.css';
import '../styles/ConfirmationModal.css';
import '../styles/HostDetailPagev2.css'

import { motion } from 'framer-motion';
import {
  useEffect
} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TextPlugin } from "gsap/TextPlugin";
// import HostCard from '../components/HostCard'
import ReactPlayer from 'react-player';
import {ReactComponent as WaveTop} from '../img/wave-top.svg';
import step1 from '../img/how-to-section/step1.png'
import step2 from '../img/how-to-section/step2.png'
import step3 from '../img/how-to-section/step3.png'



gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

// function HostCards(props) {
//   const hosts = props.hosts;
//   const hostCardsList = hosts.map((host) => {
//     return (<HostCard name={host.name} img={host.img} genre={host.genre} price={host.price} slug={host.id} />);
//   })
//   return (hostCardsList);
// }


function App() {

  // const [hostText,setHostText] = useState('celeb');

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
    headerTextTl.to('.hero-secondary-text',{text:"be a super fan.",duration:3,ease:'back'})


    let howToTl = gsap.timeline({scrollTrigger:{trigger:'.how-to-section',start:'top 75%', end: '+000'}});
    howToTl.from('#action-1',{opacity:0,xPercent:100,z:10});
    howToTl.from('#action-2',{opacity:0});
    howToTl.from('#action-3',{opacity:0});




      let headerTl=gsap.timeline();
      gsap.set('.hero-secondary-text',{visibility:'visible'});
      headerTl.from('.header-video',{x:100,duration:1,opacity:0});

     


      
  }, []);

  // const cycleHostText = ()=>{
  //   setHostText("athlete");
  // }

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
      

            <h2 className="hero-secondary-text" style={{visiblity:'hidden',height:'2rem'}}> </h2>
          </div>
        
          {/* <PhoneSvg className='phoneSVG' style={{ gridRow: 2, gridColumn: 3, justifySelf:'center' }} /> */}
          <div className="wave-top">
          <WaveTop />
          </div>
        </section>
        
       
        
        <section className="how-to-section">

          <div className='how-to-box left text book'>
              <h1>book your call.</h1>
              <h3>Easily and securely buy a video call for you or buy one as a perfect gift for that special mega fan.</h3>
          </div>
          <div className='how-to-box right book-img'  >
              <img src={step1} alt='step1'/>
          </div>
          <div className='how-to-box left redeem-img'>
            <img src={step2} alt='step2'/>
          </div>
          <div className='how-to-box right text redeem'>
              <h1>redeem your access code.</h1>
              <h3>download the app on iOS and Android.</h3>
          </div>
         
          <div className='how-to-box left text call'>
              <h1>wait for your call.</h1>
              <h3>get ready for your call.</h3>

          </div>
          <div className='how-to-box right call-img'>
            <img src={step3} alt='step3'/>
          </div>
     
        </section>
{/* 
        <section className="testimonial-section" > */}

{/* <div className='testimonial-video' style={{overflow:'hidden',borderRadius:'7px'}}>
  <ReactPlayer loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/testvideo.mp4' />
</div> */}

  
 
{/* 
        <div className='testimonial-video' style={{overflow:'hidden',borderRadius:'7px'}}>
          <ReactPlayer loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/reaction.mp4' />
      </div>
      <div className='testimonial-video' style={{overflow:'hidden',borderRadius:'7px'}}>
          <ReactPlayer loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/reaction.mp4' />
      </div>
      <div className='testimonial-video' style={{overflow:'hidden',borderRadius:'7px'}}>
          <ReactPlayer loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/reaction.mp4' />
      </div>   */}

      {/* </section> */}


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