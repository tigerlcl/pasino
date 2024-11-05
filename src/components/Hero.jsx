import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-image">
          <img src="/web_icon.png" alt="Data Research" />
        </div>
        <div className="hero-text">
          <h1>Welcome to Panvas</h1>
          <p className="tagline">Where Research Meets Prediction</p>
          <div className="hero-description">
            Predict paper acceptance outcomes, earn credits, and join the academic community
          </div>
          <div className="name-explanation">
            <strong>Panvas = Paper + Canvas</strong>
            <br />
            A canvas where researchers come together to predict and discuss academic paper outcomes, creating a collaborative space for research insight.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 