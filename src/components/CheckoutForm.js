import { React, useState } from 'react'
import { styled, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { motion, AnimatePresence, useCycle } from 'framer-motion';
import ToggleButton from '@material-ui/lab/ToggleButton';
import CloseIcon from '@material-ui/icons/Close';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DateFnsUtils from '@date-io/date-fns';
import * as yup from 'yup';
import { useFormik, Field } from 'formik';
import MaskedInput from "react-text-mask";
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),

  name: yup
    .string('Enter your name')
    .required('Name is required!'),

  phone: yup
    .string('Enter your phone')
    .required('Enter your phone number'),

  request: yup
    .string('Tell us a little bit about your request')
    .min(20, 'Tell us a little bit more!')
    .required('Please tell us about your request')
});

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

const SRDatePicker = withStyles({
  root: {
    width: '300px',
    '& .MuiInputBase-root': {
      color: 'white',
      fontSize: '1.5rem'
    },
    '& .MuiIconButton-root': {
      color: 'white'
    },
    '& fieldset': {
      borderColor: 'grey',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&:active fieldset': {
        borderColor: 'white',
      },
    },
    '& .MuiPickersToolbarText': {
      color: 'black',
      fontFamily: 'Barlow'
    },
    '& .MuiButton-label': {
      color: 'black'
    }

  },
})(KeyboardDatePicker);

const SRFormControlLabel = withStyles({
  root: {
    '& .MuiFormControlLabel-label': {
      color: 'white',
      fontSize: '1.25rem'
    },
    '& .MuiCheckbox-root': {
      color: '#E2E1B9'
    }
  },

})(FormControlLabel);

// const MyField = withStyles({
//   root: {
//     margin: '10px',
//     '& label.Mui-focused': {
//       color: 'white',
//       fontSize: '1.7rem',
//     },
//     '& label.MuiInputLabel-root': {
//       color: 'white',
//     },
//     '& .MuiInput-underline:after': {
//       borderBottomColor: 'green',
//     },
//     '& .MuiOutlinedInput-root': {
//       color: 'white',
//       fontSize: '1.7rem',

//       '& fieldset': {
//         borderColor: 'grey',
//       },
//       '&:hover fieldset': {
//         borderColor: 'white',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: 'white',
//       },
//     },
//   },
// })(TextField);

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

const renderForm = (formik) => {


  return (
    <form onSubmit={formik.handleSubmit} id='checkout-form' key='checkout-form'>
      <h2 style={{ marginLeft: '10px', marginTop: '10px' }}>Your Info</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <MyField
          fullWidth
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        {/* <MyField label="Name" key="name-input" value={name} variant="outlined" onChange={handleName} error={nameError} /> */}
        {/* <MyField label="Email" variant="outlined" /> */}
        <MyField
          fullWidth
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

        {/* <MyField label="Phone" variant="outlined" /> */}
        <MyField
          id="phone"
          name="phone"
          label="Phone"
          variant="outlined"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />

        <CheckoutButton>Confirm Phone</CheckoutButton>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', marginTop: '5px', marginLeft: '10px' }}>

        <h2 style={{ marginTop: '10px' }}>Call Info</h2>
        <h3 style={{ marginTop: '10px' }}>Tell the host all about your request!</h3>
        <h4>Is it your birthday? Whats popping?</h4>
        {/* <FormField multiline rows={3} variant="outlined" /> */}
        <FormField
          multiline
          rows={3}
          id="request"
          name="request"
          variant="outlined"
          value={formik.values.request}
          onChange={formik.handleChange}
          error={formik.touched.request && Boolean(formik.errors.request)}
          helperText={formik.touched.request && formik.errors.request}
        />

        <h3 style={{ marginTop: '20px' }}>What is your preferred date for a call? (no promises😜)</h3>
        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <SRDatePicker
            margin="normal"
            inputVariant="outlined"
            id="date-picker-dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', alignItems: 'center' }}>
          <h3>Is this a gift for someone else?</h3>
          <SRFormControlLabel
            control={<Checkbox style={{ marginLeft: '20px' }} checked={giftChecked} onChange={handleGiftChecked} name="gift" />}
            label="Yes"
          />
        </div>

        {giftChecked &&
          <div>
            <h2 style={{ marginTop: '10px' }}>Gift Info</h2>
            <MyField label="Recipient Name" variant="outlined" />
            <MyField label="Recipient Phone" variant="outlined" />
          </div>}

        <h2 style={{ marginTop: '10px' }}>Payment Details</h2>
        {/* <MyField label="Credit Card" variant="outlined" />
        <div style={{ display: 'flex', flexDirection: 'row' }}> */}
        {/* <CardElement
          id="card-element"
          options={CARD_ELEMENT_OPTIONS}
          onChange={handleCardChange}
          className="card-element"
        /> */}
        {/* <MyField label="Expiration" variant="outlined" />
          <MyField label="CVV" variant="outlined" />
          <MyField label="Zip Code" variant="outlined" /> */}
        {/* </div> */}
        <CheckoutButton type="submit" style={{ marginTop: '40px', marginBottom: '20px' }}>PURCHASE CALL</CheckoutButton> */}

      </div>
    </form>

  )
}


const CheckoutForm = (props) => {

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phone: '',
      request: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const stripe = useStripe();
  const elements = useElements();

  const [selectedDate, setSelectedDate] = useState(Date.now());
  const [giftChecked, toggleGiftCheked] = useCycle(false, true);

  //stripe stuff
  const CARD_ELEMENT_OPTIONS = {
    hidePostalCode: true,
    style: {
      base: {
        color: "white",
        fontFamily: "Raleway",
        fontWeight: "bold",
        fontSize: "20px",
        fontSmoothing: "antialiased",
        "::placeholder": {
          color: "white",
          fontFamily: "Raleway",
          fontWeight: "bold"
        },
        ":-webkit-autofill": {
          color: "#157420",
        },
      },
      invalid: {
        color: "#E25950",
        fontFamily: "Raleway",
        fontWeight: "bold"
      },
    },
  };

  //handlers


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCardChange = (event) => {
    // if (event.error) {
    //   setError(event.error.message);
    // } else if (event.empty) {
    //   setError("Please enter your payment info.");
    // } else {
    //   setError("");
    // }
    // setHasCompleteCard(event.complete);
  };


  const handleGiftChecked = () => {
    toggleGiftCheked();
  };

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
      <CloseIcon
        onClick={props.toggle}
        fontSize='large' color="secondary" style={{ position: 'absolute', top: 5, right: 5 }} />

      {renderForm(formik)}

    </div>

  )
}

export default CheckoutForm; 
