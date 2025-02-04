import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import {getQuotes} from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const logger= createLogger();
const store = createStore(getQuotes,applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(<Provider store={store}>
                <App />
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
