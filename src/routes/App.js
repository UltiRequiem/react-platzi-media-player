import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Login from '../containers/Login';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
  </Router>
);

export default App;
