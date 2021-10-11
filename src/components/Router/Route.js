import React from "react";
import Navbar from "../Pages/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignupForm from "../Pages/Signup";
import LoginForm from "../Pages/Login";
import ForgotPassword from "../Pages/css/ForgotPassword";
import EmployeeComponent from "../Pages/Student";

const RoutePage = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LoginForm} />
  
          <Route path="/signup" component={SignupForm} />
          <Route path="/forgotpassword" component={ForgotPassword}/>
          <Route path="/student" component={EmployeeComponent}/>
        </Switch>
      </Router>
    </>
  );
};

export default RoutePage;
