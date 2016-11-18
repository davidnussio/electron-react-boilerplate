// @flow
import React from 'react';
import { Match, Link } from 'react-router';
import { AppBar, Tabs, Tab, FontIcon, Avatar, IconMenu, IconButton, MenuItem } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Router from 'react-router/BrowserRouter';
import { connect } from 'react-redux';

import {
  redA700,
  indigoA700
} from 'material-ui/styles/colors';

import HomePage from './HomePage';
import CounterPage from './CounterPage';

const style = { margin: 5 };

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);
Logged.muiName = 'IconMenu';

const mapStateToAppProps = (state) => ({
  location: state.location
});

const App = connect(mapStateToAppProps)((props) => (
  <Router
    history={props.history}
    location={props.location}
    onChange={(location) => {
      // 3. Dispatch location changes
      props.dispatch({
        type: 'LOCATION_CHANGE',
        location
      });
    }}
  >
    <div>
      <AppBar
        iconElementLeft={<div />}
        iconElementRight={<div>
          <Avatar style={style} size={20} backgroundColor={indigoA700}>42</Avatar>
          <Avatar style={style} size={20} backgroundColor={redA700}>3</Avatar>
        </div>
        }
        title={
          <Tabs>
            <Tab
              icon={<FontIcon className="material-icons">library_books</FontIcon>}
              label="Biblioteca"
              onActive={() => props.dispatch({ type: 'LOCATION_CHANGE', location: "/counter"})}
            />
            <Tab
              icon={<FontIcon className="material-icons">book</FontIcon>}
              label="Prestiti"
            />
            <Tab
              icon={<FontIcon className="material-icons">account_box</FontIcon>}
              label="Utenti"
            />
          </Tabs>
        }
      />
      <ul>
        <li>
          <Link
            to="/"
            activeStyle={{ color: 'red' }}
            isActive={(location) => (
              !Object.keys(location.query || {}).length
            )}
          >No query</Link>
        </li>
        <li>
          <Link
            to={{
              pathname: '/',
              query: { foo: 1, bar: 3 }
            }}
            activeStyle={{ color: 'red' }}
          >foo=1, bar=2</Link>
        </li>
        <li>
          <Link
            to={{
              pathname: '/counter',
              query: { foo: 23 }
            }}
            activeStyle={{ color: 'red' }}
          >foo=23</Link>
        </li>
      </ul>
      <Match exactly pattern="/" component={HomePage} />
      <Match exactly pattern="/counter" component={CounterPage} />
    </div>
  </Router>
));

export default App;
