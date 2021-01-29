import React,{useEffect} from 'react'
import GlowyBox from '../components/GlowyBox'
import TalentCalculator from '../components/TalentCalculator'
import gsap from 'gsap'
import ReactPlayer from 'react-player'
import TalentStep from '../components/TalentStep'
import {ReactComponent as Icon} from '../img/icon.svg'
import talentBooking from '../img/talent-booking.png'
import talentVideoCall from '../img/talent-video-call.png'
import talentMakeMoney from '../img/talent-make-money.png'
import MetaTags from 'react-meta-tags'

const TalentPage = ()=>{

  useEffect (()=>{
    let tl=gsap.timeline();
    gsap.set('.talent-headline',{visibility:'visible'})
    gsap.set('.hero-secondary-text',{visibility:'visible'})
    gsap.set('.talent-footer-video',{perspective:'100px',transformOrigin:'0% 50%'})
    gsap.set('.hero-secondary-text',{visibility:'visible'})
    tl.addLabel('start');
    tl.fromTo('.talent-headline',{opacity:0},{opacity:1,duration:1,delay:.1});
    tl.fromTo('.hero-secondary-text',{opacity:0,x:-100},{opacity:1,x:0,duration:1},'start+=.5');
    tl.from('.glowy-box',{opacity:0,duration:1},'start+=1');
    tl.from('#message',{opacity:0},'start+=1.5')
    tl.staggerFrom ('.talent-step-container',2,{opacity:0,stagger:.5})
    tl.from('.talent-footer-video',{rotationY:-80,opacity:0,duration:2}, 'start+=3')
    tl.from('.talent-footer-headline',{x:100,opacity:0},'start+=3.5')

  },[])




  return(
    <>
    <MetaTags>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@flickr" />
      <meta name="twitter:title" content="Small Island Developing States Photo Submission" />
      <meta name="twitter:description" content="View the album on Flickr." />
      <meta name="twitter:image" content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg" />
    </MetaTags>
    <section className="talent-header">
        <h1 className='talent-headline' style={{fontSize:'3rem',visibility:'hidden'}}>A platform to safely and securely video call your fans</h1>
        <h3 className="hero-secondary-text" style={{visibility:'hidden'}}>Meet them in the SideRoom.</h3>
    </section>
    <section className="talent-calculator">
      <TalentCalculator />
      <div style={{overflow:'hidden',borderRadius:'7px'}}>
        <ReactPlayer width='auto' loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/testfacetime.mp4' />
      </div>
    </section>
    <section className="talent-how-it-works">
      <h1 style={{fontSize:'3.5rem', marginTop:'5vh'}}>How it works</h1>
      <div className="talent-how-it-works-content">
        <TalentStep title="Open Up Bookings" 
        image={talentBooking}
        info="Fans will book a call request with you on our website.
        They can purchase for themselves or as a gift. 
        You will be notified of new requests, 
        and you can check pending requests at any time in the app. " />
        <TalentStep title="Call Your Fans"
        image={talentVideoCall}
        info="Open up the app to see your bookings, 
        and begin fulfilling them. You can do them all 
        in a row or pick and choose. Users have three 
        opportunities to answer your calls." />
        <TalentStep title="Collect Your Earnings"
        image={talentMakeMoney}
        info="You retain 80% of your earnings, and payments are made 
        directly into your account. Payments are securely handled 
        entirely by our third-party provider, Stripe." />
      
      </div>
    </section>
    <section className="talent-cta">
      <div className='talent-footer-video'style={{overflow:'hidden', height: '350px', borderRadius:'7px',boxShadow:'rgba(80, 63, 205, 0.5) 0px 1px 5px'}}>
        <ReactPlayer width='auto' loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/testfacetime.mp4' />
      </div>
      <div>
        <h1 className='talent-footer-headline' style={{fontSize:'3.2rem', marginTop:'5vh'}}>Adjust your pricing and availability easily from the app.</h1>
      </div>

      

      {/* <div class="scene">
        <div class="box">
          <div class="box__face box__face--front">
            <ReactPlayer width='100%' loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/testfacetime.mp4' />
        
        </div>
          <div class="box__face box__face--back"></div>
          <div class="box__face box__face--right"></div>
          <div class="box__face box__face--left"></div>
          <div class="box__face box__face--top"></div>
          <div class="box__face box__face--bottom"></div>
        </div>
      </div> */}

    </section>
    </>


  


  )

}

export default TalentPage; 