'use strict';
import { connect } from 'react-redux';
import Application from './Application';
import { sampleActionRequest } from '../../_actions/';

const mapStateToProps = (state) => {
    return { application: state.application, sample: state.sample };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sampleActionRequest: (data) => {
            dispatch(sampleActionRequest(data));
        },
    };
};

const ApplicationLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Application);

export { ApplicationLink };
