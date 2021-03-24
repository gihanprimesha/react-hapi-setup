import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DataGrid } from '@material-ui/data-grid';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmOpen: false,
            contact: '',
        };
        this.getContacts = this.getContacts.bind(this);
        this.onCellClick = this.onCellClick.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
    }

    componentDidMount() {
        this.getContacts('');
    }

    onCellClick(cellData) {
        this.setState({ contact: cellData.row, confirmOpen: true });
    }

    getContacts(data) {
        const { getContactList } = this.props;
        getContactList(data);
    }

    deleteContact() {
        const { deleteContact } = this.props;
        const { contact } = this.state;
        deleteContact(contact);
        this.setState({ confirmOpen: false });
    }

    render() {
        const { contact, loader } = this.props;
        const { confirmOpen } = this.state;
        return (
            <>
                <div style={{ height: 500, width: '100%' }}>
                    <DataGrid
                        onCellClick={this.onCellClick}
                        loading={loader.pendingRequests.includes(
                            'CONTACT_LIST'
                        )}
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
                <Dialog
                    open={confirmOpen}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Delete</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure want to delete this contact ?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => {
                                this.setState({ confirmOpen: false });
                            }}
                            color="primary"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={this.deleteContact}
                            color="primary"
                            autoFocus
                        >
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
}

Contact.propTypes = {
    getContactList: PropTypes.func.isRequired,
    contact: PropTypes.object.isRequired,
    loader: PropTypes.object.isRequired,
    deleteContact: PropTypes.func.isRequired,
};

export default Contact;
