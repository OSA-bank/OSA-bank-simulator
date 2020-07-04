import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../home/images/logo.png';
import './nav.css'


function Nav() { 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <Link to="/" className="navbar-brand"><img alt="OSA Bank" src={logo} style={{width: "30%", height: "7vh"}}/></Link>
 

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link text-white text-uppercase ml-5">Home&nbsp;<i className="fa fa-home" aria-hidden="true"></i> <span className="sr-only">(current)</span></Link>
      </li>
     
      <li className="nav-item">
        <Link to="/contact" className="nav-link text-white text-uppercase ml-5">contact us</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link text-white text-uppercase ml-5">About us</Link>
      </li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/signup" className="nav-link text-white text-uppercase ml-2">Sign Up&nbsp;<i className="fa fa-user" aria-hidden="true"></i></Link></li>
      <li><Link to="/signin" className="nav-link text-white text-uppercase">Login&nbsp;<i className="fa fa-sign-in" aria-hidden="true"></i></Link></li>
    </ul>
  </div>
</nav>
  );
}

export default Nav;
