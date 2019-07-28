import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import New from '../pages/New';
import Profile from '../pages/Profile';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/details" component={Details} />
      <Route path="/new" component={New} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}

export default Routes;
