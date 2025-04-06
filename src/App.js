import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import FindFactorial from './components/FindFactorial/FindFactorial';
import CheckPrime from './components/CheckPrime/CheckPrime';
import FindMod from './components/FindMod/FindMod';
import FindGCD from './components/FindGCD/FindGCD';
import AboutUs from './components/About/AboutUs';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  // Set document title
  useEffect(() => {
    document.title = "CalcExpert";
  }, []);
  
  // Reset to home page on refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.history.pushState({}, '', '/');
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/factorial" element={<FindFactorial />} />
            <Route path="/prime" element={<CheckPrime />} />
            <Route path="/modulus" element={<FindMod />} />
            <Route path="/gcd" element={<FindGCD />} />
            <Route path="/about" element={<AboutUs />} />
            {/* Redirect all unknown paths to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
