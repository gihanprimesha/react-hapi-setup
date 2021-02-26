import React, { Component } from 'react';
import NavigatiobBar from '../../_components/Common/NavigationBar';

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
                <NavigatiobBar />
                <div>{this.props.application.author}</div>
                <div>{this.props.application.description}</div>
                <div>Update with Epic dispatching {this.props.sample.name}</div>
            </>
        );
    }
}

export default Application;
