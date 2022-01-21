import React from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';

const Login = () => (
  <div className="login-wrapper">
    <h1>Please Log In</h1>
    <form>
      <label htmlFor="username">
        <p>Username</p>
        <input type="text" id="username" />
      </label>
      <Link to="/home">
        <button type="submit">Login</button>
      </Link>
    </form>
  </div>
);

export default Login;
