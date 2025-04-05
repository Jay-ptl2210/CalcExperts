import React, { useState } from 'react';
import './FindGCD.css'; 

const FindGCD = () => {
  const [num1, setNum1] = useState('0');
  const [num2, setNum2] = useState('0');
  const [result, setResult] = useState('0');

  const calculateGCD = (a, b) => {
    if (b === 0) return a;
    return calculateGCD(b, a % b);
  };

  const findGCD = () => {
    const a = parseInt(num1);
    const b = parseInt(num2);
    if (!isNaN(a) && !isNaN(b)) {
      const gcd = calculateGCD(a, b);
      setResult(`GCD of ${a} and ${b} is: ${gcd}.`);
    } else {
      setResult('Please enter valid numbers.');
    }
  };

  return (
    <div className="gcd-calculator">
      <h1>GCD Calculator</h1>
      <p>Enter two numbers to find their GCD:</p>
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
        placeholder="Number 1"
      />
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
        placeholder="Number 2"
      />
      <button onClick={findGCD}>Calculate GCD</button>
      <p>{result}</p>
      <p>The greatest common divisor (GCD) is the largest positive integer that divides each of the integers without a remainder.</p>
    </div>
  );
};
export default FindGCD;
