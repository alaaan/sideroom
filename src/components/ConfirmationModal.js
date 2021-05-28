import React from 'react';
import appStore from '../img/app-store.png'
import googlePlay from '../img/google-play-badge.png'
import Emoji from '../components/Emoji'
import closeSvg from '../img/close.svg'

const ConfirmationModal = ({hostName,hostImg,redemptionCode,userNumber,redirect})=>{

  return(
    <div className="confirmation-container" style={{position:'relative'}}>
      <img src = {closeSvg} 
        alt='close'
        onClick={redirect}
        style={{ position: 'absolute', top: 5, right: 5,width:'35px',cursor:'pointer' }} />
      <Emoji symbol="🤘"/>
        <img className="confirmation-img-wrapper" src={hostImg} alt="host" />
      <div style={{paddingLeft:'30px',paddingRight:'30px'}} className="headline-container">
        <h3>You're locked in.</h3> 
    
        <div className="redemption-box">
          <h3 className="redemption-code-top">Your Redemption Code</h3>
          <h3 className="redemption-code">{redemptionCode}</h3>
        </div>

          <p>We’ve started lining things up on our end to make the magic happen. 
            All you have to do from here is download our mobile app and redeem your code.  
            Once you've done that, we'll let {hostName} know you've purchased a call, so get ready for that epic moment. 
            We’ve also texted you this code to you.</p>

     
      </div>
      <div>
  
      </div>
      <div className="store-logos">
      <img src={appStore} style={{cursor:'pointer'}} alt='apple store' onClick={()=>{window.open('https://apps.apple.com/us/app/connectr-fan-video-calls/id1360670381','_blank')}}  />
       <img src={googlePlay} style={{cursor:'pointer'}} alt='google play' onClick={()=>{window.open('https://play.google.com/store/apps/details?id=com.conectr&hl=en_US&gl=US','_blank')}} />
      </div>
     

    </div>


  )

}

export default ConfirmationModal;