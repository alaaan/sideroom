import React, {useContext,useState} from 'react';
import { motion } from 'framer-motion'
import door from '../img/door.png'
import { UserContext } from "../context/user-context"
import SRButtonOutlined from '../components/SRButtonOutlined'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Modal from '../components/Modal';
import LoginForm from '../components/LoginForm'
import SRTextField from '../components/SRTextField';
import SRLoader from '../components/SRLoader';
import LinearProgress from '@material-ui/core/LinearProgress';

const Header = () => {

  const {isAuthenticated,loggedInUser,clearLoggedInUser} = useContext(UserContext);
  const [showLogin,setShowLogin] = useState(false);
  console.log(isAuthenticated);
  console.log(loggedInUser);

  const toggleLogin = ()=>{
    setShowLogin(!showLogin);
  }

  return (
    
    <div className="header">

      <div style={{ display: 'flex' }}>
        <img src={door} style={{ objectFit: 'none' }} />
        <h2 style={{ padding: '10px', fontSize: '1.7rem', display: 'inline' }}>SideRoom</h2>
      </div>
      <div className="nav-buttons">
        {/* <h3>How does this work?</h3> */}
        {!isAuthenticated ?
        <SRButtonOutlined onClick={toggleLogin}>Login</SRButtonOutlined> :
        <>
          <img className="user-img" src={loggedInUser.ProfileImageSmall} alt="profile"/> }
          <div style={{display:'flex',flexDirection:'column'}}>
            <h3>{loggedInUser.Name}</h3>
            <h3 
            style={{color:'var(--pink)',fontSize:'.8rem'}}
            onClick={()=>(clearLoggedInUser())}
            >Logout</h3>
          </div>
        </>}
      </div>

      {showLogin? (
      <Modal>
          <LoginForm close={toggleLogin} />
      </Modal>): null}

    </div>
  )
}

export default Header; 
