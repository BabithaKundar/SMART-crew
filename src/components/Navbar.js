// src/components/NavBar.js
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { SearchContext } from '../context/SearchContext';
import './Navbar.css';

const NavBar = () => {
  const { setSearchQuery } = useContext(SearchContext);
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (localSearchQuery.trim()) {
      setSearchQuery(localSearchQuery); // Update global search query
      navigate('/menu'); // Redirect to menu page
    }
    setLocalSearchQuery('');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">HAPPY TUMMY</div>
      <form className="navbar-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search your cravings..."
          value={localSearchQuery}
          onChange={(e) => setLocalSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-icon">
          <FaSearch />
        </button>
      </form>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
