// src/components/HeroSection.js
import React from 'react';
import './sidebar.scss';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Welcome User</h1>
        <p className="hero__subtitle">Creating modern web experiences here or Staet new</p>
        <button className="hero__button">Shop Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
