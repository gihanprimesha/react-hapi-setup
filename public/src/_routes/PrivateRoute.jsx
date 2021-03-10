import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        render={(props) => (true ? <Component {...props} /> : <Redirect />)}
    />
);
