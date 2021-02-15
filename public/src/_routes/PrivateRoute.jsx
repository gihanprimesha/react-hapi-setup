import React from 'react';
import { Route, Link } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            render={(props) => (true ? <Component {...props} /> : <Redirect />)}
        />
    );
};
