import React from 'react';
import ReactDOM from 'react-dom';
// import DevicesContainer from './components/index.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import {
    turnOn,
    turnOff
} from './actions';

const store = createStore(reducers);
// const devices = [{ id: 'iddqd', type: 'TV', enabled: 'true' }, { id: 'iddqd2', type: 'Climate', enabled: 'false' }, { id: 'iddqd3', type: 'Climate', enabled: 'false' }];
console.log(store.getState());
store.dispatch(turnOff('iddqd'))
console.log(store.getState());
console.log(store.getState());

ReactDOM.render(
    <DevicesContainer devices={devices} />,
    document.querySelector('#root')
);
