import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Success extends React.Component {
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
          <AppBar title="Success" style={styles.barColor} />
          <h1>Your Profile Informations Were Updated Successfully</h1>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  barColor: { background: '#2E3B55' },
};
export default Success;
