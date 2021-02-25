'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from './src/_routes/Routes';
import { ConnectedRouter } from 'connected-react-router';
import ErrorBoundry from './src/_components/ErrorBoundry';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <ConnectedRouter history={this.props.history}>
                    <ErrorBoundry>
                        <Routes />
                    </ErrorBoundry>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
