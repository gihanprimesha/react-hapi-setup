'use strict';

import { connect } from 'react-redux';
import Application from './Application';
import { sampleActionRequest } from '../../_actions/';

const mapStateToProps = (state) => ({
    application: state.application,
    sample: state.sample,
});

const mapDispatchToProps = (dispatch) => ({
    sampleActionRequest: (data) => {
        dispatch(sampleActionRequest(data));
    },
});

const ApplicationLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Application);

export { ApplicationLink };
