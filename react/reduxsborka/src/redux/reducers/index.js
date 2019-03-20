import {combineReducers} from 'redux';
import first from './firstReducer';

const rootReducer = combineReducers({
  first,
})

export default rootReducer;