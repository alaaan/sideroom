import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const Loader = withStyles({
  root: {
    color:'var(--cerise)'
  },
})(CircularProgress);

const SRLoader = ({label})=>{
  return(
  
    <div className="loader-wrapper">
      <div className="loader">
        <h3 style={{marginBottom:'5px'}}>{label}</h3>
        <Loader style={{height:'25px',width:'25px'}} />
      </div>
    </div>
  )
}
export default SRLoader; 