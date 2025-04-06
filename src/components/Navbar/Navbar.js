import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleNavClick = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" onClick={() => handleNavClick('home')}>CalcExperts</Link>
      </div>
      
      <div className="navbar__hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={`navbar__links ${menuOpen ? 'active' : ''}`}>
        <li className={currentPage === 'home' ? 'active' : ''}>
          <Link to="/" onClick={() => handleNavClick('home')}>Home</Link>
        </li>
        <li className={currentPage === 'factorial' ? 'active' : ''}>
          <Link to="/factorial" onClick={() => handleNavClick('factorial')}>Factorial</Link>
        </li>
        <li className={currentPage === 'prime' ? 'active' : ''}>
          <Link to="/prime" onClick={() => handleNavClick('prime')}>Prime Check</Link>
        </li>
        <li className={currentPage === 'modulus' ? 'active' : ''}>
          <Link to="/modulus" onClick={() => handleNavClick('modulus')}>Modulus</Link>
        </li>
        <li className={currentPage === 'gcd' ? 'active' : ''}>
          <Link to="/gcd" onClick={() => handleNavClick('gcd')}>GCD</Link>
        </li>
        <li className={currentPage === 'about' ? 'active' : ''}>
          <Link to="/about" onClick={() => handleNavClick('about')}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
