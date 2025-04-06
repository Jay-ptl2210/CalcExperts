import React, { useState } from 'react';
import './FindGCD.css';
import Footer from '../Footer/Footer';

const FindGCD = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');

  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  const calculateGCD = () => {
    const numA = parseInt(a);
    const numB = parseInt(b);
    
    if (isNaN(numA) || isNaN(numB)) {
      setResult('Please enter valid numbers');
      return;
    }
    
    const result = gcd(Math.abs(numA), Math.abs(numB));
    setResult(`GCD of ${numA} and ${numB} is ${result}`);
  };

  return (
    <div className="find-gcd">
      <h2>Find GCD</h2>
      
      <p className="find-gcd__instruction">Enter two numbers to find their greatest common divisor:</p>
      
      <div className="find-gcd__input-container">
        <input 
          type="number" 
          className="find-gcd__input"
          placeholder="Enter first number"
          value={a} 
          onChange={(e) => setA(e.target.value)} 
        />
        
        <input 
          type="number" 
          className="find-gcd__input"
          placeholder="Enter second number"
          value={b} 
          onChange={(e) => setB(e.target.value)} 
        />
        
        <button 
          className="find-gcd__button" 
          onClick={calculateGCD}
        >
          Calculate GCD
        </button>
      </div>
      
      {result && (
        <div className="find-gcd__result">
          {result}
        </div>
      )}
      
      <p className="find-gcd__info">
        The greatest common divisor (GCD) is the largest positive integer that divides each of the given integers without a remainder.
      </p>
      
      {/* Remove this copyright notice as it's already in the Footer */}
      
      {/* <Footer /> */}
    </div>
  );
};

export default FindGCD;
