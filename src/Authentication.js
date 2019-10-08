import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

class Authentication extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Route path="/" exact strict component={Login} />
        <Route path="/signup" strict component={Signup} />
      </Router>
    );
  }
}

export default Authentication;
