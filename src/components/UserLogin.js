import React,{useState,useContext} from 'react';
import { UserContext } from "../context/user-context";
import UserWebService from '../web_services/user_webservice';
import SRButton from '../components/SRButton';
import Loader from '../components/SRLoaderSlim';


const UserLogin = ()=>{

  const [userName,setUsername] = useState(null);
  const [password,setPassword] = useState(null);
  const [isSubmitting,setIsSubmitting] = useState(false);

  const userContext = useContext(UserContext);

  const login = async () => {
    if (!isSubmitting) {
      setIsSubmitting(true);
      const webService = new UserWebService();
      var result = await webService.login(userName, password);
      if (!result.Errored && result.Payload) {
        setIsSubmitting(false);
        userContext.setLoggedInUser(result.Payload);
      } else {
        setIsSubmitting(false);
        //add error catch for invalid login
      }
    }
  };

  
  return(

    <div className="login-wrapper">
      <h2 className='gradient'>Partner Login</h2>
      <div className="border-box login">
        <input className='onboard-input' type='text' placeholder='username' onChange={(e)=>{setUsername(e.target.value)}} />
        <input className='onboard-input' type='password' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} />
        <SRButton onClick={()=>{login()}}>{!isSubmitting ? ('Login') : <Loader />}</SRButton>
      </div>
    </div>



  )

    
}

export default UserLogin; 