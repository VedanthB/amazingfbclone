import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="signup__wrapper w-screen h-screen flex items-center justify-center bg-light-primary">
      <div className="signup__container bg-white transform -translate-y-4 lg:transform-none h-auto 2xl:w-2/5 xl:w-1/2 lg:w-3/5 md:w-2/3 w-11/12 px-4 lg:px-10 py-10 lg:py-20 rounded-xl lg:rounded-3xl">
        <span className="signup__title text-3xl lg:text-4xl">Sign Up</span>
        <div className="signup__inputs flex flex-col mt-4 lg:mt-8">
          <div className="signup__input-wrapper">
            <label htmlFor="name" className="block text-lg lg:text-xl">
              Name
            </label>
            <input
              className="signup__input outline-none px-4 py-2 w-full border-2 border-light-secondary focus-within:border-light-primary rounded"
              type="text"
              name="name"
              placeholder="Severus Snape"
            />
          </div>
          <div className="signup__input-wrapper">
            <label htmlFor="email" className="block text-lg lg:text-xl">
              Email
            </label>
            <input
              className="signup__input outline-none px-4 py-2 w-full border-2 border-light-secondary focus-within:border-light-primary rounded"
              type="email"
              name="email"
              placeholder="severus@hogwarts.com"
            />
          </div>
          <div className="signup__input-wrapper mt-4">
            <label htmlFor="password" className="block text-lg lg:text-xl">
              Password
            </label>
            <input
              className="signup__input outline-none px-4 py-2 w-full border-2 border-light-secondary focus-within:border-light-primary rounded"
              type="password"
              placeholder="Sectumsempra"
            />
          </div>
        </div>
        <div className="signup__cta mt-4">
          <button className="px-6 py-2 bg-light-primary rounded text-white font-bold">
            Sign Up
          </button>
        </div>
        <div className="signup__link mt-8">
          Already have an account? Don't miss out!{' '}
          <Link className="text-light-primary font-bold" to="/signin">
            Sign In
          </Link>{' '}
          now!
        </div>
      </div>
    </div>
  );
};

export default SignUp;
