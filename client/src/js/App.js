import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './layouts/Home';
import SignIn from './layouts/SignIn';
import SignUp from './layouts/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </BrowserRouter>
  );
};

export default App;
