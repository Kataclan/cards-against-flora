import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { MuiThemeProvider } from '@material-ui/core';
import theme from './mui-theme';
import './index.css';

import AppRouter from './router';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <AppRouter />
  </MuiThemeProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
