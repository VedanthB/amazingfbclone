import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const SignIn = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleSignIn = async(e) => {
    e.preventDefault()

    try{

      const { data } = await axios.post('http://localhost:5000/api/auth/login', 
      {
        username,
        password,
        rememberMe: remember
      },
      {
        withCredentials: true  //* AS COOKIES ARE httpOnly, unless you dont send credentials, axios wont send the cookies which are required for authentication
      }
      )
      console.log(data)

      if(data.wasAuthenticated){
        alert('Successfully Logged in')
      }
  } catch(err) {
    console.log(err.message)
  }
    
  }


  return (
    <div className="signin__wrapper w-screen h-screen flex items-center justify-center bg-light-primary">
      <div className="signin__container bg-white transform -translate-y-4 lg:transform-none h-auto 2xl:w-2/5 xl:w-1/2 lg:w-3/5 md:w-2/3 w-11/12 px-4 lg:px-10 py-10 lg:py-20 rounded-xl lg:rounded-3xl">
        <span className="signin__title text-3xl lg:text-4xl">Login</span>
        <form onSubmit={handleSignIn}>
          <div className="signin__inputs flex flex-col mt-4 lg:mt-8">
            <div className="signin__input-wrapper">
              <label htmlFor="username" className="block text-lg lg:text-xl">
                Username
              </label>
              <input
                className="signin__input transition-all outline-none px-4 py-2 w-full border-2 border-light-secondary focus-within:border-light-primary rounded"
                type="text"
                name="username"
                placeholder="harryhogwarts123"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="signin__input-wrapper mt-4">
              <label htmlFor="password" className="block text-lg lg:text-xl">
                Password
              </label>
              <input
                className="signin__input transition-all outline-none px-4 py-2 w-full border-2 border-light-secondary focus-within:border-light-primary rounded"
                type="password"
                placeholder="ExpectoPatronum"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="signin__remember-me flex items-center mt-4">
            <input
              type="checkbox"
              className="focus:outline-none active:outline-none"
              name="remember"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            <label htmlFor="remember" className="ml-1">
              Remember Me
            </label>
          </div>
          <div className="signin__cta mt-4">
            <button type="submit" onSubmit={handleSignIn} className="px-10 py-2 bg-light-primary transition-all rounded text-white font-bold focus:outline-none active:outline-none">
              Sign In
            </button>
          </div>
        </form>
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
