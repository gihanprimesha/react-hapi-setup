import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {
    hideMessage,
    addPendingActions,
    removePendingActions,
} from '../../_actions';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const ServerMessage = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const message = useSelector((state) => state.serverMessage);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(message.show);
    }, [message.show]);

    const closeMessage = () => {
        dispatch(hideMessage());
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(hideMessage());
    };

    return (
        <>
            <div className="slp-ui-banner-wrap">
                <div className={classes.root}>
                    <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    >
                        <Alert onClose={handleClose} severity="error">
                            {message.details.content.message}
                        </Alert>
                    </Snackbar>
                </div>
            </div>
        </>
    );
};

export default ServerMessage;
