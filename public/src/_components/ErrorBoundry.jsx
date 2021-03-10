'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = { error: false };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
    }

    render() {
        const { error, errorInfo } = this.state;
        const { children } = this.props;

        if (error) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {error && error.toString()}
                        <br />
                        {errorInfo.componentStack}
                    </details>
                </div>
            );
        }

        return children;
    }
}

ErrorBoundry.propTypes = {
    children: PropTypes.object.isRequired,
};

export default ErrorBoundry;
