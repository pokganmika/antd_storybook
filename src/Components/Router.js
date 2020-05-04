import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Select01 from '../Routes/Select01';

import Header from './Header';

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path='/select01' component={Select01}/>
        <Redirect from='*' to='/' />
      </Switch>
    </>
  </Router>
);
