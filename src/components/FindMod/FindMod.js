import React, { useState } from 'react';
import './FindMod.css';

const FindMod = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');

  const calculateMod = () => {
    setResult(a % b);
  };

  return (
    <div className="find-mod">
      <h1>Find Modulus</h1>
      <p>Enter two numbers to find the modulus (a % b):</p>
      <input 
        type="number" 
        value={a} 
        onChange={(e) => setA(e.target.value)} 
        placeholder="Enter a" 
      />
      <input 
        type="number" 
        value={b} 
        onChange={(e) => setB(e.target.value)} 
        placeholder="Enter b" 
      />
      <button onClick={calculateMod}>Calculate Mod</button>
      <p className>{a} mod  {b} is: {result}</p>

      <p>The modulus is the remainder when dividing one number by another.</p>
    </div>
  );
};

export default FindMod;
