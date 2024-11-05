import React from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: "What is Panvas?",
      answer: "Panvas (Paper + Canvas) is a research-oriented platform where users can predict the acceptance outcomes of academic papers under review. It combines academic insight with engaging prediction mechanics."
    },
    {
      question: "How do DialCoins work?",
      answer: "DialCoins are our platform's virtual currency, represented by our mascot goose. New users start with 1000 DialCoins. You can spend them to predict paper outcomes and earn more by making accurate predictions."
    },
    {
      question: "How are rewards calculated?",
      answer: "Rewards are calculated based on prediction accuracy and the risk level. Higher-risk predictions (those with lower consensus) offer higher potential rewards. The exact multiplier depends on the paper's characteristics and community predictions."
    },
    {
      question: "Can I participate without being a researcher?",
      answer: "Yes! While research experience helps, anyone interested in academic papers can participate. The platform is designed to be accessible to all while promoting learning about research trends."
    },
    {
      question: "How are papers selected for prediction?",
      answer: "Papers are carefully curated from major conferences and journals under review. We focus on maintaining diversity across different research domains like CV, NLP, ML, etc."
    },
    {
      question: "Is my prediction data private?",
      answer: "Yes, individual prediction data is private. Only aggregated statistics are shown publicly to maintain prediction integrity and prevent bias."
    },
    {
      question: "How to redeem DialCoins?",
      answer: "We're excited to announce our upcoming gift card redemption system! Soon you'll be able to exchange your DialCoins for various rewards including Amazon gift cards, conference registration vouchers, and exclusive academic resources. Stay tuned for the official launch!"
    }
  ];

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-card">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 