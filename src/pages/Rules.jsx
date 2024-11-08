import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  VStack,
  HStack,
  useColorMode,
  Flex,
  SimpleGrid,
  Icon
} from '@chakra-ui/react';
import CoinIcon from '../components/CoinIcon';
import { FaEdit, FaSearch } from 'react-icons/fa';

const Rules = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? 'gray.800' : 'white';
  const textColor = colorMode === 'dark' ? 'white' : 'gray.800';
  const cardBg = colorMode === 'dark' ? 'whiteAlpha.100' : 'gray.50';

  const FlowchartStep = ({ number, title, description }) => (
    <Box
      p={6}
      bg={cardBg}
      borderRadius="lg"
      flex="1"
      minW="200px"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: 'translateY(-4px)',
        bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'gray.100'
      }}
    >
      <Box
        w="36px"
        h="36px"
        borderRadius="full"
        bg={colorMode === 'dark' ? 'purple.500' : 'purple.100'}
        color={colorMode === 'dark' ? 'white' : 'purple.500'}
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="lg"
        fontWeight="bold"
        mb={4}
      >
        {number}
      </Box>
      <Heading size="md" mb={2} color={textColor}>
        {title}
      </Heading>
      <Text color={textColor}>
        {description}
      </Text>
    </Box>
  );

  const participatorRules = {
    publisher: [
      {
        title: "Create Your Panvas",
        description: "Submit your paper details including title, abstract, conference name, and submission deadline."
      },
      {
        title: "Verification Process",
        description: "Admin team will verify your paper's authenticity and conference details within 24-48 hours."
      },
      {
        title: "Arena Release",
        description: "Once approved, your paper will be featured in the Paper Arena for community predictions."
      },
      {
        title: "Update Results",
        description: "After the conference decision, update the acceptance result to close predictions."
      }
    ],
    reviewer: [
      {
        title: "Browse Papers",
        description: "Explore various papers in the Arena filtered by research domains and conferences."
      },
      {
        title: "Analysis & Prediction",
        description: "Read paper details and make informed predictions about acceptance outcomes."
      },
      {
        title: "Place Bets",
        description: "Use your DialCoins to bet on paper outcomes. Higher risk means higher potential rewards."
      },
      {
        title: "Track Progress",
        description: "Monitor your predictions and earn rewards when results are announced."
      }
    ]
  };

  return (
    <Box bg={bgColor} color={textColor} minH="100vh">
      <Container maxW="container.xl" py={8}>
        <VStack spacing={12} align="stretch">
          <Heading
            as="h1"
            size="2xl"
            textAlign="center"
            mb={8}
          >
            How Panvas Works
          </Heading>
          
          {/* Flowchart Section */}
          <Box>
            <Heading as="h2" size="xl" mb={6}>
              Prediction Process
            </Heading>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              gap={4}
              align="center"
            >
              <FlowchartStep
                number="1"
                title="Browse Papers"
                description="Explore papers under review from various domains"
              />
              <FlowchartStep
                number="2"
                title="Place Prediction"
                description="Bet DialCoins on Accept/Reject outcome"
              />
              <FlowchartStep
                number="3"
                title="Wait Result"
                description="Paper review process completes and we will announce the result"
              />
              <FlowchartStep
                number="4"
                title="Earn Rewards"
                description="Win or lose DialCoins based on accuracy"
              />
            </Flex>
          </Box>

          {/* DialCoin Section */}
          <Box>
            <HStack spacing={2} mb={6}>
              <CoinIcon boxSize={6} />
              <Heading as="h2" size="xl">
                DialCoin System
              </Heading>
            </HStack>
            <Grid
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
              gap={6}
            >
              {[
                {
                  title: "What is DialCoin?",
                  description: "DialCoin is our virtual currency for paper prediction betting. Each new user starts with 100 DialCoins."
                },
                {
                  title: "How to Earn",
                  description: "Make accurate predictions to earn more DialCoins. The riskier the bet, the higher the potential reward."
                },
                {
                  title: "How to Spend",
                  description: "Place bets on paper outcomes. Different papers have different betting requirements."
                },
                {
                  title: "Rewards",
                  description: "Earn bonus DialCoins for prediction streaks and participating in special events."
                }
              ].map((card, index) => (
                <Box 
                  key={index}
                  p={6} 
                  bg={cardBg} 
                  borderRadius="lg"
                  transition="transform 0.2s, box-shadow 0.2s"
                  _hover={{
                    transform: 'translateY(-4px)',
                    bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'gray.100'
                  }}
                >
                  <Heading size="md" mb={4}>{card.title}</Heading>
                  <Text>{card.description}</Text>
                </Box>
              ))}
            </Grid>
          </Box>

          {/* Participator Rules Section */}
          <Box>
            <Heading as="h2" size="xl" mb={8}>
              Participator Rules
            </Heading>

            {/* Publisher Rules */}
            <Box mb={12}>
              <HStack mb={6} align="center">
                <Icon as={FaEdit} w={6} h={6} color="purple.500" />
                <Heading as="h3" size="lg">
                  As a Publisher
                </Heading>
              </HStack>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                {participatorRules.publisher.map((rule, index) => (
                  <Box
                    key={index}
                    p={6}
                    bg={cardBg}
                    borderRadius="lg"
                    transition="transform 0.2s, box-shadow 0.2s"
                    _hover={{
                      transform: 'translateY(-4px)',
                      boxShadow: 'lg',
                      bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'gray.100'
                    }}
                  >
                    <HStack mb={4}>
                      <Box
                        w="32px"
                        h="32px"
                        borderRadius="full"
                        bg={colorMode === 'dark' ? 'purple.500' : 'purple.100'}
                        color={colorMode === 'dark' ? 'white' : 'purple.500'}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="lg"
                        fontWeight="bold"
                      >
                        {index + 1}
                      </Box>
                      <Heading size="md">{rule.title}</Heading>
                    </HStack>
                    <Text>{rule.description}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            {/* Reviewer Rules */}
            <Box>
              <HStack mb={6} align="center">
                <Icon as={FaSearch} w={6} h={6} color="blue.500" />
                <Heading as="h3" size="lg">
                  As a Reviewer
                </Heading>
              </HStack>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                {participatorRules.reviewer.map((rule, index) => (
                  <Box
                    key={index}
                    p={6}
                    bg={cardBg}
                    borderRadius="lg"
                    transition="transform 0.2s, box-shadow 0.2s"
                    _hover={{
                      transform: 'translateY(-4px)',
                      boxShadow: 'lg',
                      bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'gray.100'
                    }}
                  >
                    <HStack mb={4}>
                      <Box
                        w="32px"
                        h="32px"
                        borderRadius="full"
                        bg={colorMode === 'dark' ? 'blue.500' : 'blue.100'}
                        color={colorMode === 'dark' ? 'white' : 'blue.500'}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="lg"
                        fontWeight="bold"
                      >
                        {index + 1}
                      </Box>
                      <Heading size="md">{rule.title}</Heading>
                    </HStack>
                    <Text>{rule.description}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Rules; 