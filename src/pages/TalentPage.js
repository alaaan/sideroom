import React,{useEffect,useContext} from 'react'
import TalentCalculator from '../components/TalentCalculator'
import gsap from 'gsap'
import ReactPlayer from 'react-player'
import TalentStep from '../components/TalentStep'
// import MetaTags from 'react-meta-tags'
import calendar from '../img/calendar.svg'
import talentcall from '../img/talentcall.svg'
import earnings from '../img/earnings.svg'
import HostBox from '../components/HostBox'
import Divider from '../components/Divider'
import '../styles/TalentPage.css'
import BorderBox from '../components/BorderBox'
import {ThemeContext} from '../context/theme-context';
import boxSvg from '../img/boxsvg.svg'



const TalentPage = ()=>{

  const {setHasHeader} = useContext(ThemeContext);
  


  useEffect (()=>{
    let tl=gsap.timeline();
    setHasHeader(false);
    gsap.set('.talent-headline',{visibility:'visible'})
    gsap.set('.hero-secondary-text',{visibility:'visible'})
    gsap.set('.talent-footer-video',{perspective:'100px',transformOrigin:'0% 50%'})
    gsap.set('.hero-secondary-text',{visibility:'visible'})
    tl.addLabel('start');
    tl.fromTo('.talent-headline',{opacity:0},{opacity:1,duration:1,delay:.1});
    // tl.fromTo('.hero-secondary-text',{opacity:0,x:-100},{opacity:1,x:0,duration:1},'start+=.5');
    tl.from('.glowy-box',{opacity:0,duration:1},'start+=1');
    tl.from('#message',{opacity:0},'start+=1.5')
    tl.staggerFrom ('.talent-step-container',2,{opacity:0,stagger:.5})
    tl.from('.talent-footer-video',{rotationY:-10,opacity:0,duration:2}, 'start+=3')
    tl.from('.talent-footer-headline',{x:100,opacity:0},'start+=3.5')

  },[])




  return(
    <>
    {/* <MetaTags>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Small Island Developing States Photo Submission" />
      <meta name="twitter:description" content="View the album on Flickr." />
      <meta name="twitter:image" content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg" />
    </MetaTags>
     */}

     <div className="talent-wrapper">
    <section className="talent-header">
        <h1 className='talent-headline gradient' style={{fontSize:'2.5rem'}}>A more exciting fan connection starts here.</h1>
        <h3 className="hero-secondary-text" style={{visibility:'hidden'}}>CONNECTR makes it easy to make paid video calls to your fans.</h3>
        <Divider  divWidth='50%' divHeight='12px'/>

    </section>

    {/* <section className="talent-calculator">
      <TalentCalculator />
      <div className='talent-screens' style={{overflow:'hidden',borderRadius:'7px',height:'400px'}}>
        <h3>host view video from app</h3>
      </div>
    </section> */}
    <section className="talent-how-it-works">
      {/* <h1 style={{marginBottom:'5%'}}>How it works</h1> */}
      <section>
        <BorderBox boxImg={boxSvg}>
          <h1>Setup your listing.</h1>
          <h3 className="hero-secondary-text" >Easily through the mobile app, set the length of your calls, how many you want to open up at any time
            and your pricing. You can adjust any of these listings on the fly at any time in the app.</h3>
        </BorderBox>
      </section>
      <section>
      <BorderBox boxImg={boxSvg}>
      <h1>Your fans book.</h1>
      <h3 className="hero-secondary-text" >Let your fans know.
        Share your landing page, where fans can purchase for themselves or as a gift. We will run digital marketing to your page, while you have active listings. 
        You will be notified of new requests, 
        and you can check pending requests at any time in the app. </h3>
        </BorderBox>
      </section>
      <section>
      <BorderBox boxImg={boxSvg}>

      <h1>Start making money.</h1>
      <h3 className="hero-secondary-text" >Open up the app to see your bookings, 
        and begin fulfilling them. You can do them all 
        in a row or pick and choose. Users have three 
        opportunities to answer your calls. </h3>
        </BorderBox>
        </section>
        <section>
        <BorderBox width='80%'>

      <h1>Cash Out.</h1>
      <h3 className="hero-secondary-text" >You retain 80% of your earnings, and payments are made 
        directly into your account. Payments are securely handled 
        entirely by our third-party provider, Stripe.</h3>
        </BorderBox>
      </section>
     
      {/* <div className="talent-how-it-works-content">
        <TalentStep title="Open Up Bookings" 
        image={calendar}
        info="Fans will book a call request with you on our website.
        They can purchase for themselves or as a gift. 
        You will be notified of new requests, 
        and you can check pending requests at any time in the app. " />
        <TalentStep title="Call Your Fans"
        image={talentcall}
        info="Open up the app to see your bookings, 
        and begin fulfilling them. You can do them all 
        in a row or pick and choose. Users have three 
        opportunities to answer your calls." />
        <TalentStep title="Collect Your Earnings"
        image={earnings}
        info="You retain 80% of your earnings, and payments are made 
        directly into your account. Payments are securely handled 
        entirely by our third-party provider, Stripe." />
      
      </div> */}
    </section>
    {/* <section className="talent-cta">
      <div className='talent-footer-video'style={{overflow:'hidden', height: '350px', borderRadius:'7px',boxShadow:'rgba(80, 63, 205, 0.5) 0px 1px 5px'}}>
        <ReactPlayer width='auto' loop muted playing playsinline url='https://conectrmedia.blob.core.windows.net/files/talentpricechange.MP4' />
      </div>
      <div>
        <h1 className='talent-footer-headline' style={{marginTop:'5vh'}}>Adjust your pricing and availability easily from the app.</h1>
      </div>

    

    </section> */}
        <Divider  divWidth='50%' divHeight='12px'/>

    <section className="talent-partners">
      <h1>Who we've worked with</h1>
      <h3>We're just getting started, but here are our beta release partners.</h3>
      <div className="host-box-container">
        <HostBox img="https://conectr-cdn.azureedge.net/mediumimages/4f6aaeb9-bd76-4535-b155-dfd1bf35a173.jpg" genre="music" name="The Revivalists" />
        <HostBox img="https://conectr-cdn.azureedge.net/mediumimages/2daa9aa1-c93e-4a50-8cd6-d0d6e4cfc6d4.jpg" genre="athlete" name="Dansby Swanson" />
        <HostBox img="https://conectr-cdn.azureedge.net/mediumimages/29b27034-bb9a-4c27-b816-ac5baba6d06b.jpg" genre="podcasters" name="The Lady Gang" />
        <HostBox img="https://conectr-cdn.azureedge.net/mediumimages/062edb89-99ea-41b4-ab6e-d0c133bf92d8.jpg" genre="music" name="Kodie Shane" />
        <HostBox img="https://conectr-cdn.azureedge.net/mediumimages/8dbae44e-f6a5-4398-97ec-bcfcb0f234b7.jpg" genre="actor" name="Michael Trevino" />
        <HostBox img="https://conectr-cdn.azureedge.net/mediumimages/0bee4353-8a27-41fd-806d-29ea83db7220.jpg" genre="music" name="Marc Roberg (OAR)" />
      </div>

      




    </section>
    </div>
    </>


  


  )

}

export default TalentPage; 