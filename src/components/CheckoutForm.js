import { React, useState,useEffect,useContext } from 'react'
import { UserContext } from "../context/user-context"
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
import SRButton from './SRButton';
import SRButtonOutlined from './SRButtonOutlined';
import { Formik,useFormik, Field } from 'formik';
import PhoneInput from 'react-phone-number-input/input';
import InputMask from 'react-input-mask';
import MaskedInput from "react-text-mask";
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { DatePicker } from "@material-ui/pickers";
import Modal from '../components/Modal';
import SRTextField from '../components/SRTextField'
import verified from '../img/verified.png'
import LoginForm from '../components/LoginForm'
import {formatPhone} from '../helpers/functions'
import PurchaseWebService from '../web_services/PurchaseWebService'
import ConfirmationModal from '../components/ConfirmationModal'
import CheckoutItem from '../components/CheckoutItem'
import gsap from 'gsap'
import closeSvg from '../img/close.svg';
import Loader from '../components/SRLoaderSlim';

import Divider from '../components/Divider';

import 'yup-phone';
import { Link } from 'react-dom';
import UserService from '../services/user_service';

const defaultValidationSchema = yup.object({
  
  name: yup
    .string('Enter your name')
    .required('Name is required!'),
  request: yup
    .string('Tell us a little bit about your request')
    .min(3, 'Tell us a little bit more!')
    .required('Please tell us about your request'),
});


//theming for date picker 
const materialTheme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        color: 'white',
        fontSize: '1.2rem',
        '&:hover $notchedOutline': {
          borderColor: 'white'
        },
        '&:active $notchedOutline': {
          borderColor: 'white'
        }
      },
    },
    MuiTextField: {
      root: {
        width: '300px',
        color: 'white',
        '& fieldset': {
          borderColor: 'var(--fadedpink)',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
      },

    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: 'var(--cerise)',
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: lightBlue.A200,
        // color: "white",
      },
    },
    MuiPickersDay: {
      day: {
        color: 'black'
      },
      daySelected: {
        color: 'var(--cerise)',
        backgroundColor: 'var(--darkblue)',
        '&:hover': {
          backgroundColor: 'black'
        }
      },
      dayDisabled: {
        color: 'grey',
      },
      current: {
        color: 'black',
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: 'var(--darkblue)',
      },
    },
    MuiButton: {
      label: {
        color: 'black'
      }

    }
  },
});

const SRFormControlLabel = withStyles({
  root: {
    '& .MuiFormControlLabel-label': {
      color: 'white',
      fontSize: '1.25rem'
    },
    '& .MuiCheckbox-root': {
      color: 'var(--bluepurple)'
    }
  },

})(FormControlLabel);


const FormField = withStyles({
  root: {
    marginTop: '10px',
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



const CheckoutForm = ({toggle,listing,redirect}) => {

  const {isAuthenticated,loggedInUser,clearLoggedInUser} = useContext(UserContext);
  const [showLogin,setShowLogin] = useState(false);
  // const [giftChecked, toggleGiftCheked] = useCycle(false, true);
  // const [selectedDate, setSelectedDate] = useState(Date.now());
  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  //   formik.values.date = date;
  // };

  const stripe = useStripe();
  const elements = useElements();
  const [showSuccess,setShowSuccess] = useState(false);
  const [redemptionCode,setRedemptionCode]= useState(null);
  const [isSubmitting,setIsSubmitting] = useState(false);
  const [isDisabled,setIsDisabled] = useState(true);
  const [paymentError,setPaymentError] = useState('');
  const [isError,setIsError] = useState(false);


  useEffect(()=>{

    if (isAuthenticated){
      setIsDisabled(false);
    }

    let tl = gsap.timeline(); 
    tl.from('.checkout-item',{opacity:0,duration:1,delay:.5});
    tl.from('#checkout-form',{xPercent:100,duration:.5},'<');

  },[])


  const toggleLogin = ()=>{
    setShowLogin(!showLogin);
  }







  //stripe stuff
  const CARD_ELEMENT_OPTIONS = {
    hidePostalCode: true,
    style: {
      base: {
        color: "white",
        fontFamily: "var(--subheadline-font)",
        fontSize: "15px",
        fontSmoothing: "antialiased",
        "::placeholder": {
          color: "white",
          fontFamily: "var(--subheadline-font)",
        },
        ":-webkit-autofill": {
          color: "#157420",
        },
      },
      invalid: {
        color: "#E25950",
        fontFamily: "var(--subheadline-font)",
        fontWeight: "bold"
      },
    },
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

  // const handleGiftChecked = () => {
  //   toggleGiftCheked();
  // };

  const formik = useFormik({
    initialValues: {
      name: '',
      request: ''
    },
    validationSchema: defaultValidationSchema,
    onSubmit:  (values) => {
      console.log('got into submit');
      // alert(JSON.stringify(values, null, 2));
      setIsSubmitting(true);
      setIsDisabled(false);
      console.log('submitting');
      handleCharge();
    },
  
  });

  const logout = () =>{

    clearLoggedInUser();
    setIsDisabled(true);
  }

  
  const handleCharge= async () => {

    // if (!isSubmittingPayment) {
    //   if (!stripe || !elements) {
    //     // Stripe.js has not yet loaded.
    //     // disable form submission until Stripe.js has loaded.
    //     return;
    //   }
      // setIsSubmittingPayment(true);
      let paymentMethodId = "";
    
        const cardElement = elements.getElement(CardElement);
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type:"card",
          card:cardElement
        });

        if (error) {
          console.log("[error]", error);
        } else {
          console.log("[PaymentMethod]", paymentMethod);
          paymentMethodId = paymentMethod.id;
        }
  
      const webService = new PurchaseWebService();
      const result = await webService.makePurchase(
        1,formik.values.request,true,loggedInUser.Username,paymentMethodId,Date.now()
      );
      if (result.Errored) {
        setIsSubmitting(false);
        console.log("There was an error processing your payment - " + result.Message)
        setIsError(true);
        setPaymentError("There was an error - " + result.Message);
    ;
      } else {
        console.log('purchase success')
        setRedemptionCode(result.Payload.RedemptionCode);
        setIsSubmitting(false);
        setShowSuccess(true); 

      }
    }


  return (
    <div className="host-detail-checkout">
      {!showSuccess ? 
      <>
      <CheckoutItem listing={listing} />
      <form autoComplete='off' onSubmit={formik.handleSubmit} id='checkout-form' key='checkout-form'>
      <img src = {closeSvg} 

        alt='close'
        onClick={toggle}
        
        style={{ position: 'absolute', top: 5, right: 5,width:'35px',cursor:'pointer', display: isSubmitting ? 'none' : 'visible' }} />
        
        <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', marginTop: '5px' }}>

        <h2 style={{ marginTop: '10px' }}>Checkout</h2>
        <Divider start divWidth='100%' divHeight='7px' />

        {(!isAuthenticated || (isAuthenticated && loggedInUser.IsPartner)) && 
        <>
          <h3>You must verify your phone number</h3>
          <p style={{marginTop:'3%'}}>We will send you your access code and receipt to this number. If purchasing as a gift for someone else, please use your own number.</p>
        </>
        
        }

        {isAuthenticated && !loggedInUser.IsPartner ? 
          <>
          <div style={{display:'flex', alignItems:'center'}}>
            <h3 style={{marginTop:'1%'}}>Phone Verified</h3>
            <img src={verified} alt="verified" style={{height:'30px',marginTop:'7px'}} />
          </div>
            <div style={{display:'flex',flexDirection:'column',marginBottom:'10px'}}>
              <h3>{formatPhone(loggedInUser.Username)}</h3>
              <h3 
              style={{color:'var(--cerise)',fontSize:'.8rem', marginTop:'1%'}}
              onClick={logout}
              >Change Phone Number</h3>
            </div></>:

            <SRButtonOutlined onClick={toggleLogin}>Verify Phone</SRButtonOutlined>}

            </div>

        <div className='checkout-info' style={{marginTop: '10px',marginBottom:'20px'}}>
        <p>Your name</p>
          {/* <SRTextField
            autoComplete= "off"
        
            fullWidth
            id="requestname"
            name="requestname"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          /> */}

            <FormField
            multiline
            rows={1}
            id="name"
            name="name"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </div>


        <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', marginTop: '5px' }}>
          {/* <h2 style={{ marginTop: '10px' }}>Call Info</h2> */}
          {/* <Divider divWidth='35%' divHeight='5px' /> */}
          <p>What do you want to tell the host?</p>
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
        </div>


        {/* <h2 style={{ marginTop: '10px' }}>Payment Details</h2> */}
        {/* <Divider divWidth='65%' divHeight='5px' /> */}


        <div style={{ display: 'flex', flexDirection: 'column',marginTop:'50px' }}>
          <CardElement
            id="card-element"
            options={CARD_ELEMENT_OPTIONS}
            onChange={handleCardChange}
            className="card-element"
          />

          <SRButton type="submit" disabled={isDisabled} style={{ width:'90%', maxWidth:'600px', marginTop: '20px', marginBottom: '20px' }}>{!isSubmitting ? (`Purchase Call - $${listing.price}`) : <Loader />}</SRButton>
          {isError && <p style={{fontSize:'.8rem',textAlign:'center',marginBottom:'5px'}}>⚠️{paymentError} ⚠️</p>}
          <p style={{marginTop:'2%',marginBottom:'2%',textAlign:'center'}}>By purchasing a video call, you agree to CONNECTR's <span onClick={()=>{window.open('http://localhost:3000/tos')}} style={{color:'var(--cerise)',cursor:'pointer'}}>Terms of Service </span> and <span onClick={()=>{window.open('http://localhost:3000/privacy')}} style={{color:'var(--cerise)',cursor:'pointer'}}>Privacy Policy</span></p>
        </div>

      </form >
      </>: 

      <Modal>
      <ConfirmationModal 
        redirect= {redirect}
        hostName={listing.hostName}
        hostImg={listing.hostImg}
        redemptionCode={redemptionCode}
        userNumber={loggedInUser.Username} />
        </Modal>
      
       }

      {/* {!showSuccess ? (
        <ConfirmationModal 
        hostName="David Shaw" 
        hostImg="http://www.fillmurray.com/300/300"
        redemptionCode={redemptionCode}
        userNumber="(404) 234-1314" />
        ) : null
      } */}


      
      {showLogin? (
      <Modal>
          <LoginForm loggedInCallback={()=>{setIsDisabled(false)}} close={toggleLogin} />
      </Modal>): null}

    </div>

  )
}

export default CheckoutForm; 
