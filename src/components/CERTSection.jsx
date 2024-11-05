import React from 'react';
import '../styles/CERTSection.css';

const CERTSection = () => {
  const principles = [
    {
      title: "Community",
      description: "Connect with researchers worldwide in our prediction community",
      color: "#264653"
    },
    {
      title: "Entertainment",
      description: "Make paper predictions fun and engaging while earning credits",
      color: "#2A9D8F"
    },
    {
      title: "Research",
      description: "Stay updated with the latest research papers under review",
      color: "#E9C46A"
    },
    {
      title: "Training",
      description: "Improve your prediction skills through continuous participation",
      color: "#F4A261"
    }
  ];

  const featuredPapers = [
    {
      title: "Deep Learning in Computer Vision",
      keywords: ["AI", "Computer Vision", "Neural Networks"],
      acceptCredits: 100,
      rejectCredits: 50,
      deadline: "2024-03-15"
    },
    {
      title: "Quantum Computing Advances",
      keywords: ["Quantum", "Computing", "Physics"],
      acceptCredits: 120,
      rejectCredits: 60,
      deadline: "2024-03-20"
    }
  ];

  return (
    <div className="cert-section">
      <h2>Our Platform Principles</h2>
      <div className="principles-grid">
        {principles.map((principle, index) => (
          <div 
            key={index} 
            className="principle-card"
            style={{ backgroundColor: principle.color }}
          >
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </div>
        ))}
      </div>

      <div className="featured-polls">
        <h2>Featured Papers</h2>
        <div className="polls-container">
          {featuredPapers.map((paper, index) => (
            <div key={index} className="poll-card">
              <h3>{paper.title}</h3>
              <div className="keywords">
                {paper.keywords.map((keyword, kidx) => (
                  <span key={kidx}>{keyword}</span>
                ))}
              </div>
              <div className="bid-stats">
                <div className="accept-pool">
                  <button className="accept-btn">Accept</button>
                  <span>Credits: {paper.acceptCredits}</span>
                </div>
                <div className="reject-pool">
                  <button className="reject-btn">Reject</button>
                  <span>Credits: {paper.rejectCredits}</span>
                </div>
              </div>
              <div className="deadline">
                Deadline: {paper.deadline}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CERTSection; 