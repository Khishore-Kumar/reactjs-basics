import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/"  activeStyle={{
                                              fontWeight: "bold",
                                              color: "red"
                                            }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{
                                                  fontWeight: "bold",
                                                  color: "red"
                                                }}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" activeStyle={{
                                                  fontWeight: "bold",
                                                  color: "red"
                                                }}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}