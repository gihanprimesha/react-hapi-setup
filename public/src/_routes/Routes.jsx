import React, {Fragment} from 'react';

import { Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { ApplicationLink } from '../_containers/';

const Routes = () => (
    <Fragment>
        <Switch>
            <PrivateRoute exact path="/" component={ApplicationLink} />
        </Switch>
    </Fragment>
);

export default Routes;
