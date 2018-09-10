import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const initialState = {
    feeling: '',
    understanding : '',
    support: '',
    comments: ''
}

// Create Store & reducers, Apply logger
const reducers = combineReducers(
    {
        feedbackReducer: (state = initialState, action) => {
            return state;
        }
    }
)

const storeInstance = createStore(
    // combineReducers
    () => {
        console.log('reducer');
    },
    // middleware
    // logger should be last
    applyMiddleware(logger)
)

// Wrap app with provider


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
