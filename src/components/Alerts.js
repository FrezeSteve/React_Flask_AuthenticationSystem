import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withAlert } from "react-alert";

class Alerts extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.error !== prevProps.error) {
      this.props.alert.error(this.props.error.message);
    }
    if (this.props.messages !== prevProps.messages) {
      if (this.props.messages.signup) {
        this.props.alert.success(this.props.messages.signup);
      }
    }
  }
  state = {};
  render() {
    return <Fragment></Fragment>;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  messages: state.messages
});
export default connect(mapStateToProps)(withAlert()(Alerts));
