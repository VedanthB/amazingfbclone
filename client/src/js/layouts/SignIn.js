import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="signin__wrapper w-screen h-screen flex items-center justify-center bg-light-primary">
      <div className="signin__container bg-white transform -translate-y-4 lg:transform-none h-auto 2xl:w-2/5 xl:w-1/2 lg:w-3/5 md:w-2/3 w-11/12 px-4 lg:px-10 py-10 lg:py-20 rounded-xl lg:rounded-3xl">
        <span className="signin__title text-3xl lg:text-4xl">Sign In</span>
        <div className="signin__inputs flex flex-col mt-4 lg:mt-8">
          <div className="signin__input-wrapper">
            <label htmlFor="email" className="block text-lg lg:text-xl">
              Email
            </label>
            <input
              className="signin__input outline-none px-4 py-2 w-full border-2 border-light-secondary focus-within:border-light-primary rounded"
              type="email"
              name="email"
              placeholder="harry@hogwarts.com"
            />
          </div>
          <div className="signin__input-wrapper mt-4">
            <label htmlFor="password" className="block text-lg lg:text-xl">
              Password
            </label>
            <input
              className="signin__input outline-none px-4 py-2 w-full border-2 border-light-secondary focus-within:border-light-primary rounded"
              type="password"
              placeholder="Expecto Patronum"
            />
          </div>
        </div>
        <div className="signin__cta mt-4">
          <button className="px-6 py-2 bg-light-primary rounded text-white font-bold">
            Sign In
          </button>
        </div>
        <div className="signin__link mt-8">
          Don't have an account yet? Join the fun!{' '}
          <Link className="text-light-primary font-bold" to="/signup">
            Sign Up
          </Link>{' '}
          now!
        </div>
      </div>
    </div>
  );
};

export default SignIn;
