import React,{useEffect} from 'react'
import GlowyBox from '../components/GlowyBox'
import TalentCalculator from '../components/TalentCalculator'
import gsap from 'gsap'
import ReactPlayer from 'react-player'
import TalentStep from '../components/TalentStep'
import {ReactComponent as Icon} from '../img/icon.svg'

const TalentPage = ()=>{

  useEffect (()=>{
    let tl=gsap.timeline();
    gsap.set('.talent-headline',{visibility:'visible'})
    gsap.set('.hero-secondary-text',{visibility:'visible'})
    tl.addLabel('start');
    tl.fromTo('.talent-headline',{opacity:0},{opacity:1,duration:1,delay:.1});
    tl.fromTo('.hero-secondary-text',{opacity:0,x:-100},{opacity:1,x:0,duration:1},'start+=.5');
    tl.from('.glowy-box',{opacity:0,duration:1},'start+=1');
    tl.from('#message',{opacity:0},'start+=1.5')
    tl.staggerFrom ('.talent-step-container',2,{opacity:0,stagger:.5})

  },[])




  return(
    <>
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
      <h1 style={{fontSize:'3rem',marginLeft:'10vw', marginTop:'5vh'}}>How it works</h1>
      <div className="talent-how-it-works-content">
        <TalentStep title="Open Up Bookings" 
        info="Fans will book a call request with you on our website.
        They can purchase for themselves or as a gift. 
        You will be notified of new requests, 
        and you can check pending requests at any time in the app. " />
        <TalentStep title="Call Your Fans"
        info="Open up the app to see your bookings, 
        and begin fulfilling them. You can do them all 
        in a row or pick and choose. Users have three 
        opportunities to answer your calls." />
        <TalentStep title="Collect Your Earnings"
        info="You retain 80% of your earnings, and payments are made 
        directly into your account. Payments are securely handled 
        entirely by our third-party provider, Stripe." />
      
      </div>
    </section>
    <section className="talent-cta"></section>
    </>


  


  )

}

export default TalentPage; 