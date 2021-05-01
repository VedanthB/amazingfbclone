import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/*
    Temporary redirect to signin page.
    Once backend auth is done, we'll redirect based on whether the user is signed in or not.
    */}
      <Redirect to="/signin" />
    </div>
  );
};

export default Home;
