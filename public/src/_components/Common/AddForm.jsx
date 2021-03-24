import React, { useState, Component } from 'react';

import * as yup from 'yup';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Typography,
    Paper,
    Link,
    Grid,
    Button,
    CssBaseline,
    RadioGroup,
    FormLabel,
    MenuItem,
    FormGroup,
    FormControl,
    FormControlLabel,
} from '@material-ui/core';
import Validator from '../ValidateSchema';
import { contactAddRequest } from '../../_actions/';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validateSchema = () =>
    yup.object().shape({
        firstName: yup
            .string()
            .required('First name is required.')
            .max(50, 'Required to be (1 - 50) characters in length'),
        lastName: yup
            .string()
            .required('Last name is required.')
            .max(50, 'Required to be (1 - 50) characters in length'),
        email: yup
            .string()
            .email()
            .required('Email is required.')
            .max(100, 'Required to be (1 - 100) characters in length'),
        phone: yup
            .string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .required('Phone number is required.')
            .max(20, 'Required to be (1 - 20) characters in length'),
        location: yup
            .string()
            .required('Location number is required.')
            .max(100, 'Required to be (1 - 100) characters in length'),
    });

class DetailForm extends Component {
    render() {
        const subscription = { submitting: true, pristine: true };
        const { loader } = this.props;
        const onValidate = async (values) => {
            return await Validator(values, validateSchema);
        };

        const formSubmit = (values) => {
            const { addContact } = this.props;
            addContact(values);
        };

        return (
            <Form
                onSubmit={formSubmit}
                validate={onValidate}
                subscription={subscription}
                render={({
                    handleSubmit,
                    form,
                    submitting,
                    pristine,
                    values,
                }) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <Paper style={{ padding: 16 }}>
                            <Grid container alignItems="flex-start" spacing={2}>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        required
                                        name="firstName"
                                        component={TextField}
                                        type="text"
                                        label="First Name"
                                        maxLength="50"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        required
                                        name="lastName"
                                        component={TextField}
                                        type="text"
                                        label="Last Name"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="email"
                                        fullWidth
                                        required
                                        component={TextField}
                                        type="email"
                                        label="Email"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="phone"
                                        fullWidth
                                        required
                                        component={TextField}
                                        label="Phone Number"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        name="location"
                                        fullWidth
                                        required
                                        component={TextField}
                                        label="Location"
                                    />
                                </Grid>

                                <Grid
                                    container
                                    alignItems="flex-end"
                                    spacing={2}
                                >
                                    <Grid item style={{ marginTop: 16 }}>
                                        {/* <Button
                                            type="button"
                                            variant="contained"
                                            disabled={submitting || pristine}
                                        >
                                            Reset
                                        </Button> */}
                                    </Grid>
                                    <Grid item style={{ marginTop: 16 }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            disabled={loader.pendingRequests.includes(
                                                'CONTACT_ADD'
                                            )}
                                        >
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </form>
                )}
            />
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        ...props,
        loader: state.loader,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addContact: (data) => {
            dispatch(contactAddRequest(data));
        },
    };
};

DetailForm.propTypes = {
    addContact: PropTypes.func.isRequired,
    loader: PropTypes.object.isRequired,
};

const AddForm = connect(mapStateToProps, mapDispatchToProps)(DetailForm);
export default AddForm;
