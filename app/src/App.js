import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import './App.css';

class App extends Component {
  render() {
    return (
     <MuiThemeProvider>
         <RaisedButton label="Default" />
     </MuiThemeProvider>
    );
  }
}

export default App;
