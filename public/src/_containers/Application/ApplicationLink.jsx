'use strict';
import { connect } from 'react-redux';
import Application from './Application';

const mapStateToProps = (state) => {
    return { application: state.application };
};

const mapDispatchToProps = () => {
    return {};
};

const ApplicationLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Application);

export { ApplicationLink };
