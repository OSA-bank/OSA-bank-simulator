import React from 'react';
import './App.css';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from '../nav/Nav';
import About from '../about/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserForm from '../user/UserForm';
import UserDashboard from '../user/userDashboard';
import DashboardProfileInformations from '../user/dahsboardProfileInformations';
import Login from '../user/Authentication/Login';
import SignUp from '../user/Authentication/Signup';
import Home from '../home/Home';
import Contact from '../home/Contact/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appointment from '../home/calender/Calender';
//import Form from '../home/form/Form2'
import OurTeam from '../user/Other/Signup2';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/appointment" component={Appointment} />
          {/* <Route path="/form" component={Form}/> */}
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
          <Route path="/other" component={OurTeam} />
        </Switch>
      </div>
    </Router>
  );
}

// const Home = () => (
//   <div>
//   <h1>Home Page</h1>
//   </div>
//   );

export default App;
