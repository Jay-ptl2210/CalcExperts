import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to CalcExperts</h1>
      <p className="home__intro">Explore CalcExperts to find various mathematical features!</p>
      <p className="home__description">
        CalcExperts is your go-to tool for performing mathematical operations effortlessly. 
        You can easily <strong>calculate factorials</strong> of numbers, <strong>check if a number is prime</strong>, 
        <strong>compute the modulus</strong>, and even <strong>find the greatest common divisor (GCD)</strong> with just a few clicks. 
        Whether you're a student, a professional, or someone who loves math, our user-friendly interface makes 
        it simple and efficient to perform these calculations. Dive in and discover how easy math can be!
      </p>
    </div>
  );
};

export default Home;
