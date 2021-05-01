import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </HashRouter>
  );
};

export default App;
