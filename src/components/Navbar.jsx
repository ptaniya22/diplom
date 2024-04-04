import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__box">
          <Link to="/" className="logo">
            Redux&<b>Router</b>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
