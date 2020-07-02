import React, { Component } from 'react';
import '../Authentication/Authentication.css';

class SignUp extends Component {
  render() {
    return (
      <div className="auth-container">
        <form>
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email Address"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
          </p>
        </form>
      </div>
    );
  }
}

export default SignUp;
