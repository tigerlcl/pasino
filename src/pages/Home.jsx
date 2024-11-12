import React from 'react';
import Hero from '../components/Hero';
import CERTSection from '../components/CERTSection';
import FeaturedPapers from '../components/FeaturedPapers';
import { Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box as="main">
      <Hero />
      <CERTSection />
      <FeaturedPapers />
    </Box>
  );
};

export default Home; 