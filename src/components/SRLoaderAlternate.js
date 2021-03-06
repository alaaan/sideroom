import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const Loader = withStyles({
  root: {
    color:'white'
  },
})(CircularProgress);


const SRLoaderAlternate = ({label})=>{
  return(
  
    <div className="loader-wrapper" style={{width:'25px'}}>
      <div className="loader">
        <h3 className='gradient' style={{marginBottom:'5px'}}>{label}</h3>
        <Loader style={{height:'25px',width:'25px'}} />
      </div>
    </div>
  )
}
export default SRLoaderAlternate; 