import React, { Fragment } from 'react';

import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { ApplicationLink } from '../_containers/';

const Routes = () => (
    <Fragment>
        <Switch>
            <PrivateRoute path="/" component={ApplicationLink} />
        </Switch>
    </Fragment>
);

export default Routes;
