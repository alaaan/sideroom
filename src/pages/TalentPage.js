import React,{useEffect} from 'react'
import GlowyBox from '../components/GlowyBox'
import TalentCalculator from '../components/TalentCalculator'
import gsap from 'gsap'
import ReactPlayer from 'react-player'

const TalentPage = ()=>{

  useEffect (()=>{
    let tl=gsap.timeline();
    gsap.set('.talent-headline',{visibility:'visible'})
    gsap.set('.hero-secondary-text',{visibility:'visible'})
    tl.addLabel('start');
    tl.fromTo('.talent-headline',{opacity:0},{opacity:1,duration:1,delay:.1});
    tl.fromTo('.hero-secondary-text',{opacity:0,x:-100},{opacity:1,x:0,duration:1},'start+=.5');
    tl.from('.glowy-box',{opacity:0,duration:1},'start+=1');

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
    <section className="talent-how-it-works"></section>
    <section className="talent-cta"></section>
    </>


  


  )

}

export default TalentPage; 