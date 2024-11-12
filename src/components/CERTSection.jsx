import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Icon,
  useColorMode
} from '@chakra-ui/react';
import { FaLightbulb } from 'react-icons/fa';

const CERTSection = () => {
  const { colorMode } = useColorMode();
  const sectionBg = colorMode === 'light' ? 'gray.100' : 'gray.800';
  const bgColor = colorMode === 'light' ? 'white' : 'gray.700';
  const textColor = colorMode === 'light' ? 'gray.600' : 'gray.300';
  const headingColor = colorMode === 'light' ? 'gray.700' : 'white';

  const principles = [
    {
      title: "Community",
      description: "Connect with researchers worldwide in our prediction community",
      color: "#ef7c8e"
    },
    {
      title: "Entertainment",
      description: "Make paper predictions fun and engaging while earning credits",
      color: "#8e98f5"
    },
    {
      title: "Research",
      description: "Stay updated with the latest research papers under review",
      color: "#008585"
    },
    {
      title: "Training",
      description: "Train yourself with better acadamic sense on paper review ",
      color: "#d8a7b1"
    }
  ];

  return (
    <Box as="section" py={20} bg={sectionBg}>
      <Container maxW="container.xl">
        <HStack justify="center" mb={6}>
              <Icon as={FaLightbulb} w={8} h={8} color="yellow.400" />
          <Heading size="2xl">Our CERT Principles</Heading>
        </HStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {principles.map((principle, index) => (
            <Box
              key={index}
              bg={bgColor}
              p={6}
              borderRadius="xl"
              boxShadow="md"
              transition="transform 0.3s"
              _hover={{ transform: 'translateY(-5px)' }}
              borderTop={`4px solid ${principle.color}`} // Added color to the upper bound
            >
              <VStack align="start" spacing={4}>
                <Heading as="h3" size="md" color={principle.color}>
                  {principle.title}
                </Heading>
                <Text color={textColor}>
                  {principle.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CERTSection; 