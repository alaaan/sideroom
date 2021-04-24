
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
import instagram from '../img/ig.svg'
import twitter from '../img/twitter.svg'
import Divider from '../components/Divider'



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
    headerTextTl.to('.hero-secondary-text',{text:"meet your favorite celeb.",duration:3,ease:'back',},'>')
    headerTextTl.to('#host-type-celeb',{delay:1,duration:.25,opacity:0,display:"none"});

    headerTextTl.set('#host-type-athlete',{display:'inline-block'})
    headerTextTl.from('#host-type-athlete',{opacity:0,rotateX:-100,rotateZ:-1,duration:.5,transformOrigin:'center',ease:'back'});
    headerTextTl.to('#host-type-athlete',{duration:.25,opacity:0,display:"none"},'<2');

    headerTextTl.set('#host-type-artist',{display:'inline-block'})
    headerTextTl.from('#host-type-artist',{opacity:0,rotateX:-100,rotateZ:-1,duration:.5,transformOrigin:'center',ease:'back'});
    

    let howToRedeem = gsap.timeline({scrollTrigger:{trigger:'.redeem',start:'top 70%'}});
    howToRedeem.from('.redeem-headline',{opacity:0,y:10});
    howToRedeem.from('.redeem-subheadline',{opacity:0,x:20,duration:.5},'>');
    howToRedeem.from('.redeem-img',{opacity:0,z:-10},'<');
    howToRedeem.from('.call-headline',{opacity:0,y:10},'<');
    howToRedeem.from('.call-subheadline',{opacity:0,x:20,duration:.5},'>');
    howToRedeem.from('.call-img',{opacity:0,z:-10},'<');

    // let howToCall = gsap.timeline({scrollTrigger:{trigger:'.call',start:'top 70%'}});
    // howToCall.from('.call-headline',{opacity:0,y:10});
    // howToCall.from('.call-subheadline',{opacity:0,x:20,duration:.5},'>');
    // howToCall.from('.call-img',{opacity:0,z:-10},'<');





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
          <h1 className='headline-h1 gradient' style={{paddingBottom:'1rem'}}>a video call for fans.</h1>
      
      {/* <span id="host-type-celeb"> celeb</span><span id="host-type-athlete" style={{display:'none'}}> athlete</span><span id="host-type-artist" style={{display:'none'}}> artist</span> */}
     
      

            <h2 className="hero-secondary-text" style={{visiblity:'hidden',height:'2rem'}}> </h2>

          </div>

          {/* <div className="wave-top">
          <WaveTop />
          </div> */}
        </section>
        
       
        <Divider divWidth='100%' divHeight="2px" style={{alignSelf:'start'}} />

        <section className="how-to-section">


          <div className='how-to-box text book'>
              <h1 className='gradient' >book a video call.</h1>
              <h3 subheadline>Easily and securely buy a video call for you or buy one as a perfect gift for that special mega fan. After purchasing your call, you will recieve an access code.
                You can use this for yourself, or send it along as a gift. 
              </h3>
          </div>
          <div className='how-to-box book-img'  >
              <img src={step1} alt='step1'/>
          </div>
          <div className='how-to-box redeem-img'>
            <img src={step2} alt='step2'/>
          </div>
          <div className='how-to-box text redeem'>
              <h1 className='redeem-headline gradient'>get the app.</h1>
              <h3 className='redeem-subheadline subheadline'>Download the app on iOS or Android, within 48 hours of purchase. The host will be notificed that 
              you have redeemed, and then be ready at any time for the host to call you. </h3>
          </div>
         
          <div className='how-to-box text call'>
              <h1 className='call-headline gradient'>be ready.</h1>
              <h3 className='call-subheadline subheadline'>Talent will make calls at random, and thats the exciting part. You never know when a call may be coming. 
              If you miss the call after three attempts or 30 days pass, you'll automatically be eligible for  refund. The process is 100% risk free.</h3>

          </div>
          <div className='how-to-box right call-img'>
            <img src={step3} alt='step3'/>
          </div>
     
        </section>
        <section className='home-footer' style={{textAlign:'end'}}>
          <div className="home-footer-content">
            <div>
              <img src={instagram} alt="ig" width='30px' />
              <img src={twitter} alt="twitter" width='30px' />
            </div>
            <div>
              <h3>Built with love in Atlanta.</h3>
              <p style={{fontSize:'.8rem',marginRight:'5%'}}>hello@connectr.live</p>
            </div>
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