import React,{useState,useEffect,useContext} from 'react';
import Emoji from '../components/Emoji';
import {ThemeContext} from '../context/theme-context';
import OnboardingPage from '../pages/OnboardingPage';
import '../styles/JoinPage.css'
import SRButton from '../components/SRButton'
import BorderBox from '../components/BorderBox'
import boxSvg from '../img/box800x250.svg'
import UserWebService from '../web_services/user_webservice';
import Loader from '../components/SRLoaderSlim';


const JoinPage = () =>{

  const {setHasHeader} = useContext(ThemeContext);
  const [accessCode,setAccessCode] = useState('');
  const [isDisabled,setIsDisabled] = useState(true);
  const [showOnboarding,setShowOnboarding]=useState(false);
  const [isProcessing,setIsProcessing] = useState(false);
  const [isErrored,setIsErrored]=useState(false);
  const [error,setError] = useState('');

  const service = new UserWebService(); 

  useEffect(() => {
    setHasHeader(true);
  })


  const handleAccessCode = (e)=>{
    setAccessCode(e.target.value);
    if (e.target.value.length===6){
      setIsDisabled(false);
    }
    // else {
    //   setIsDisabled(true);
    // }
  }

  const handleSubmit = async ()=>{
    setIsErrored(false);
    setError('');
    setIsProcessing(true);
    const result = await service.checkAccessCode(accessCode);
    if (result.Payload) {
      //success
      setIsProcessing(false);
      setShowOnboarding(true);
    }

    else{
      //error
      
      setIsProcessing(false);
      setIsErrored(true);
      setError('Invalid Access Code, please double check your code.'); 
    }

  }


return(

  <div className="join-page-container">

    {!showOnboarding ? 
    <>
    <h2>Welcome to the CONECTR team</h2>
    <h3 className='gradient'>please enter your access code below.</h3>
    
    <input className='onboard-input' type='text' onChange={(e)=>{handleAccessCode(e)}}/>

    <SRButton disabled={isDisabled} onClick={()=>{handleSubmit()}}>{!isProcessing ? ('Submit') : <Loader />}</SRButton>
    {isErrored && <p> {` ${error} `}</p>}

    {/* <SRButton onClick={()=>{hanldeSubmit()}} disabled={isDisabled} style={{ width:'80%', maxWidth:'300px', marginTop: '20px', marginBottom: '20px'}}>Submit</SRButton> */}

    <section className="talent-how-it-works">
      <h1 className='gradient' style={{marginBottom:'20px',fontSize:'3.5rem'}}>How does this work?</h1>
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
    </section>
    </>:

  
    <OnboardingPage accessCode={accessCode} />}
    

  </div>



)



}

export default JoinPage; 