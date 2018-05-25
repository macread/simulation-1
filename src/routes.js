import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Form from './component/form/Form';

export default (
  <Switch>
    <Route component={ App } exact path="/" />
    <Route component={ Form } path="/add"/>
  </Switch>
)