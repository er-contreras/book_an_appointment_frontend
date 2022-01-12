import React from 'react';
import '../styles/Login.css';

export default function Login() {
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label htmlFor="username">
          <p>Username</p>
          <input type="text" id="username" />
        </label>

        <label htmlFor="password">
          <p>Password</p>
          <input type="password" id="password" />
        </label>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
