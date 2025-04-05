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
      <h1>Find Factorial</h1>
      <p>Enter a number to find its factorial:</p>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(e.target.value)} 
      />
      <button onClick={calculateFactorial}>Find Factorial</button>
      <p>Factorial of  {number} is: {result}</p>

      <p>The factorial of a number is the product of all integers from 1 to that number.</p>
    </div>
  );
};

export default FindFactorial;
