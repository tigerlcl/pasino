import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="logo">Panvas</div>
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/rules">Rules</Link>
          <Link to="/arena">Paper Arena</Link>
          <Link to="/profile">My Profile</Link>
          <Link to="/faq">FAQ</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 