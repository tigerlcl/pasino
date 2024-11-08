import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  Icon,
  Link,
  useColorMode,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from '@chakra-ui/react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import CoinIcon from '../components/CoinIcon';

const Profile = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'light' ? 'white' : 'gray.800';
  const textColor = colorMode === 'light' ? 'gray.600' : 'gray.300';
  const headingColor = colorMode === 'light' ? 'gray.700' : 'white';

  // TODO: Update stats from database
  const stats = [
    { label: 'Total Predictions', value: '15' },
    { label: 'Correct Predictions', value: '8' },
    { label: 'Success Rate', value: `${((8 / 15) * 100).toFixed(0)}%` },
    { label: 'DialCoins Balance', value: '245', icon: CoinIcon }
  ];

  const biddingHistory = [
    {
      paper: 'Attention is All You Need',
      prediction: 'Accept',
      credits: 100,
      result: 'Correct',
      date: '2024-02-15'
    },
    {
      paper: 'GPT-4: Language Models are Few-Shot Learners',
      prediction: 'Accept',
      credits: 150,
      result: 'Pending',
      date: '2024-02-10'
    }
  ];

  const createdCanvas = [
    {
      title: 'Exploring Quantum Computing',
      dateCreated: '2024-01-20',
      status: 'Published'
    },
    {
      title: 'Advancements in AI Ethics',
      dateCreated: '2024-02-05',
      status: 'Pending review'
    }
  ];

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={12} align="stretch">
        {/* Profile Header */}
        <Box textAlign="center">
          <Heading as="h1" size="xl" color={headingColor} mb={6}>
            Ti Cool
          </Heading>
          
          {/* Social Links */}
          <HStack justify="center" spacing={6}>
            <Link href="https://github.com" isExternal color={textColor}>
              <Icon as={FaGithub} w={6} h={6} />
            </Link>
            <Link href="https://twitter.com" isExternal color={textColor}>
              <Icon as={FaTwitter} w={6} h={6} />
            </Link>
          </HStack>
        </Box>

        {/* Stats Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          {stats.map((stat, index) => (
            <Box
              key={index}
              bg={bgColor}
              p={6}
              borderRadius="lg"
              boxShadow="sm"
            >
              <Stat>
                <StatLabel color={textColor}>{stat.label}</StatLabel>
                <StatNumber color={headingColor}>
                  <HStack spacing={2}>
                    {stat.icon && <stat.icon />}
                    <Text>{stat.value}</Text>
                  </HStack>
                </StatNumber>
              </Stat>
            </Box>
          ))}
        </SimpleGrid>

        {/* Bidding History */}
        <Box>
          <Heading as="h2" size="lg" color={headingColor} mb={6}>
            Bidding History
          </Heading>
          <Box
            bg={bgColor}
            borderRadius="lg"
            boxShadow="sm"
            overflow="hidden"
          >
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Paper</Th>
                  <Th>Prediction</Th>
                  <Th>Credits</Th>
                  <Th>Result</Th>
                  <Th>Date</Th>
                </Tr>
              </Thead>
              <Tbody>
                {biddingHistory.map((bid, index) => (
                  <Tr key={index}>
                    <Td color={textColor}>{bid.paper}</Td>
                    <Td color={textColor}>{bid.prediction}</Td>
                    <Td>
                      <HStack>
                        <CoinIcon />
                        <Text color={textColor}>{bid.credits}</Text>
                      </HStack>
                    </Td>
                    <Td
                      color={
                        bid.result === 'Correct'
                          ? 'green.500'
                          : bid.result === 'Incorrect'
                          ? 'red.500'
                          : 'yellow.500'
                      }
                    >
                      {bid.result}
                    </Td>
                    <Td color={textColor}>{bid.date}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>

        {/* Created Panvas */}
        <Box>
          <Heading as="h2" size="lg" color={headingColor} mb={6}>
            Published Panvas
          </Heading>
          <Box
            bg={bgColor}
            borderRadius="lg"
            boxShadow="sm"
            overflow="hidden"
          >
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Title</Th>
                  <Th>Date Created</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {createdCanvas.map((canvas, index) => (
                  <Tr key={index}>
                    <Td color={textColor}>{canvas.title}</Td>
                    <Td color={textColor}>{canvas.dateCreated}</Td>
                    <Td color={textColor}>{canvas.status}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default Profile; 