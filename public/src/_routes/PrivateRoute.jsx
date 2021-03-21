import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

// set true becouse of here no authentication
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        render={(props) => (true ? <Component {...props} /> : <Redirect />)}
    />
);
