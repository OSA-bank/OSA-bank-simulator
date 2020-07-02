import React from 'react';
import './App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from '../nav/Nav';
import About from '../about/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserForm from '../user/UserForm';
import UserDashboard from '../user/userDashboard';
import DashboardProfileInformations from '../user/dahsboardProfileInformations';
import Login from '../user/Authentication/Login';
import SignUp from '../user/Authentication/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/userForm" component={UserForm} />
          <Route path="/userDashboard" component={UserDashboard} />
          <Route
            path="/dashboarprofileinformations"
            component={DashboardProfileInformations}
          />
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
