import React from 'react';

const CoinIcon = ({ className }) => {
  return (
    <img 
      src="/goose.png" 
      alt="DialCoin" 
      className={`coin-icon ${className || ''}`}
      style={{ width: '20px', height: '20px', verticalAlign: 'middle' }}
    />
  );
};

export default CoinIcon; 