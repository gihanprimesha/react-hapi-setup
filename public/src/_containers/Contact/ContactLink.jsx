'use strict';

import { connect } from 'react-redux';
import Contact from './Contact';
import { contactListRequest, contactDeleteRequest } from '../../_actions/';

const mapStateToProps = (state, props) => {
    return {
        contact: state.contact,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getContactList: (params) => {
            dispatch(contactListRequest());
        },
        deleteContact: (id) => {
            dispatch(contactDeleteRequest(id));
        },
    };
};

const ContactLink = connect(mapStateToProps, mapDispatchToProps)(Contact);

export { ContactLink };
