import React, { Component } from 'react';

class Application extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.sampleActionRequest('Dispathing sample');
    }

    render() {
        return (
            <>
                <div>{this.props.application.author}</div>
                <div>{this.props.application.description}</div>
                <div>Update with Epic dispatching {this.props.sample.name}</div>
            </>
        );
    }
}

export default Application;
