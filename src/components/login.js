import React from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  // const [username, setUserName] = useState('');

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label htmlFor="username">
          <p>Username</p>
          <input type="text" id="username" />
        </label>

        {/* <label htmlFor="username">
          <p>Username</p>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label> */}

        {/* <label htmlFor="password">
          <p>Password</p>
          <input type="password" id="password" />
        </label> */}

        <Link to="/home">
          <button type="submit">Login</button>
        </Link>
      </form>
    </div>
  );
}
