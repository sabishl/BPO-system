import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Header1() {
  return (
    <header className="header">
    <div className="container">
      <div className="header-left">
        <h1>Login</h1>
      </div>
      <nav className="header-right">
        <ul>
        <li>
            <NavLink
              to="/"
              activeClassName="active"
            >
              Admin
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/client-login"
              activeClassName="active"
            >
              Client
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/employee-login"
              activeClassName="active"
            >
              Employee
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  );
}
