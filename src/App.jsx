import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import Home from './pages/Home';
import Rules from './pages/Rules';
import PaperArena from './pages/PaperArena';
import Profile from './pages/Profile';
import FAQ from './pages/FAQ';
import Header from './components/Header';
import './styles/global.css';
import './styles/Hero.css';
import './styles/Rules.css';
import './styles/PaperArena.css';
import './styles/Profile.css';
import './styles/FAQ.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/arena" element={<PaperArena />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  );
}

export default App; 