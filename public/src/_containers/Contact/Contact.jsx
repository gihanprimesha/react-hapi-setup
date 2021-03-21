import React, { Fragment } from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: {
                data: [],
                total: 0,
            },
        };

        this.paginationPageSize = systemConfigs.defaultRowPerPage;

        this.pagination = {
            paginationPage: 1,
            paginationPageSize: systemConfigs.defaultRowPerPage,
            search: '',
        };

        this.tableGridOptions = {
            showFilterToggleButton: true,
            showFilterForm: false,
            enableRowSelection: true,
            hideSearchInput: false,
        };

        this.filters = {};

        this.deleteContact = this.deleteContact.bind(this);
        this.viewContact = this.viewContact.bind(this);
        this.getData = this.getData.bind(this);
        this.setPaginationPageSize = this.setPaginationPageSize.bind(this);
        this.submitFormData = this.submitFormData.bind(this);
        this.clearFilters = this.clearFilters.bind(this);
    }

    deleteContact(contactIds) {
        this.props.deleteContact(contactIds);
    }

    viewContact(contactId) {
        this.props.history.push(
            this.props.moduleDetails['routesDetails']['view']['route'] +
                contactId
        );
    }

    componentDidMount() {
        if (this.props.hasPermissions) {
            this.getContacts();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.contact !== prevProps.contact) {
            this.setState({
                tableData: this.props.contact.listDetails,
            });
        }

        if (this.props.hasPermissions !== prevProps.hasPermissions) {
            if (this.props.hasPermissions) {
                this.getContacts();
            }
        }
    }

    getData(pageNumber, searchQuery) {
        this.pagination.paginationPage = pageNumber;
        this.pagination.search = searchQuery;
        this.getContacts();
    }

    setPaginationPageSize(pageSize) {
        this.paginationPageSize = pageSize;
        this.pagination.paginationPageSize = pageSize;
        this.getContacts();
    }

    getContacts() {
        let params = getListParamsPost(
            this.pagination.paginationPage,
            this.pagination.paginationPageSize,
            this.pagination.search,
            this.filters
        );
        this.props.getContactList(params);
    }

    clearFilters() {
        this.filters.cusDeviceOsTypeId = null;
        this.filters.versionCode = null;
        this.filters.versionNo = null;

        this.pagination.paginationPage = 1;
        this.pagination.paginationPageSize = this.paginationPageSize;

        this.getContacts();
    }

    submitFormData(formData) {
        this.filters.cusDeviceOsTypeId = formData.cusDeviceOsTypeId;
        this.filters.versionCode = formData.versionCode;
        this.filters.versionNo = formData.versionNo;

        this.pagination.paginationPage = 1;
        this.getContacts();
    }

    render() {
        return <div>Contact page</div>;
    }
}

export default Contact;
