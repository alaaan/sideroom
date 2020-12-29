import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const SRButton = withStyles({
  root: {
    background: 'var(--light_purple)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 50,
    padding: '0 30px',
    width: '80%',
    alignSelf: 'center',
    justifySelf: 'center',
    margin: '10px'

  },
  label: {
    fontFamily: 'Barlow',
    fontWeight: 500,
    fontSize: '1.2rem',
    textTransform: 'none',
    letterSpacing: '.5px'
  },
})(Button);

export default SRButton; 