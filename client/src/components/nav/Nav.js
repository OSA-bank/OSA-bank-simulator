import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand" href="#">logo</a>
 

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <a className="nav-link text-white text-uppercase ml-5" href="/">Home&nbsp;<i className="fa fa-home" aria-hidden="true"></i> <span className="sr-only">(current)</span></a>
      </li>
     
      <li className="nav-item">
        <a className="nav-link text-white text-uppercase ml-5" href="/contact">contact us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white text-uppercase ml-5" href="/about">About us</a>
      </li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a className="nav-link text-white text-uppercase ml-2" href="/signup">Sign Up&nbsp;<i className="fa fa-user" aria-hidden="true"></i></a></li>
      <li><a className="nav-link text-white text-uppercase" href="/signin">Login&nbsp;<i className="fa fa-sign-in" aria-hidden="true"></i></a></li>
    </ul>
  </div>
</nav>
    // <nav> 
    //   <h3>LOGO</h3>
    //   <ul className="nav-links">
    //     <Link to='/'>
    //     <li><i class="fas fa-home">Home</i></li>
    //     </Link>
    //     <Link to='/newclient'>  
    //     <li>Become a client</li>
    //     </Link>
    //     <Link to='/contact'>
    //     <li>Contact Us</li>
    //     </Link>
    //     <Link to='/simulator'>
    //     <li>Credit Simulator</li>
    //     </Link>
    //     <Link to='/about'>
    //     <li>About Us</li>
    //     </Link>
    //     <Link to='/help'>
    //     <li>Help</li>
    //     </Link>
    //   </ul>
    // </nav>
  );
}

export default Nav;
