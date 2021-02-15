import React from 'react';
import { PrivateRoute } from './PrivateRoute';
import { Switch } from 'react-router-dom';
import { ApplicationLink } from '../_containers/';

const Routes = () => {
    return (
        <div>
            <Switch>
                <PrivateRoute exact path="/" component={ApplicationLink} />
            </Switch>
        </div>
    );
};

export default Routes;
