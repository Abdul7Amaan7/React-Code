
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="navbar">
        <Link to="/" className="logo">
          DevStudio<span>.</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Link to="/contact" className="nav-button">
          Get Started
        </Link>
      </div>
    </header>
  );
}

export default Header;
