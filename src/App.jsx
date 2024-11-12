import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Rules from './pages/Rules';
import PaperArena from './pages/PaperArena';
import Profile from './pages/Profile';
import FAQ from './pages/FAQ';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/arena" element={<PaperArena />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Analytics />
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App; 