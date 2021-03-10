'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import Routes from './src/_routes/Routes';
import ErrorBoundry from './src/_components/ErrorBoundry';

class App extends Component {
    render() {
        const { store, history } = this.props;

        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <ErrorBoundry>
                        <Routes />
                    </ErrorBoundry>
                </ConnectedRouter>
            </Provider>
        );
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default App;
