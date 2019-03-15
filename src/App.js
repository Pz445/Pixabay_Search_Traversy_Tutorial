import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';
import Search from './components/Search/Search'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
          <Search />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
