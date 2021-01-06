import React, {useState} from 'react';
import SRTextField from '../components/SRTextField';
import SROutlinedButton from '../components/SRButtonOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { extractDigits} from "../helpers/functions"
import UserWebService from "../web_services/user_webservice"


const LoginForm = ({close})=>{

  const [username, setUsername] = useState('');

  //service
  const service = new UserWebService();

  const handleGetCode = async (username) => {
    console.log(username);
      const result = await service.requestLoginCode(`+1${username}`);
      if (!result.Errored) {
        // console.log("got a code result: " + JSON.stringify(result));
        console.log("got a code result");
      }
  };


  const handleUserNameChange = (e) => {
    // var formatted = extractDigits(e.target.value);
    // if (formatted.length <= 10) {
    //   setUsername(formatted);
    // }
    console.log('handle username change: ' + e.target.value);
    setUsername(e.target.value);
  };

  return(
    <div className="login-form-container">
      <CloseIcon
        onClick={close}
        fontSize='medium' color="white" style={{ position: 'absolute', top: 5, right: 5 }} />
      <h2>Login</h2>
      <SRTextField
        value={username}
        onChange={handleUserNameChange}
        id="phone"
        name="phone"
        label="phone"
        variant="outlined">
      </SRTextField>
      <SROutlinedButton onClick={handleGetCode(username)}>Send Code</SROutlinedButton>
    </div>
  )

} 

export default LoginForm; 