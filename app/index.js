import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import TvContainer from './containers/tv'


const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <TvContainer />
    </Provider>,
    document.querySelector('#root')
)