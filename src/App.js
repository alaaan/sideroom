import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import HostDetailPagev2 from './pages/HostDetailPagev2'
import Header from './components/Header'
import { AnimatePresence } from "framer-motion";
import { useUser, UserContext } from "./context/user-context";
import { useTheme, ThemeContext } from "./context/theme-context";

import TalentPage from './pages/TalentPage';
import JoinPage from './pages/JoinPage';
import PartnerPage from './pages/PartnerPage';
import TOSPage from "./pages/TOSPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";



const App = () => {
  const user = useUser();
  const theme = useTheme(); 

  return (
    <UserContext.Provider value={user}>
    <ThemeContext.Provider value={theme}>
    <>
      <div className="root-container">
        <AnimatePresence>
          {theme.hasHeader && <Header />}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/talent" component={TalentPage} />
            <Route exact path="/join" component={JoinPage} />     
            <Route exact path="/partner" component={PartnerPage} /> 
            <Route path="/tos" component={TOSPage} />        
            <Route path="/privacy" component={PrivacyPolicyPage} />              
            <Route path="/:hostParam" component={HostDetailPagev2} />    
        
          </Switch>
        </AnimatePresence>
      </div>
    </>
    </ThemeContext.Provider>
    </UserContext.Provider>
  );

}

const AppWrapper = () => {
  return (
    <BrowserRouter className="root-router">
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;

