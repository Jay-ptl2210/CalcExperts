import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import CheckPrime from './components/CheckPrime/CheckPrime';
import FindMod from './components/FindMod/FindMod';
import FindFactorial from './components/FindFactorial/FindFactorial';
import FindGCD from './components/FindGCD/FindGCD'; // Import FindGCD
import AboutUs from './components/About/AboutUs';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'checkPrime':
        return <CheckPrime />;
      case 'findMod':
        return <FindMod />;
      case 'findFactorial':
        return <FindFactorial />;
      case 'findGCD': // Added case for FindGCD
        return <FindGCD />;
      case 'aboutUs':
        return <AboutUs />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} />
      <div className="content">{renderPage()}</div>
    </div>
  );
}

export default App;
