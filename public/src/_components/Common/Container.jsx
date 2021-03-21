import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function WrapContainer() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography
                    component="div"
                    style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
                />
            </Container>
        </>
    );
}