import React from 'react';
import './App.css';
import Nav from '../nav/Nav';
import User from '../user/User';
import About from '../about/About';
import Home from '../home/Home';
import Contact from '../home/Contact/ContactUs'
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../home/SideBar/SideBar'

function App() {
  return (
  <Router>
      <div className="App">
        {/* <SideBar/> */}
      <Nav />
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact"  component={Contact}/>
    <Route path="/user"  component={User}/>
    </Switch>
    </div>
  </Router>
  );
}



export default App;
