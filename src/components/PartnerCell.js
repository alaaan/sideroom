import React from 'react'; 
import BorderBox from '../components/BorderBox'
import StatDisplay from './StatDisplay';
import {formatMoney} from '../helpers/functions';
const PartnerCell = ({hostImg,hostName, commissionRate, commissionEarned, totalCalls}) =>{

  
  return(
      <BorderBox width='80%'> 
        <div className="partner-cell-wrapper">
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <img src={hostImg} style={{width:'150px', height:'150px', borderRadius:'50%'}} alt="host"/>
            <p style={{marginTop:'5px'}}>{hostName}</p>
          </div>
          <StatDisplay stat={(commissionRate * 100).toString() + '%'} statName='Commission Rate' />
          <StatDisplay stat={'$' + formatMoney(commissionEarned)} statName='Commission Earned' />
          <StatDisplay stat={totalCalls} statName='Total Calls' />
        </div>

      </BorderBox>

  )

}

export default PartnerCell; 