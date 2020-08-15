import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom';
import theme from './theme.jsx';
import { ThemeProvider } from '@material-ui/styles';
import Routes from "./routes/index.jsx"

ReactDOM.render(
  <ThemeProvider theme={theme} >
    <CssBaseline />
    < Routes />
  </ThemeProvider>,
  document.querySelector('#root'),
);
