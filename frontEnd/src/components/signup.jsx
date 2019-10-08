import React from "react";

export default function SignupComponent(props) {
  return (
    <form
      method="post"
      onSubmit={props.onSubmit}
      className="col-sm-6 col-12 mx-auto"
    >
      <h1>Signup</h1>
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
        <label htmlFor="exampleInputPassword1">Username</label>
        <input
          required
          type="text"
          className="form-control"
          id="exampleInputUsername"
          name="username"
          onChange={props.onChange}
          value={props.username}
          placeholder="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one 
          uppercase and lowercase letter, and at least 8 or more characters"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="password"
          onChange={props.onChange}
          value={props.password}
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword2">Confirm password</label>
        <input
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one 
          uppercase and lowercase letter, and at least 8 or more characters"
          type="password"
          className="form-control"
          id="exampleInputPassword2"
          name="passwordTwo"
          onChange={props.onChange}
          value={props.passwordTwo}
          placeholder="Confirm password"
        />
      </div>
      <button type="submit" className="btn btn-success">
        Signup
      </button>
    </form>
  );
}
