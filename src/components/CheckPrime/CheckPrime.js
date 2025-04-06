import React, { useState } from 'react';
import './CheckPrime.css';

const CheckPrime = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const checkPrime = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult('Please enter a valid number.');
      return;
    }
    if (isPrime(num)) {
      setResult(`${num} is a prime number.`);
    } else {
      setResult(`${num} is not a prime number.`);
    }
  };

  // In your CheckPrime.js file
  return (
    <div className="check-prime">
      <h2>Check Prime Number</h2>
      
      <p className="check-prime__instruction">Enter a number to check if it's prime:</p>
      
      <div className="check-prime__form">
        <div className="check-prime__input-container">
          <input 
            type="number" 
            className="check-prime__input"
            placeholder="Enter a number"
            value={number} 
            onChange={(e) => setNumber(e.target.value)} 
          />
          
          <button 
            className="check-prime__button" 
            onClick={checkPrime}
          >
            Check Prime
          </button>
        </div>
        
        {result && (
          <div className="check-prime__result">
            {result}
          </div>
        )}
        
        <div className="check-prime__info">
          <p>A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.</p>
        </div>
      </div>
    </div>
  );
};

export default CheckPrime;
