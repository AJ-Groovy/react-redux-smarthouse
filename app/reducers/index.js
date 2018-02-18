import deviceReducer from './deviceReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    devices : deviceReducer
})

export default reducers