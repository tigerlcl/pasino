import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  useColorMode
} from '@chakra-ui/react';

const FAQ = () => {
  const { colorMode } = useColorMode();
  const headingColor = colorMode === 'light' ? 'gray.700' : 'white';
  const cardBg = colorMode === 'light' ? 'white' : 'gray.700';
  const textColor = colorMode === 'light' ? 'gray.600' : 'gray.300';
  const questionColor = colorMode === 'light' ? 'teal.600' : 'teal.200';

  const faqItems = [
    {
      question: "What is Panvas?",
      answer: "Panvas is a platform where researchers can predict and discuss academic paper outcomes."
    },
    {
      question: "How do DialCoins work?",
      answer: "DialCoins are our platform's virtual currency, represented by our mascot goose. New users start with 1000 DialCoins. You can spend them to predict paper outcomes and earn more by making accurate predictions."
    },
    {
      question: "How are rewards calculated?",
      answer: "Rewards are calculated based on prediction accuracy and the risk level. Higher-risk predictions (those with lower consensus) offer higher potential rewards. The exact multiplier depends on the paper's characteristics and community predictions."
    },
    {
      question: "Can I participate without being a researcher?",
      answer: "Yes! While research experience helps, anyone interested in academic papers can participate. The platform is designed to be accessible to all while promoting learning about research trends."
    },
    {
      question: "How are papers selected for prediction?",
      answer: "Papers are carefully curated from major conferences and journals under review. We focus on maintaining diversity across different research domains like CV, NLP, ML, etc."
    },
    {
      question: "Is my prediction data private?",
      answer: "Yes, individual prediction data is private. Only aggregated statistics are shown publicly to maintain prediction integrity and prevent bias."
    },
    {
      question: "How to redeem DialCoins?",
      answer: "We're excited to announce our upcoming gift card redemption system! Soon you'll be able to exchange your DialCoins for various rewards including Amazon gift cards, conference registration vouchers, and exclusive academic resources. Stay tuned for the official launch!"
    }
  ];

  return (
    <Box
      as="section"
      py={20}
      minH="calc(100vh - 80px)"
    >
      <Container maxW="container.xl">
        <Heading
          as="h1"
          mb={16}
          textAlign="center"
          color={headingColor}
        >
          Frequently Asked Questions
        </Heading>
        
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={8}
          width="100%"
        >
          {faqItems.map((item, index) => (
            <Box
              key={index}
              bg={cardBg}
              p={8}
              borderRadius="xl"
              boxShadow="md"
              transition="transform 0.3s"
              _hover={{ transform: 'translateY(-5px)' }}
            >
              <VStack align="start" spacing={4}>
                <Heading
                  as="h3"
                  size="md"
                  color={questionColor}
                >
                  {item.question}
                </Heading>
                <Text color={textColor}>
                  {item.answer}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default FAQ; 