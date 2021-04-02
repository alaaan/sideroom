import React from 'react'
import '../styles/JoinPage.css'
import SRTextField from '../components/SRTextField'
import SRButton from '../components/SRButton'


const JoinPage = () =>{

return(

  <div className="join-page-container">
    <h2>Welcome to the CONECTR team</h2>
    <h3>please enter your access code below.</h3>
    <SRTextField 
      id="accessCode"
      name="accessCode"
      variant="outlined"/>

    <SRButton style={{ width:'80%', maxWidth:'300px', marginTop: '20px', marginBottom: '20px'}}>Submit</SRButton>

  </div>



)



}

export default JoinPage; 