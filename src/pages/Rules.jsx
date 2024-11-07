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
  Flex
} from '@chakra-ui/react';
import CoinIcon from '../components/CoinIcon';

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
              <Text fontSize="xl" px={2}>→</Text>
              <FlowchartStep
                number="2"
                title="Place Prediction"
                description="Bet DialCoins on Accept/Reject outcome"
              />
              <Text fontSize="xl" px={2}>→</Text>
              <FlowchartStep
                number="3"
                title="Wait Result"
                description="Paper review process completes"
              />
              <Text fontSize="xl" px={2}>→</Text>
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
                  description: "DialCoin is our virtual currency for paper prediction betting. Each new user starts with 1000 DialCoins."
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
        </VStack>
      </Container>
    </Box>
  );
};

export default Rules; 