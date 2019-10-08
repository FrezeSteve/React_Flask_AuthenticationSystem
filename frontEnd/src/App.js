import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import store from "./redux/store";

import Navbar from "./Navbar";
import Authentication from "./Authentication";
import Dashboard from "./Dashboard";
import Alerts from "./components/Alerts";
import "./style.css";

// Alert Options
const alertOptions = {
  timeout: 3500,
  position: "middle right"
};

export default function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Alerts />
        <Router>
          <Route exact strict path="" component={Authentication} />
          <Route exact strict path="/dashboard" component={Dashboard} />
        </Router>
      </AlertProvider>
    </Provider>
  );
}
