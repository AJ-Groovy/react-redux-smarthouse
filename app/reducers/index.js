import tvReducer from './tvReducer';
import climateReducer from './climateReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    tv: tvReducer,
    climate: climateReducer
})

export default reducers