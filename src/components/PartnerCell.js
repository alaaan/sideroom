import React from 'react'; 
import BorderBox from '../components/BorderBox'
import StatDisplay from './StatDisplay';

const PartnerCell = ({hostImg,hostName}) =>{

  
  return(
      <BorderBox width='80%'> 
        <div className="partner-cell-wrapper">
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <img src={hostImg} style={{width:'150px', height:'150px', borderRadius:'50%',objectFit:'cover'}} alt="host"/>
            <p style={{marginTop:'5px'}}>{hostName}</p>
          </div>
          <StatDisplay stat='5%' statName='Commission Rate' />
          <StatDisplay stat='$420' statName='Commission Earned' />
          <StatDisplay stat='20' statName='Total Calls' />


        </div>

      </BorderBox>

  )

}

export default PartnerCell; 