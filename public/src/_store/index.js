import { createStore, applyMiddleware, combineReducers } from 'redux';
//import { createBrowserHistory } from 'history';
import reducers from '../_reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const configureStore = () => {
    let configureStore = {};

    const combineReducer = combineReducers({ ...reducers });
    const loggerMiddleware = createLogger();

    if (process.env.NODE_ENV === 'productions') {
    } else {
        configureStore = createStore(
            combineReducer,
            composeWithDevTools(applyMiddleware(loggerMiddleware))
        );
    }

    return configureStore;
};

export { configureStore };
