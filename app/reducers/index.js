// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';

const initialLocation = { pathname: '/', search: '', hash: '' };
const locationReducer = (state = initialLocation, action) => (
  action.type === 'LOCATION_CHANGE' ?
    action.location : state
);

const rootReducer = combineReducers({
  counter,
  routing,
  location: locationReducer
});

export default rootReducer;
