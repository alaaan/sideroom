import React, {useContext,useState,useEffect} from 'react';
import { UserContext } from "../context/user-context"
import SRButtonOutlined from '../components/SRButtonOutlined'
import Modal from '../components/Modal';
import LoginForm from '../components/LoginForm'
import {ReactComponent as Logo} from '../img/icon.svg'
import gsap from 'gsap';

const Header = () => {

  useEffect(() => {

    //setup animations here
    gsap.to('#center-circles',{fill:'white',rotate:360,duration:.5,repeat:-1,repeatDelay:5,ease: 'bounce',transformOrigin:'center'});
    });

  const {isAuthenticated,loggedInUser,clearLoggedInUser} = useContext(UserContext);
  const [showLogin,setShowLogin] = useState(false);
  console.log(isAuthenticated);
  console.log(loggedInUser);

  const toggleLogin = ()=>{
    setShowLogin(!showLogin);
  }

  

  return (
    
    <div className="header">

      <div style={{ display: 'flex',paddingTop:'2%' }}>
        <Logo />
      </div>
      <div className="nav-buttons">
        {/* <h3>How does this work?</h3> */}
        {!isAuthenticated ? <></>

        // <SRButtonOutlined onClick={toggleLogin}>Login</SRButtonOutlined> 
        :
        <>
          <img className="user-img" src={loggedInUser.ProfileImageSmall} alt="profile"/> 
          <div style={{display:'flex',flexDirection:'column'}}>
            <h3>{loggedInUser.Name}</h3>
            <h3 
            style={{cursor:'pointer',color:'var(--cerise)',fontSize:'.8rem'}}
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
