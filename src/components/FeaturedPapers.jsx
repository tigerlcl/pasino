import React from 'react';
import {
  Box,
  Container,
  Heading,
  useColorMode,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import PaperBidCard from './PaperBidCard';
import { FaFileAlt } from 'react-icons/fa';

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const FeaturedPapers = () => {
  const { colorMode } = useColorMode();
  const sectionBg = colorMode === 'dark' ? 'gray.900' : 'gray.50';
  const headingColor = colorMode === 'dark' ? 'white' : 'gray.800';

  const featuredPapers = [
    {
      title: "Attention is All you Need",
      keywords: ["AI", "Machine Learning", "Natural Language Processing"],
      acceptCredits: 500,
      rejectCredits: 75,
      deadline: "2025-04-01",
      conference: "NeurIPS 2024",
      totalUsers: 200,
      totalCoins: 25000,
      result: "TBA"
    },
    {
      title: "Accurate structure prediction with AlphaFold 3",
      keywords: ["Biomolecular", "AlphaFold", "Structure"],
      acceptCredits: 100,
      rejectCredits: 75,
      deadline: "2025-04-15",
      conference: "Nature Biotechnology",
      totalUsers: 250,
      totalCoins: 30000,
      result: "TBA"
    },
    {
      title: "Deep Residual Learning for Image Recognition",
      keywords: ["Deep Learning", "Image Recognition", "ResNet"],
      acceptCredits: 200,
      rejectCredits: 10,
      deadline: "2025-05-01",
      conference: "CVPR 2024",
      totalUsers: 300,
      totalCoins: 40000,
      result: "TBA"
    }
  ];

  // Create a seamless infinite loop by duplicating the array multiple times
  const allPapers = [...featuredPapers, ...featuredPapers, ...featuredPapers, ...featuredPapers];

  return (
    <Box width="100%" py={20} bg={sectionBg} overflow="hidden">
      <Container maxW="container.xl">
        <HStack 
          justify="center" 
          mb={12} 
          spacing={3}
        >
          <Icon 
            as={FaFileAlt} 
            w={8} 
            h={8} 
            color={colorMode === 'dark' ? 'blue.200' : 'blue.500'} 
          />
          <Heading
            as="h2"
            size="xl"
            textAlign="center"
            color={headingColor}
          >
            Featured Papers
          </Heading>
        </HStack>
        
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '400px',
            overflowX: 'hidden',
            cursor: 'pointer',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'transparent',
              transition: 'background 0.3s ease',
              pointerEvents: 'none',
            },
            '&:hover::after': {
              background: colorMode === 'dark' 
                ? 'rgba(255, 255, 255, 0.05)' 
                : 'rgba(0, 0, 0, 0.02)',
            }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '2rem',
              position: 'absolute',
              animation: `${slideAnimation} 30s linear infinite`,
              transition: 'all 0.3s ease',
              '&:hover': {
                animationPlayState: 'paused',
                transform: 'scale(1.01)',
              }
            }}
          >
            {allPapers.map((paper, index) => (
              <Box
                key={index}
                sx={{
                  flex: '0 0 auto',
                  width: '400px',
                  transition: 'transform 0.3s ease',
                  _hover: {
                    transform: 'translateY(-4px)',
                  }
                }}
              >
                <PaperBidCard {...paper} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedPapers;