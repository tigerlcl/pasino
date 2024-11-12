import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  Tag,
  useColorMode,
  Icon,
  Flex
} from '@chakra-ui/react';
import { FaCrown, FaUsers, FaCoins } from 'react-icons/fa';
import CoinIcon from './CoinIcon';

const PaperBidCard = ({ title, keywords, acceptCredits, rejectCredits, deadline, conference, totalUsers, totalCoins, result }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'light' ? 'white' : 'gray.700';
  const textColor = colorMode === 'light' ? 'gray.700' : 'white';
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const deadlineDate = new Date(deadline);
      const timeDifference = deadlineDate - now;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeLeft('Finished');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  const isFinished = timeLeft === 'Finished';
  const winner = result === 'TBA' ? 'TBA' : result === 'Accept' ? 'Accept' : 'Reject';

  // Calculate reward rates
  const totalCredits = acceptCredits + rejectCredits;
  const acceptRate = (totalCredits / acceptCredits).toFixed(1);
  const rejectRate = (totalCredits / rejectCredits).toFixed(1);

  return (
    <Box
      bg={bgColor}
      p={6}
      borderRadius="xl"
      boxShadow="md"
      transition="transform 0.2s"
      _hover={{ transform: 'translateY(-4px)' }}
    >
      <VStack align="stretch" spacing={4}>
        <Heading as="h3" size="md" color={textColor}>
          {title}
        </Heading>

        <Tag size="md" colorScheme="teal" alignSelf="flex-start">
          {conference}
        </Tag>

        <HStack wrap="wrap" spacing={2}>
          {keywords.map((keyword, index) => (
            <Tag key={index} size="sm" colorScheme="gray">
              {keyword}
            </Tag>
          ))}
        </HStack>

        <HStack spacing={4}>
          <HStack>
            <Icon as={FaUsers} />
            <Text fontSize="sm" color={textColor}>
              {totalUsers.toLocaleString()}
            </Text>
          </HStack>
          <HStack>
            <Icon as={FaCoins} />
            <Text fontSize="sm" color={textColor}>
              {totalCoins.toLocaleString()}
            </Text>
          </HStack>
        </HStack>

        <Box width="100%">
          <Flex justify="center" gap={8}>
            <VStack spacing={1}>
              <Button colorScheme="green" size="sm" width="80px">
                Accept {isFinished && winner === 'Accept' && <Icon as={FaCrown} ml={2} />}
              </Button>
              <HStack>
                <CoinIcon />
                <Text>x{acceptRate}</Text>
              </HStack>
            </VStack>

            <VStack spacing={1}>
              <Button colorScheme="red" size="sm" width="80px">
                Reject {isFinished && winner === 'Reject' && <Icon as={FaCrown} ml={2} />}
              </Button>
              <HStack>
                <CoinIcon />
                <Text>x{rejectRate}</Text>
              </HStack>
            </VStack>
          </Flex>
        </Box>

        <Text fontSize="sm" color={textColor}>
          Deadline: {deadline}
        </Text>
        <Text fontSize="sm" color={textColor}>
          {isFinished ? '' : `Time Left: ${timeLeft}`}
        </Text>
      </VStack>
    </Box>
  );
};

export default PaperBidCard; 