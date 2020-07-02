import React from 'react';
import './App.css';
import Nav from '../nav/Nav';
import Sginup from '../user/sginup.js';
import About from '../about/About';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
 
function App() {
  return (
  <Router>
      <div className="App">
    <Nav />
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/user"  component={Sginup}/>
    </Switch>
    </div>
  </Router>
  );
}


const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
