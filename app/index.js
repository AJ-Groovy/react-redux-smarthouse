import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import {
    turnOn,
    turnOff,
    addDevice
} from './actions';

const store = createStore(reducers);
console.log(store.getState());
store.dispatch(addDevice({
    id: 'iddqd',
    type: 'tv',
    settings: {
        enabled: 'false'
    }
}));

var testItem = {
    id: 'iddqd',
    type: 'climate',
    settings: {
        enabled: 'false'
    }
}


store.dispatch(addDevice(testItem));
console.log(store.getState());
store.dispatch(turnOn(testItem));
console.log(store.getState());