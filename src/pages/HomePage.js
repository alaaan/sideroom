
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
import heroIllustration from '../img/illustration.svg'
import booksvg from '../img/bookcall.svg'
import redeemsvg from '../img/redeem.svg'
import bg1 from '../img/homebg1.svg'
import banner from '../img/banner.svg'




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
    headerTextTl.to('.hero-secondary-text',{text:"the easy way to meet and greet.",duration:3,ease:'back',},'>')
    headerTextTl.from('.hero-illustration',{opacity:0,x:-10,ease:'back'},'<1')

    headerTextTl.from('.calendar',{opacity:0},'<1.5');
    headerTextTl.from('.calendar-headline',{rotateX:-10,opacity:0,YPercent:100},'<');
    headerTextTl.from('.calendar-text',{opacity:0,y:20},'<');

    // headerTextTl.to('#host-type-celeb',{delay:1,duration:.25,opacity:0,display:"none"});

    // headerTextTl.set('#host-type-athlete',{display:'inline-block'})
    // headerTextTl.from('#host-type-athlete',{opacity:0,rotateX:-100,rotateZ:-1,duration:.5,transformOrigin:'center',ease:'back'});
    // headerTextTl.to('#host-type-athlete',{duration:.25,opacity:0,display:"none"},'<2');

    // headerTextTl.set('#host-type-artist',{display:'inline-block'})
    // headerTextTl.from('#host-type-artist',{opacity:0,rotateX:-100,rotateZ:-1,duration:.5,transformOrigin:'center',ease:'back'});
    

    // let howToRedeem = gsap.timeline({scrollTrigger:{trigger:'.how-does-it-work',start:'top 40%',markers:'true'}});
    // gsap.from('.calendar',{opacity:0,y:10,scrollTrigger:{trigger:'.calendar',start:'top 90%'}});
    
    // let calendarTl = gsap.timeline({scrollTrigger:{trigger:'.calendar',start:'top 90%'}});
    // calendarTl.from('.calendar',{xPercent:-100,opacity:0});
    // calendarTl.from('.calendar-headline',{rotateX:-10,opacity:0,YPercent:100});
    // calendarTl.from('.calendar-text',{opacity:0,y:20});


    let downloadTl = gsap.timeline({scrollTrigger:{trigger:'.download',start:'top 80%'}});
    downloadTl.from('.download',{xPercent:-100,opacity:0});
    downloadTl.from('.download-img',{scale:.5,opacity:0},'<.1');
    downloadTl.from('.download-headline',{opacity:0});
    downloadTl.from('.download-text',{rotateX:-10,opacity:0,y:50,duration:.1},'<.5');


    let waitTl = gsap.timeline({scrollTrigger:{trigger:'.wait',start:'top 80%'}});
    waitTl.from('.wait',{xPercent:-100,opacity:0});
    waitTl.from('.wait-img',{scale:.5,opacity:0},'<.1');
    waitTl.from('.wait-headline',{opacity:0});
    waitTl.from('.wait-text',{rotateX:-10,opacity:0,y:50,duration:.1},'<.5');

    let getCallTl = gsap.timeline({scrollTrigger:{trigger:'.get-call',start:'top 80%'}});
    getCallTl.from('.get-call',{xPercent:-100,opacity:0});
    getCallTl.from('.get-call-img',{scale:.5,opacity:0},'<.1');
    getCallTl.from('.get-call-headline',{opacity:0});
    getCallTl.from('.get-call-text',{rotateX:-10,opacity:0,y:50,duration:.1},'<.5');





    // gsap.from('.wait',{rotateY:-50,opacity:0,y:10,scrollTrigger:{trigger:'.wait',start:'top 80%'}});



    // howToRedeem.from('.redeem-subheadline',{opacity:0,x:20,duration:.5},'>');
    // howToRedeem.from('.redeem-img',{opacity:0,z:-10},'<');
    // howToRedeem.from('.call-headline',{opacity:0,y:10},'<');
    // howToRedeem.from('.call-subheadline',{opacity:0,x:20,duration:.5},'>');
    // howToRedeem.from('.call-img',{opacity:0,z:-10},'<');

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
        {/* <img src={bg1} alt='bg'/> */}

        {/* <section className="loading-section">
          <img className="sofa" src={Sofa} />
          <h1 className="loading-text"></h1>
        </section> */}
        <section className="hero-section">
          <div className="hero-left-container" style={{ gridRow: 2}}>
          <h1 className='headline-h1'>a video call for fans</h1>
      
      {/* <span id="host-type-celeb"> celeb</span><span id="host-type-athlete" style={{display:'none'}}> athlete</span><span id="host-type-artist" style={{display:'none'}}> artist</span> */}
     
      

            <h2 className="hero-secondary-text" style={{visiblity:'hidden',height:'2rem'}}> </h2>
            <img className="hero-illustration" src={heroIllustration} alt="hero-illustration"/>

 
          </div>

          {/* <div className="wave-top">
          <WaveTop />
          </div> */}
        </section>
        
       
        {/* <Divider divWidth='100%' divHeight="2px" style={{alignSelf:'start'}} /> */}
          <div className="header-divider"></div>
        <section className='how-does-it-work'>
          <div className="border-box calendar">
          <img className='action-img' src={booksvg} alt='calendar' />
            <div>
              <h1>book a video call.</h1>
              <h3>Easily and securely buy a video call for yourself or as an unforgettable gift. After completing your purchase, you'll receive an access code, that you can redeem yourself or send along to that lucky someone.  

              </h3>
            </div>
          </div>

          <div className="border-box download">
          <img className='action-img' src={redeemsvg} alt='calendar' />

            <h1 className="download-headline">redeem your access code.</h1>
              <h3 className="download-text">Use our iOS or android app to redeem an access code. Once you have redeemed your code, you’ll go into the queue and the talent will see your purchase. </h3>
          </div>

          <div className="border-box wait">
          <img className='action-img' src={redeemsvg} alt='calendar' />

          {/* <img className="wait-img" src={howtowait} alt='wait' /> */}

          <h1 className="wait-headline">be ready.</h1>
              <h3 className="wait-text">Here is where it gets fun. Talent will make calls at random, and you never know when a call may be coming. </h3>
          </div>

          <div className="border-box get-call">
          <img className='action-img' src={redeemsvg} alt='calendar' />

          {/* <img className="get-call-img" src={howtowait} alt='get-call' /> */}

          <h1 className="get-call-headline">get your call.</h1>
              <h3 style={{marginTop:'10px'}} className="get-call-text">When you answer your call you’ll see a countdown of the time remaining, and the call will automatically end when complete . If you cant pick up the call, dont sweat it, you’ll have three chances to answer. If thirty days go by or you miss the call three times, we’re glad to offer you a refund on your purchase. </h3>
          </div>




        </section>

        {/* <section className="how-to-section">


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
     
        </section> */}


        {/* <section className='home-footer' style={{textAlign:'end'}}>
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
        </section> */}

  
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