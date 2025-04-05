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
    if (isPrime(num)) {
      setResult(`${num} is a prime number.`);
    } else {
      setResult(`${num} is not a prime number.`);
    }
  };

  return (
    <div className="check-prime">
      <h1>Check Prime Number</h1>
      <p>Enter a number to check if it's prime:</p>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(e.target.value)} 
      />
      <button onClick={checkPrime}>Check Prime</button>
      <p>{result}</p>
      <p>A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.</p>
    </div>
  );
};

export default CheckPrime;
