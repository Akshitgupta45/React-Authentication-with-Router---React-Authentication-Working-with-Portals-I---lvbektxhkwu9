import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login validation here
    if (email === 'example@example.com' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      setError(true);
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {error && <p className="error-para">Email or password is invalid</p>}
        <div className="email-div">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password-div">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-btn">
          Log In
        </button>
      </form>
      <div>
        Don't have an account?{' '}
        <Link to="/register">
          <button className="register-link">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
