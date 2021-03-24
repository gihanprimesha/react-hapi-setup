import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from '../_epics/';
import reducers from '../_reducers';
import {
    loadingSpinnerMiddleware,
    serverMessageMiddleware,
} from '../_middlewares';

const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware();

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
                    applyMiddleware(
                        loggerMiddleware,
                        loadingSpinnerMiddleware,
                        serverMessageMiddleware,
                        routerMiddleware(history),
                        epicMiddleware
                    )
                )
            )
        );
    }
    console.log(rootEpic);
    epicMiddleware.run(rootEpic);

    return configureStore;
};

export { configureStore, history };
