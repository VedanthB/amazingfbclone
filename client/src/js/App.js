import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './layouts/Home';
import SignIn from './layouts/SignIn';
import SignUp from './layouts/SignUp';

const App = () => {
  return (
    <HashRouter>
      <Route path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </HashRouter>
  );
};

export default App;
