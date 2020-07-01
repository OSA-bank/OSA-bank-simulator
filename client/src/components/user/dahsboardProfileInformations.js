import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui';
import UserDashboard from './userDashboard';

class DashboardProfileInformations extends React.Component {
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
      <MuiThemeProvider>
        <React.Fragment>
          <List>
            <ListItem primaryText="First Name" secondaryText="hi" />
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
