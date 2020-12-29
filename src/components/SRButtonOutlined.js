import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const SRButtonOutlined = withStyles({
  root: {
    background: 'transparent',
    borderRadius: 3,
    border: '2px',
    borderColor: '#a57dc8',
    borderStyle: 'solid',
    color: 'white',
    height: 50,
    padding: '0 30px',
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

export default SRButtonOutlined; 