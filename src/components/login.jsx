import React, { Component, Fragment } from "react";

export default function Logincomponent(props) {
  return (
    <Fragment>
      <form onSubmit={props.onSubmit} className="col-sm-6 col-12 mx-auto">
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="exampleInput">Email</label>
          <input
            required
            type="email"
            className="form-control"
            id="exampleInput"
            name="email"
            onChange={props.onChange}
            value={props.email}
            aria-describedby="Help"
            placeholder="Enter Email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            required
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={props.onChange}
            value={props.password}
            placeholder="Password"
          />
        </div>
        <p>
          <button type="submit" className="btn btn-primary mr-3">
            Login
          </button>
          or
          <a className="btn btn-link" href="/signup">
            Signup
          </a>
        </p>
      </form>
    </Fragment>
  );
}
