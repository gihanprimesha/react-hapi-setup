import React from 'react';

import { Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { ApplicationLink, ContactLink, ContactAdd } from '../_containers/';

const Routes = () => (
    <div>
        <Switch>
            <PrivateRoute exact path="/" component={ApplicationLink} />
            <PrivateRoute exact path="/contacts" component={ContactLink} />
            <PrivateRoute exact path="/contacts/add" component={ContactAdd} />
        </Switch>
    </div>
);

export default Routes;
