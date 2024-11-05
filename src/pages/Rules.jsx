import React from 'react';
import '../styles/Rules.css';
import CoinIcon from '../components/CoinIcon';

const Rules = () => {
  return (
    <div className="rules-page">
      <h1>How Panvas Works</h1>
      
      <div className="flowchart-section">
        <h2>Prediction Process</h2>
        <div className="flowchart">
          <div className="flowchart-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Browse Papers</h3>
              <p>Explore papers under review from various domains</p>
            </div>
          </div>
          <div className="flowchart-arrow">→</div>
          <div className="flowchart-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Place Prediction</h3>
              <p>Bet DialCoins on Accept/Reject outcome</p>
            </div>
          </div>
          <div className="flowchart-arrow">→</div>
          <div className="flowchart-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Wait Result</h3>
              <p>Paper review process completes</p>
            </div>
          </div>
          <div className="flowchart-arrow">→</div>
          <div className="flowchart-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Earn Rewards</h3>
              <p>Win or lose DialCoins based on accuracy</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dialcoin-section">
        <h2><CoinIcon className="coin-icon" /> DialCoin System</h2>
        <div className="dialcoin-grid">
          <div className="dialcoin-card">
            <h3>What is DialCoin?</h3>
            <p>DialCoin is our virtual currency for paper prediction betting. Each new user starts with 1000 DialCoins.</p>
          </div>
          <div className="dialcoin-card">
            <h3>How to Earn</h3>
            <p>Make accurate predictions to earn more DialCoins. The riskier the bet, the higher the potential reward.</p>
          </div>
          <div className="dialcoin-card">
            <h3>How to Spend</h3>
            <p>Place bets on paper outcomes. Different papers have different betting requirements.</p>
          </div>
          <div className="dialcoin-card">
            <h3>Rewards</h3>
            <p>Earn bonus DialCoins for prediction streaks and participating in special events.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules; 