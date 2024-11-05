import React from 'react';
import CoinIcon from './CoinIcon';

const PaperBidCard = ({ title, keywords, acceptCredits, rejectCredits, deadline, conference }) => {
  return (
    <div className="bid-card">
      <h3>{title}</h3>
      <div className="conference-tag">{conference}</div>
      <div className="keywords">
        {keywords.map((keyword, index) => (
          <span key={index}>{keyword}</span>
        ))}
      </div>
      <div className="bid-stats">
        <div className="accept-pool">
          <button className="accept-btn">Accept</button>
          <span><CoinIcon /> {acceptCredits}</span>
        </div>
        <div className="reject-pool">
          <button className="reject-btn">Reject</button>
          <span><CoinIcon /> {rejectCredits}</span>
        </div>
      </div>
      <div className="deadline">
        Deadline: {deadline}
      </div>
    </div>
  );
};

export default PaperBidCard; 