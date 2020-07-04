import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui';
import UserDashboard from './userDashboard';
import axios from 'axios';

class DashboardProfileInformations extends React.Component {
  state = { users: [] };
  componentWillMount() {
    axios
      .get('http://localhost:5000/userinformations')
      .then((response) => {
        this.setState({
          users: response.data,
        });
        console.log(this.state.users);
        // console.log(this.state.classesList);
      })

      .catch((err) => console.log('Error', err));
  }

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div className="containerinf">
        <MuiThemeProvider>
          <React.Fragment>
            <h1>My Personal Informations</h1>
            <List>
              <ListItem primaryText="First Name" secondaryText="" />
              <ListItem primaryText="Last Name" secondaryText="hi" />
              <ListItem primaryText="Username" secondaryText="hi" />
              <ListItem primaryText="Occupation" secondaryText="hi" />
              <ListItem primaryText="State" secondaryText="hi" />
              <ListItem primaryText="City" secondaryText="hi" />
              <ListItem primaryText="Zip Code" secondaryText="hi" />
            </List>
            <br />
            <RaisedButton
              label="Edit"
              primary={false}
              style={styles.button}
              onClick={this.back}
            />
            <RaisedButton
              label="Save"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}
const styles = {
  button: {
    margin: 15,
  },
  barColor: { background: '#2E3B55' },
};
export default DashboardProfileInformations;
