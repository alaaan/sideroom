import React from 'react'
import BorderBox from '../components/BorderBox'
import '../styles/PartnerPage.css'
import SRButton from '../components/SRButton'
import PartnerCell from '../components/PartnerCell'

const PartnerPage = () =>{


  return(
    <div className="partner-page-wrapper">
      <div className="partner-page-header">
        <BorderBox width='400px' height='250px'>
          <div className="referral-wrapper">
            <h2>Your Referral Code</h2>
            <h2 style={{color:'var(--ocean-blue)'}}>ABC123</h2>
            <p>Share this code in private channels with hosts youre onboarding</p>
          </div>
          
        </BorderBox>
      
        <BorderBox width='400px' height='250px'>
          <div className="referral-wrapper">
            <h2>Bank Info</h2>
            <SRButton>Connect to Stripe</SRButton>
            <p style={{color:'var(--cerise)'}}>Until you setup your Stripe account you will not be able to receive payouts</p>
          </div>
        </BorderBox>
      </div>

      <div className="partner-page-network">
        <h1>Your Network</h1>
        <PartnerCell hostName='Bill Murray' hostImg="http://www.fillmurray.com/200/200" />
        <PartnerCell hostName='Arthur Blank' hostImg="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/falcons/ukwadfetxuecqttkliwg" />


      </div>

    </div>


  )
}

export default PartnerPage; 
