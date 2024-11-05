import React from 'react';
import Hero from '../components/Hero';
import CERTSection from '../components/CERTSection';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <CERTSection />
      <div className="disclaimer">
        <p>Prototype design, no commercial use. Love from DIAL</p>
      </div>
    </div>
  );
};

export default Home; 