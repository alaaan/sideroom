import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const Loader = withStyles({
  root: {
    color:'white'
  },
})(CircularProgress);


const SRLoaderSlim = ({label})=>{
  return(
  
        <Loader style={{height:'25px',width:'25px'}} />
  )
}
export default SRLoaderSlim; 