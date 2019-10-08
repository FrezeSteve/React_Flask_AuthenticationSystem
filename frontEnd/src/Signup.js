import React, { Component } from "react";
import { connect } from "react-redux";

// Actions to dispatch
import { errors } from "./redux/actions/errorsAction";
import { createMessages } from "./redux/actions/messagesAction";

import SignupComponent from "./components/signup";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      passwordTwo: "",
      error: {}
    };
  }
  onChange = event => {
    const { name, value } = event.target;
    // console.log(name, " : ", value);

    // return false;
    if (name === "email") {
      this.setState({
        email: value
      });
    } else if (name === "username") {
      this.setState({
        username: value
      });
    } else if (name === "password") {
      this.setState({
        password: value
      });
    } else if (name === "passwordTwo") {
      this.setState({
        passwordTwo: value
      });
    } else {
      console.log(name, " : ", value);
    }
  };
  onSubmit = event => {
    event.preventDefault();
    // Basic Validation
    if (this.state.password !== this.state.passwordTwo) {
      // Passwords Match
      const error = {
        message: "Passwords dont Match",
        status: 401
      };
      this.props.errors(error);
      return false; // The form won't submit
    }
    const data = {
      user: {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      }
    };
    this.props.createMessages({ signup: "Successful" });
  };
  render() {
    return (
      <div>
        <SignupComponent
          email={this.state.email}
          username={this.state.username}
          password={this.state.password}
          passwordTwo={this.state.passwordTwo}
          email={this.state.email}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({});
export default connect(
  null,
  { errors, createMessages }
)(Signup);
