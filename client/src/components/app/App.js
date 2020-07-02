import React from 'react';
import './App.css';
import Nav from '../nav/Nav';
import About from '../about/About';
import Home from '../home/Home';
import Contact from '../home/Contact/ContactUs'
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appointment from '../home/calender/Calender';
//import Form from '../home/form/Form2'

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
    <Route path="/appointment"  component={Appointment}/>
    {/* <Route path="/form" component={Form}/> */}
    </Switch>
    </div>
  </Router>
  );
}



export default App;
