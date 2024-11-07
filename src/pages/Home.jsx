import React from 'react';
import Hero from '../components/Hero';
import CERTSection from '../components/CERTSection';
import FeaturedPapers from '../components/FeaturedPapers';
import Footer from '../components/Footer';
import { Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box as="main">
      <Hero />
      <CERTSection />
      <FeaturedPapers />
      <Footer />
    </Box>
  );
};

export default Home; 