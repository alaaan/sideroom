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
      <div className="headline-container">
        <h3>You're locked in.</h3>
        <p>We’ve got your order to connect with <span style={{fontWeight:'700'}}>{hostName}</span>.<br></br>
          We’ve started lining things up on our end to make the magic happen.</p>

        <div className="redemption-box">
          <h3 className="redemption-code-top">Your Redemption Code</h3>
          <h3 className="redemption-code">{redemptionCode}</h3>
        </div>

      </div>
      <div>
        <p>We’ve also texted you this code to {userNumber}</p>
        <p>Head to the App Store and download CONNECTR, and standby for that call.</p>
      </div>
      <div className="store-logos">
      <img src={appStore} alt='google play' />
       <img src={googlePlay} alt='google play' />
      </div>
     

    </div>


  )

}

export default ConfirmationModal;