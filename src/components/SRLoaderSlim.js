import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';


//a loader component without the wrapper 

const Loader = withStyles({
  root: {
    color:'var(--cerise)'
  },
})(CircularProgress);

const SRLoader = ({label})=>{
  return(
    <Loader style={{height:'25px',width:'25px'}} />
  )
}

export default Loader; 