// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { history } from 'history';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './containers/App';
import configureStore from './store/configureStore';
import './app.global.css';

injectTapEventPlugin();

const store = configureStore();

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App history={history} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
