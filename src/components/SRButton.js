import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const SRButton = withStyles({
  root: {
    background: 'rgba(0, 0, 0, 0) linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%) repeat scroll 0% 0%',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 50,
    padding: '0 30px',
    width: '80%',
    alignSelf: 'center',
    justifySelf: 'center',
    margin: '10px',

    '&:hover': {
      boxShadow: 'rgba(80, 63, 205, 0.5) 0px 1px 40px',
      transition: 'all 0.1s ease 0s'
    }

  },
  label: {
    fontFamily: 'Exo, sans-serif',
    fontSize: '1.2rem',
    textTransform: 'none',
    letterSpacing: '.5px'
  },
})(Button);

export default SRButton; 