import React from 'react';
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles';

const SRTextField = withStyles({
  root: {
    margin: '10px',
    '& label.Mui-focused': {
      color: 'white',
      fontSize: '1.7rem',
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

      '& fieldset': {
        borderColor: 'var(--fadedpink)',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);

export default SRTextField; 