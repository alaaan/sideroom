import React from 'react';
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles';

const SRTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
      fontSize: '1rem',
    },
    '& label.MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'var(--ocean-blue)',
    },

    '& .MuiInput-underline:before': {
      borderBottom: '1px solid rgba(86, 67, 204,.25)'
    },

    '& .MuiInputBase-root':{
      color:'white',
      border: '1px solid white'
    },

    
    
    '& .MuiInput-root': {
      color: 'white',
      fontFamily:'var(--body-font)',
      fontSize: '1.7rem',
      minWidth:'300px',
      maxWidth:'500px',
      marginBottom:'20px',
      marginTop:'20px',

      '& fieldset': {
        borderColor: 'var(--fadedpink)',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },

      "&:-webkit-autofill": {
        transitionDelay: '9999s',
        transitionProperty: 'background-color, red',
      },
    },
  },
})(TextField);

export default SRTextField; 