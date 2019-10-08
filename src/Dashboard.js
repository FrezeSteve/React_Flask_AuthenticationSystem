import React, { Component } from "react";
import DashboardComponent from "./components/dashboard";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <DashboardComponent />;
  }
}

export default Dashboard;
