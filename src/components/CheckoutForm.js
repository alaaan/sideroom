import React from 'react'
import { styled, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { motion, AnimatePresence } from 'framer-motion';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';




const CheckoutForm = () => {

  const [forWho, setForWho] = React.useState('left');

  const handleForWho = (event, newForWho) => {
    setForWho(newForWho);
  };

  const CheckoutButton = withStyles({
    root: {
      background: '#E2E1B9',
      borderRadius: 3,
      borderStyle: 'solid',
      borderWidth: '.5px',
      borderColor: 'white',
      color: 'black',
      height: 48,

      '&:hover': {
        background: 'white'
      }
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

  const MyField = withStyles({
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
          borderColor: 'grey',
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

  const FormField = withStyles({
    root: {
      margin: '10px',
      '& label.Mui-focused': {
        color: 'white',
        fontSize: '.5rem',
      },
      '& label.MuiInputLabel-root': {
        color: 'white',
        fontSize: '1.7rem',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        color: 'white',
        fontSize: '1.5rem',
        '& fieldset': {
          borderColor: 'grey',
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


  const variants = {
    open: { opacity: 1, transition: { staggerChildren: 1 } },
    closed: { opacity: 0 }
  }

  const childVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 }
  }
  return (
    <div>
      <h2 style={{ marginLeft: '10px', marginTop: '10px' }}>Your Info</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <MyField label="Name" variant="outlined" />
        <MyField label="Email" variant="outlined" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <MyField label="Phone" variant="outlined" />
        <CheckoutButton>Confirm Phone</CheckoutButton>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', marginTop: '5px' }}>
        <h2 style={{ marginLeft: '10px', marginTop: '10px' }}>Call Info</h2>
        <h3 style={{ marginLeft: '10px' }}>Tell the host all about your request!</h3>
        <FormField multiline rows={3} variant="outlined" />
        <h3 style={{ marginLeft: '10px' }}>Whats the Occasion?</h3>
        <FormField multiline rows={1} variant="outlined" />
        <h2 style={{ marginLeft: '10px', marginTop: '10px' }}>Payment Details</h2>
        <MyField label="Credit Card" variant="outlined" />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <MyField label="Expiration" variant="outlined" />
          <MyField label="CVV" variant="outlined" />
          <MyField label="Zip Code" variant="outlined" />
        </div>
        <CheckoutButton style={{ marginTop: '40px', marginBottom: '20px' }}>PURCHASE CALL</CheckoutButton>

      </div>
    </div>

  )
}

export default CheckoutForm; 
