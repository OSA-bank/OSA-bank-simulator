import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui';

class SummaryInformations extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        firstName,
        lastName,
        username,
        occupation,
        state,
        city,
        zipCode,
      },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Summary Informations"></AppBar>
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Username" secondaryText={username} />
            <ListItem primaryText="Occupation" secondaryText={occupation} />
            <ListItem primaryText="State" secondaryText={state} />
            <ListItem primaryText="City" secondaryText={city} />
            <ListItem primaryText="Zip Code" secondaryText={zipCode} />
          </List>
          <br />
          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
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
};
export default SummaryInformations;
