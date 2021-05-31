import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const SRButtonOutlined = withStyles({
  root: {
    background: 'transparent',
    borderRadius: 20,
    border: '.75px',
    borderColor: 'var(--ocean-blue)',
    borderStyle: 'solid',
    color: 'white',
    padding: '0 30px',
    alignSelf: 'center',
    justifySelf: 'center',
    margin: '10px',
    minHeight: '40px',

    '&:hover': {

    }

  },
  label: {
    fontFamily: 'var(--body-font)',
    fontSize: '1rem',
    textTransform: 'none',
    letterSpacing: '.5px'
  },
})(Button);

export default SRButtonOutlined; 