// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Optional: for custom styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="navbar-item">
          <Link to="/make-transaction">Make Transaction</Link>
        </li>
        <li className="navbar-item">
          <Link to="/budgets">Budgets</Link>
        </li>
        <li className="navbar-item">
          <Link to="/reports">Reports</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
