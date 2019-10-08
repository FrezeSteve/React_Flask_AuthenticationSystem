import React, { Component } from "react";
import { connect } from "react-redux";
import Logincomponent from "./components/login";

class Login extends Component {
  state = {};
  render() {
    return <Logincomponent />;
  }
}
const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Login);
