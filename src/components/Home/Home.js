import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <h1 className="home__title">Welcome to CalcExperts</h1>
        <p className="home__subtitle">Explore CalcExperts to find various mathematical features!</p>
        <p className="home__description">
          CalcExperts is your go-to tool for performing mathematical operations effortlessly. You can easily <span className="home__highlight">calculate factorials</span> of numbers, <span className="home__highlight">check if a number is prime</span>, <span className="home__highlight">compute the modulus</span>, and even <span className="home__highlight">find the greatest common divisor (GCD)</span> with just a few clicks. Whether you're a student, a professional, or someone who loves math, our user-friendly interface makes it simple and efficient to perform these calculations. Dive in and discover how easy math can be!
        </p>
      </div>
    </div>
  );
};

export default Home;
