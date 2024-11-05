import React, { useState } from 'react';
import '../styles/PaperArena.css';
import PaperBidCard from '../components/PaperBidCard';

const PaperArena = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Papers' },
    { id: 'cv', name: 'Computer Vision' },
    { id: 'nlp', name: 'Natural Language Processing' },
    { id: 'llm', name: 'Large Language Models' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'ai', name: 'Artificial Intelligence' }
  ];

  const papers = [
    {
      title: "Self-Attention Mechanisms in Vision Transformers",
      keywords: ["CV", "Deep Learning", "Transformers"],
      acceptCredits: 150,
      rejectCredits: 75,
      deadline: "2024-03-25",
      category: "cv",
      conference: "CVPR 2024"
    },
    {
      title: "Multilingual NLP in Low-Resource Languages",
      keywords: ["NLP", "Languages", "Deep Learning"],
      acceptCredits: 120,
      rejectCredits: 60,
      deadline: "2024-03-20",
      category: "nlp",
      conference: "ACL 2024"
    },
    {
      title: "GPT-5: Scaling Language Models Beyond Trillion Parameters",
      keywords: ["LLM", "NLP", "Scaling"],
      acceptCredits: 200,
      rejectCredits: 100,
      deadline: "2024-03-30",
      category: "llm",
      conference: "NeurIPS 2024"
    },
    {
      title: "Unsupervised Learning of Visual Features by Solving Jigsaw Puzzles",
      keywords: ["CV", "Deep Learning", "Unsupervised Learning"],
      acceptCredits: 180,
      rejectCredits: 90,
      deadline: "2024-04-05",
      category: "cv",
      conference: "ICCV 2024"
    },
    {
      title: "Language Models are Few-Shot Learners",
      keywords: ["LLM", "NLP", "Few-Shot Learning"],
      acceptCredits: 160,
      rejectCredits: 80,
      deadline: "2024-04-10",
      category: "llm",
      conference: "AAAI 2024"
    },
    {
      title: "Attention is All You Need",
      keywords: ["NLP", "Deep Learning", "Attention Mechanisms"],
      acceptCredits: 140,
      rejectCredits: 70,
      deadline: "2024-04-15",
      category: "nlp",
      conference: "ICML 2024"
    }
  ];

  const filteredPapers = selectedCategory === 'all' 
    ? papers 
    : papers.filter(paper => paper.category === selectedCategory);

  return (
    <div className="paper-arena">
      <div className="filter-sidebar">
        <h2>Categories</h2>
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="papers-grid">
        {filteredPapers.map((paper, index) => (
          <PaperBidCard key={index} {...paper} />
        ))}
      </div>
    </div>
  );
};

export default PaperArena; 