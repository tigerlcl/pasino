import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Tag,
  HStack,
  Button,
  useColorMode
} from '@chakra-ui/react';
import CoinIcon from './CoinIcon';

const FeaturedPapers = () => {
  const { colorMode } = useColorMode();
  const sectionBg = colorMode === 'dark' ? 'gray.900' : 'gray.50';
  const bgColor = colorMode === 'dark' ? 'gray.800' : 'white';
  const textColor = colorMode === 'dark' ? 'gray.100' : 'gray.600';
  const headingColor = colorMode === 'dark' ? 'white' : 'gray.800';

  const featuredPapers = [
    {
      title: "Deep Learning in Computer Vision",
      keywords: ["AI", "Computer Vision", "Neural Networks"],
      acceptCredits: 100,
      rejectCredits: 50,
      deadline: "2024-03-15",
      conference: "CVPR 2024"
    },
    {
      title: "Quantum Computing Advances",
      keywords: ["Quantum", "Computing", "Physics"],
      acceptCredits: 120,
      rejectCredits: 60,
      deadline: "2024-03-20",
      conference: "Nature Physics"
    }
  ];

  return (
    <Box width="100%" py={20} bg={sectionBg}>
      <Container maxW="container.xl">
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          color={headingColor}
          mb={12}
        >
          Featured Papers
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {featuredPapers.map((paper, index) => (
            <Box
              key={index}
              bg={bgColor}
              p={6}
              borderRadius="xl"
              boxShadow="md"
              transition="transform 0.2s"
              _hover={{ transform: 'translateY(-4px)' }}
            >
              <VStack align="stretch" spacing={4}>
                <Heading as="h3" size="md" color={headingColor}>
                  {paper.title}
                </Heading>

                <Tag size="md" colorScheme="teal" alignSelf="flex-start">
                  {paper.conference}
                </Tag>

                <HStack wrap="wrap" spacing={2}>
                  {paper.keywords.map((keyword, idx) => (
                    <Tag key={idx} size="sm" colorScheme="gray">
                      {keyword}
                    </Tag>
                  ))}
                </HStack>

                <HStack spacing={4} width="100%" justify="space-between">
                  <HStack spacing={4}>
                    <Button colorScheme="green" size="sm">
                      Accept
                    </Button>
                    <HStack>
                      <CoinIcon />
                      <Text>{paper.acceptCredits}</Text>
                    </HStack>
                  </HStack>

                  <HStack spacing={4}>
                    <Button colorScheme="red" size="sm">
                      Reject
                    </Button>
                    <HStack>
                      <CoinIcon />
                      <Text>{paper.rejectCredits}</Text>
                    </HStack>
                  </HStack>
                </HStack>

                <Text fontSize="sm" color={textColor}>
                  Deadline: {paper.deadline}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default FeaturedPapers; 