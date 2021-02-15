import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createBrowserHistory } from 'history';
import reducers from '../_reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';

const history = createBrowserHistory();

const configureStore = () => {
    let configureStore = {};
    const combineReducer = combineReducers({
        ...reducers,
        router: connectRouter(history),
    });
    const loggerMiddleware = createLogger();

    if (process.env.NODE_ENV === 'productions') {
    } else {
        configureStore = createStore(
            combineReducer,
            compose(
                composeWithDevTools(
                    applyMiddleware(loggerMiddleware, routerMiddleware(history))
                )
            )
        );
    }

    return configureStore;
};

export { configureStore, history };
