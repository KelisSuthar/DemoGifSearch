import {combineReducers} from 'redux';
import Reducer from '../redux/reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    auth: Reducer,
    ...injectedReducers,
  });

  return rootReducer;
}
