import React, { Component } from 'react';
import '../Authentication/Authentication.css';
import UserForm from '../UserForm';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
  state = {
    redirect: false,
  };
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/userForm" />;
    }
  };
  // state = {
  //   formView: 'false',
  // };
  // toFormView = () => {
  //   this.setState({ formView: 'true' });
  // };
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
              required
            ></input>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
              required
            ></input>
          </div>

          <div className="form-group">
            <label>Password Confirmation</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Your Password"
              required
            ></input>
          </div>
          <div>
            {this.renderRedirect()}
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={this.setRedirect}
            >
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
          </p>
        </form>
      </div>
    );
  }
}

export default SignUp;
