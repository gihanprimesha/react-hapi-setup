import React, { Component } from 'react';

class Application extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div>{this.props.application.author}</div>
                <div>{this.props.application.description}</div>
            </>
        );
    }
}

export default Application;
