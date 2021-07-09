import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import Login from '../containers/Login';

const App = () => (
  <Router basename="">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Router>
);

export default App;
