import React from 'react';
import '../styles/Profile.css';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import CoinIcon from '../components/CoinIcon';

const Profile = () => {
  const userInfo = {
    name: "Tiger Co",
    joinDate: "2024-01-15",
    dialCoinBalance: 1500,
    socialLinks: {
      github: "https://github.com/tigerlcl",
      twitter: "https://twitter.com/elonmusk",
    },
    biddingHistory: [
      {
        paperTitle: "Self-Attention Mechanisms in Vision Transformers",
        prediction: "Accept",
        amount: 100,
        result: "Won",
        date: "2024-02-20"
      },
      {
        paperTitle: "Multilingual NLP in Low-Resource Languages",
        prediction: "Reject",
        amount: 50,
        result: "Lost",
        date: "2024-03-10"
      }
      // Add more history entries...
    ]
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>{userInfo.name}</h1>
        <div className="profile-stats">
          <div className="stat-item">
            <span>Joined</span>
            <p>{userInfo.joinDate}</p>
          </div>
          <div className="stat-item">
            <span><CoinIcon className="coin-icon" /> DialCoin Balance</span>
            <p>{userInfo.dialCoinBalance}</p>
          </div>
        </div>
        <div className="social-links">
          <a href={userInfo.socialLinks.github}><FaGithub /></a>
          <a href={userInfo.socialLinks.twitter}><FaTwitter /></a>
        </div>
      </div>

      <div className="bidding-history">
        <h2>Bidding History</h2>
        <table>
          <thead>
            <tr>
              <th>Paper Title</th>
              <th>Prediction</th>
              <th>Amount</th>
              <th>Result</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {userInfo.biddingHistory.map((bid, index) => (
              <tr key={index}>
                <td>{bid.paperTitle}</td>
                <td>{bid.prediction}</td>
                <td><CoinIcon className="coin-icon" /> {bid.amount}</td>
                <td className={bid.result.toLowerCase()}>{bid.result}</td>
                <td>{bid.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile; 