import React, { FunctionComponent, useState } from "react";
import { BrowserRouter, Switch, Route, Link, Router } from "react-router-dom";
import HomePage from './pages/HomePage';
import HostDetailPage from './pages/HostDetailPage'
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
            <Route exact path="/host" component={HostDetailPage} />
            <Route exact path="/talent" component={TalentPage} />
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

