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
      borderBottomColor: 'green',
    },
   
    '& .MuiOutlinedInput-root': {
      color: 'white',
      fontSize: '1.7rem',
      minWidth:'300px',
      maxWidth:'500px',

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