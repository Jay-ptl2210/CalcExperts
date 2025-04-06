import React, { useState } from 'react';
import './FindFactorial.css';

const FindFactorial = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  };

  const calculateFactorial = () => {
    const num = parseInt(number);
    setResult(factorial(num));
  };

  return (
    <div className="find-factorial">
      <h2>Find Factorial</h2>
      
      <p className="find-factorial__instruction">Enter a number to find its factorial:</p>
      
      <div className="find-factorial__input-container">
        <input 
          type="number" 
          className="find-factorial__input"
          placeholder="Enter a number"
          value={number} 
          onChange={(e) => setNumber(e.target.value)} 
        />
        
        <button 
          className="find-factorial__button" 
          onClick={calculateFactorial}
        >
          Calculate
        </button>
      </div>
      
      {result && (
        <div className="find-factorial__result">
          Result: {result}
        </div>
      )}
      
      <p className="find-factorial__info">
        The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
      </p>
    </div>
  );
};

export default FindFactorial;
