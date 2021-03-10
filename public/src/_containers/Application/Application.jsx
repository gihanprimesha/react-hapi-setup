import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavigatiobBar from '../../_components/Common/NavigationBar';

class Application extends Component {
    componentDidMount() {
        const { sampleActionRequest } = this.props;
        sampleActionRequest('Dispathing sample');
    }

    render() {
        const { application, sample } = this.props;

        return (
            <>
                <NavigatiobBar />
                <div>{application.author}</div>
                <div>{application.description}</div>
                <div>Update with Epic dispatching {sample.name}</div>
            </>
        );
    }
}

Application.propTypes = {
    application: PropTypes.object.isRequired,
    sample: PropTypes.object.isRequired,
    sampleActionRequest: PropTypes.func.isRequired,
};

export default Application;
