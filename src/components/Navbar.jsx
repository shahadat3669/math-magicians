import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <header className="header">
    <nav className="header__navbar">
      <Link className="header__title-link" to="/">
        <h1 className="header__title">Math Magicians</h1>
      </Link>
      <ul className="header__nav-items">
        <li className="header__nav-item">
          <NavLink className="header__nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink className="header__nav-link " to="/calculator">
            Calculator
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink className="header__nav-link" to="/quote">
            Quotes
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
export default Navbar;
