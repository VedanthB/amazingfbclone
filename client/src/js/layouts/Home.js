import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Redirect to="/signin" />
    </div>
  );
};

export default Home;
