'use strict';

import { connect } from 'react-redux';
import Contact from './Contact';
import { contactListRequest, contactDeleteRequest } from '../../_actions/';

const mapStateToProps = (state, props) => {
    return {
        contact: state.contact,
        loader: state.loader,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getContactList: (params) => {
            dispatch(contactListRequest(params));
        },
        deleteContact: (row) => {
            dispatch(contactDeleteRequest(row));
        },
    };
};

const ContactLink = connect(mapStateToProps, mapDispatchToProps)(Contact);

export { ContactLink };
