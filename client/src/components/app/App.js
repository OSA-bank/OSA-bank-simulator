import React from 'react';
import './App.css';
import Nav from '../nav/Nav';
import About from '../about/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserForm from '../user/UserForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/userForm" component={UserForm} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
