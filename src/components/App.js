import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Store from './Store';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            {isLoggedIn && (
              <li>
                <Link to="/store">Store</Link>
              </li>
            )}
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Register />
          </Route>
          <Route path="/login">
            <Login setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Route path="/store">
            {isLoggedIn ? <Store /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
