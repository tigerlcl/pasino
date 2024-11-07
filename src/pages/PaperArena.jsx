import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  VStack,
  Heading,
  Button,
  useColorMode,
  SimpleGrid
} from '@chakra-ui/react';
import PaperBidCard from '../components/PaperBidCard';

const PaperArena = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'light' ? 'white' : 'gray.800';
  const textColor = colorMode === 'light' ? 'gray.700' : 'white';

  const categories = [
    { id: 'all', name: 'All Papers' },
    { id: 'cv', name: 'CV' },
    { id: 'nlp', name: 'NLP' },
    { id: 'llm', name: 'LLM' },
    { id: 'ml', name: 'ML' },
    { id: 'ai', name: 'AI' }
  ];

  const papers = [
    {
      title: "Self-Attention Mechanisms in Vision Transformers",
      keywords: ["CV", "Deep Learning", "Transformers"],
      acceptCredits: 150,
      rejectCredits: 75,
      deadline: "2024-11-10",
      category: "cv",
      conference: "CVPR 2024",
      totalUsers: 1200,
      totalCoins: 50000,
      result: "TBA"
    },
    {
      title: "Multilingual NLP in Low-Resource Languages",
      keywords: ["NLP", "Languages", "Deep Learning"],
      acceptCredits: 120,
      rejectCredits: 60,
      deadline: "2023-11-15",
      category: "nlp",
      conference: "ACL 2024",
      totalUsers: 800,
      totalCoins: 30000,
      result: "Reject"
    },
    {
      title: "GPT-5: Scaling Language Models Beyond Trillion Parameters",
      keywords: ["LLM", "NLP", "Scaling"],
      acceptCredits: 200,
      rejectCredits: 100,
      deadline: "2023-11-20",
      category: "llm",
      conference: "NeurIPS 2024",
      totalUsers: 1500,
      totalCoins: 70000,
      result: "Accept"
    },
    {
      title: "Unsupervised Learning of Visual Features by Solving Jigsaw Puzzles",
      keywords: ["CV", "Deep Learning", "Unsupervised Learning"],
      acceptCredits: 180,
      rejectCredits: 90,
      deadline: "2023-11-25",
      category: "cv",
      conference: "ICCV 2023",
      totalUsers: 1100,
      totalCoins: 45000,
      result: "TBA"
    },
    {
      title: "Language Models are Few-Shot Learners",
      keywords: ["LLM", "NLP", "Few-Shot Learning"],
      acceptCredits: 160,
      rejectCredits: 80,
      deadline: "2024-11-30",
      category: "llm",
      conference: "AAAI 2024",
      totalUsers: 1300,
      totalCoins: 60000,
      result: "TBA"
    },
    {
      title: "Attention is All You Need",
      keywords: ["NLP", "Deep Learning", "Attention Mechanisms"],
      acceptCredits: 140,
      rejectCredits: 70,
      deadline: "2024-12-05",
      category: "nlp",
      conference: "ICML 2024",
      totalUsers: 900,
      totalCoins: 35000,
      result: "TBA"
    }
  ];

  const filteredPapers = papers.filter(paper => 
    selectedCategory === 'all' || paper.category === selectedCategory
  );

  return (
    <Container maxW="container.xl" py={8}>
      <Grid
        templateColumns={{ base: "1fr", md: "250px 1fr" }}
        gap={8}
      >
        {/* Sidebar */}
        <Box
          bg={bgColor}
          p={6}
          borderRadius="lg"
          boxShadow="sm"
          position="sticky"
          top="80px"
          height="fit-content"
        >
          <VStack align="stretch" spacing={4}>
            <Heading as="h2" size="md" color={textColor}>
              Categories
            </Heading>
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "solid" : "ghost"}
                colorScheme="teal"
                justifyContent="flex-start"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </VStack>
        </Box>

        {/* Papers Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={6}
        >
          {filteredPapers.map((paper, index) => (
            <PaperBidCard key={index} {...paper} />
          ))}
        </SimpleGrid>
      </Grid>
    </Container>
  );
};

export default PaperArena;