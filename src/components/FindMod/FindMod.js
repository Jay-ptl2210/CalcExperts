import React, { useState } from 'react';
import './FindMod.css';

const FindMod = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');

  const calculateMod = () => {
    const numA = parseInt(a);
    const numB = parseInt(b);
    
    if (isNaN(numA) || isNaN(numB)) {
      setResult('Please enter valid numbers');
      return;
    }
    
    if (numB === 0) {
      setResult('Cannot divide by zero');
      return;
    }
    
    setResult(`${numA} % ${numB} = ${numA % numB}`);
  };

  return (
    <div className="find-mod">
      <h2>Find Modulus</h2>
      
      <p className="find-mod__instruction">Enter two numbers to find the modulus (a % b):</p>
      
      <div className="find-mod__input-container">
        <input 
          type="number" 
          className="find-mod__input"
          placeholder="Enter a"
          value={a} 
          onChange={(e) => setA(e.target.value)} 
        />
        
        <input 
          type="number" 
          className="find-mod__input"
          placeholder="Enter b"
          value={b} 
          onChange={(e) => setB(e.target.value)} 
        />
        
        <button 
          className="find-mod__button" 
          onClick={calculateMod}
        >
          Calculate Mod
        </button>
      </div>
      
      {result && (
        <div className="find-mod__result">
          {result}
        </div>
      )}
      
      <p className="find-mod__info">
        The modulus is the remainder when dividing one number by another.
      </p>
    </div>
  );
};

export default FindMod;
