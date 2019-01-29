import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import  './App.css';
import MyAppBar from './components/navigation/MyAppBar'

class App extends Component {

  constructor(props){
    super(props);
  }



  render() {
    return (
      <MuiThemeProvider>
        <MyAppBar></MyAppBar>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default App;
