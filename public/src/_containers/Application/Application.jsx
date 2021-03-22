import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactLink } from '../Contact/ContactLink';

class Application extends Component {
    componentDidMount() {
        const { sampleActionRequest } = this.props;
        sampleActionRequest('Dispathing sample');
    }

    render() {
        const { application, sample } = this.props;

        return (
            <>
                <ContactLink />
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
