import React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@material-ui/data-grid';

const rows = [
    {
        id: 1,
        firstName: 'defunkt',
        lastName: 38,
        phone: 'defunkt',
        email: 38,
        location: 38,
    },
    {
        id: 2,
        firstName: 'defunkt',
        lastName: 38,
        phone: 'defunkt',
        email: 38,
        location: 38,
    },
];

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.getContacts = this.getContacts.bind(this);
    }

    componentDidMount() {
        this.getContacts('');
    }

    getContacts(data) {
        const { getContactList } = this.props;
        getContactList(data);
    }

    render() {
        const { contact } = this.props;
        return (
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                    loading={false}
                    disableColumnMenu
                    hideFooter
                    columns={[
                        { field: 'id', hide: true },
                        {
                            field: 'firstName',
                            headerName: 'First Name',
                            description: 'First name of the person',
                            width: 200,
                        },
                        {
                            field: 'lastName',
                            headerName: 'Last Name',
                            description: 'Last name of the person',
                            width: 200,
                        },
                        {
                            field: 'phone',
                            headerName: 'Phone Number',
                            width: 300,
                        },
                        { field: 'email', headerName: 'Email', width: 300 },
                        {
                            field: 'location',
                            headerName: 'Location',
                            width: 200,
                        },
                    ]}
                    rows={contact.list}
                />
            </div>
        );
    }
}

Contact.propTypes = {
    getContactList: PropTypes.func.isRequired,
    contact: PropTypes.object.isRequired,
};

export default Contact;
