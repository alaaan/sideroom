import React, {useState,useContext} from 'react';
import SRTextField from '../components/SRTextField';
import SROutlinedButton from '../components/SRButtonOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { extractDigits} from "../helpers/functions"
import UserWebService from "../web_services/user_webservice"
import LinearProgress from '@material-ui/core/LinearProgress';
import SRLoader from '../components/SRLoader';
import { UserContext } from "../context/user-context"


const LoginForm = ({close})=>{

  //context
  //const {setLoggedInUser} = useContext(UserContext);
  const userContext = useContext(UserContext);

  //states
  const [username, setUsername] = useState('');
  const [code, setCode] = useState('');

  //loading states
  const [processingGetCode,setProcessingGetCode] = useState(false); 
  const [processingConfirmCode,setProcessingConfirmCode] = useState(false); 

  //button + field states
  const [showGetCodeInputs,setShowGetCodeInputs] = useState(true); 
  const [showConfirmCodeInputs,setShowConfirmCodeInputs] = useState(false); 

  //error states
  const[error,setError] = useState(false);
  const [errorMessage,setErrorMessage] = useState('');
  const [showStartOver,setShowStartOver] = useState(false);

  //service
  const service = new UserWebService();

  const handleGetCode = async (username) => {
    if (!processingGetCode) {
      setProcessingGetCode(true);
      setShowGetCodeInputs(false);
      const result = await service.requestLoginCode(`+1${username}`);
      if (!result.Errored) {
        console.log("got a code result");
        gotCodeHelper();
      }

      else{
        setError(true);
        setErrorMessage('There was an issue requesting a code, please try again.');
        setProcessingGetCode(false);
        setShowGetCodeInputs(true);

      }
    };
  }

  const handleConfirmCode = async (code) => {
      setShowConfirmCodeInputs(false);
      setProcessingConfirmCode(true);
      const result = await service.login(`+1${username}`,code);
      if (!result.Errored && result.Payload) {
        setProcessingConfirmCode(false);
        userContext.setLoggedInUser(result.Payload);
        close();
      } else {
        setProcessingConfirmCode(false);
        setError(true);
        setErrorMessage('There was an issue confirming your code, please double check.');
        setShowStartOver(true);
        setShowConfirmCodeInputs(true);
      }
  }

  

  const handleUserNameChange = (e) => {
    // var formatted = extractDigits(e.target.value);
    // if (formatted.length <= 10) {
    //   setUsername(formatted);
    // }
    setUsername(e.target.value);
  };

  const handleConfirmCodeChange = (e) => {
    setCode(e.target.value);
    if (e.target.value.length===6){
      handleConfirmCode(e.target.value);
    }
  };

  const gotCodeHelper = ()=>{
    //stop showing loading state, and prepare for confirm code from user 
    setError(false);
    setProcessingGetCode(false);
    setShowConfirmCodeInputs(true);
  }

  const resetHelper = ()=>{
    setError(false);
    setProcessingGetCode(false);
    setShowConfirmCodeInputs(false);
    setShowGetCodeInputs(true);
    setShowStartOver(false);
    setCode('');
    setUsername('');
  }

  const confirmedCodeHelper = ()=>{
    setProcessingConfirmCode(false);
    console.log("code is correct");
  }

  return(
    <div className="login-form-container">

      <CloseIcon
        onClick={close}
        fontSize='medium' color="white" style={{ position: 'absolute', top: 5, right: 5 }} />   
       {!processingGetCode && !processingConfirmCode &&
      <div>
        <h2>Login</h2>
        <p style={{fontSize:'1.1rem',marginTop:'20px'}}>CONNECTR is a mobile first platform, please login with your phone number below. This will allow for a quick checkout. </p>
      </div>}
      {showGetCodeInputs &&
        <> 
        <SRTextField
          value={username}
          onChange={handleUserNameChange}
          id="phone"
          name="phone"
          label="phone"
          variant="outlined">
        </SRTextField>
        <SROutlinedButton onClick={()=>{handleGetCode(username)}}>Send Code</SROutlinedButton>
        </>
      }

      {showConfirmCodeInputs &&
        <div style={{marginTop:'5%'}}>
          <h3>Please Enter your code</h3>
          <SRTextField
            value={code}
            onChange={handleConfirmCodeChange}
            id="code"
            name="code"
            label=""
            variant="outlined">
          </SRTextField>
        </div>
      }

      {processingGetCode && 
        <SRLoader label='requesting code'/>}
      {processingConfirmCode && 
        <SRLoader label='confirming code'/>}
    
    {error && <p style={{color:'var(--cerise)',marginTop:'5%'}}>{errorMessage}</p>}
    {showStartOver && <p style={{fontWeight:'800',marginTop:'5%', cursor:'pointer'}} onClick={()=>{resetHelper()}}> start over</p>}
    </div>
  )

} 

export default LoginForm; 