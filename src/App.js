import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import HostDetailPagev2 from './pages/HostDetailPagev2'
import Header from './components/Header'
import { AnimatePresence } from "framer-motion";
import { useUser, UserContext } from "./context/user-context";
import TalentPage from './pages/TalentPage';


const App = () => {
  const user = useUser();
  return (
    <UserContext.Provider value={user}>
    <>
      <div className="root-container">
        <AnimatePresence>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/talent" component={TalentPage} />
            <Route path="/:hostParam" component={HostDetailPagev2} />            
          </Switch>
        </AnimatePresence>
      </div>
    </>
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

