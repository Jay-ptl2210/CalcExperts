import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <img src="path/to/your/photo.jpg" alt="Jay Patel" className="about-us__photo" />
      <p className="about-us__info">
        <strong>Name:</strong> Jay Patel
      </p>
      <p className="about-us__info">
        <strong>En_no:</strong> 202203103510313
      </p>
      <p className="about-us__info">
        <strong>Div:</strong> A
      </p>
      <p className="about-us__info">
        <strong>Mobile:</strong> +91 26256 12345
      </p>
      <p className="about-us__info">
        <strong>Email:</strong> <a href="mailto:jaydptl.22@gmail.com">jaydptl.22@gmail.com</a>
      </p>
      <p className="about-us__description">
        I am a B.Tech(IT) 6<sup>th</sup> sem Student at Chhotubhai Gopalbhai Patel Institute of Technology.
      </p>
      <p className="about-us__portfolio">
        <strong>Portfolio:</strong> <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">Visit my portfolio</a>
      </p>
    </div>
  );
};
export default AboutUs;
