import React from 'react';
import './LoadingScreen.css'; // Ensure this path matches where you place your CSS

const LoadingScreen = () => {
  return (
    <div className="loading">
      <h1 className="loading-title">Loading</h1>
      <div className="loading-progress"></div>
    </div>
  );
};

export default LoadingScreen;
