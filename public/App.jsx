'use strict';

import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { configureStore } from './src/_store';

class App extends Component {
    constructor(props) {
        super(props);

        this.configureStore = configureStore();
    }

    render() {
        return (
            <Provider store={this.configureStore}>
                <div>hello world</div>
            </Provider>
        );
    }
}

export default App;
