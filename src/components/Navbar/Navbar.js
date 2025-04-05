import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setCurrentPage }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => setCurrentPage('home')}>CalcExperts</div>
      <ul className="nav-links">
        <li onClick={() => setCurrentPage('home')}>Home</li>
        <li
          className="services"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          Services
          {dropdown && (
            <ul className="dropdown">
              <li onClick={() => setCurrentPage('checkPrime')}>Check Prime</li>
              <li onClick={() => setCurrentPage('findMod')}>Find Mod</li>
              <li onClick={() => setCurrentPage('findFactorial')}>Find Factorial</li>
              <li onClick={()=>  setCurrentPage('findGCD')}>Find GCD</li>
            </ul>
          )}
        </li>
        <li onClick={() => setCurrentPage('aboutUs')}>About Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
