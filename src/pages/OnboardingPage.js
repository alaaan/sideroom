import React, {useContext,useEffect} from 'react'
import {ThemeContext} from '../context/theme-context';
import SRTextField from '../components/SRTextField'
import SROutlinedButton from '../components/SRButtonOutlined'
import '../styles/OnboardingPage.css'
import infoIcon from '../img/info-icon.svg'

const OnboardingPage = () =>{

  const {setHasHeader} = useContext(ThemeContext);

  useEffect(() => {
    setHasHeader(false);
  })



  return (

    <div className="partner-page-wrapper">
      <div className="onboarding-content">
        <h2 className="gradient">Lets get started.</h2>
        <h3 style={{marginBottom:'20px',marginLeft:'10%',marginRight:'10%',textAlign:'center'}}>Please fill out the informaiton below. The information here will be what publishes to your profile in our marketplace.</h3>

        <SROutlinedButton>Upload Profile Image</SROutlinedButton>
        <div className="large-border-box input-wrapper">

          <input className='onboard-input' type='text' placeholder='name' />
          <div className="input-container">
            <img src={infoIcon} alt='info' />
            <input className='onboard-input' type='text' placeholder='username' />
          </div>
          <input className='onboard-input' type='password' placeholder='password'/>
          <input className='onboard-input' type='password' placeholder='confirm password'/>

          <div className="input-container">
            <img src={infoIcon} alt='info' />
            <input className='onboard-input' type='text' placeholder='Price'/>
          </div>
          <div className="input-container">
            <img src={infoIcon} alt='info' />
            <input className='onboard-input' type='password' placeholder='Length per call'/>
          </div>
          <input className='onboard-input' type='password' placeholder='Number of calls available'/>


          <div className="input-container">
            {/* <img src={infoIcon} alt='info' /> */}
          <textarea className='onboard-input text-area-input' cols="40" rows="5" type='text' placeholder='Tell us about your listing'/>
          </div>






        


        </div>






      </div>



    </div>

    
  )

}

export default OnboardingPage;