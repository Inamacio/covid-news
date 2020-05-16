import React,  { Component } from 'react';
import Blog from './Blog'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Google Sans, normal',
  },
});

export default class App extends Component {
  render() {
    return <div className="App">
    <ThemeProvider theme={theme}>
      <Blog />
    </ThemeProvider>
  </div>
  }
}

