import React from 'react';

import { Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { ApplicationLink } from '../_containers/';

const Routes = () => (
    <div>
        <Switch>
            <PrivateRoute exact path="/" component={ApplicationLink} />
        </Switch>
    </div>
);

export default Routes;
