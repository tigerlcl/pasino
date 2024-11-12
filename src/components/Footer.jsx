import React from 'react';
import { Box, Text, useColorMode, VStack, Link, Icon } from '@chakra-ui/react';
import { FaHeart, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const { colorMode } = useColorMode();
  const bgGradient = colorMode === 'dark' 
    ? 'linear(to-r, purple.900, blue.900)'
    : 'linear(to-r, purple.100, blue.100)';

  return (
    <Box
      as="footer"
      textAlign="center"
      py={8}
      bgGradient={bgGradient}
    >
      <Text 
        fontSize="sm"
        bgGradient={colorMode === 'dark' 
          ? "linear(to-r, purple.200, blue.200)"
          : "linear(to-r, purple.500, blue.500)"
        }
        bgClip="text"
        fontWeight="medium"
      >
        <VStack spacing={2} justify="center">
          <Text>
            Prototype design, no commercial use.
            <Icon as={FaHeart} color="red.500" />
          </Text>
          <Text>
            Explore more projects at <Link href="https://github.com/HKUSTDial" target="_blank" rel="noopener noreferrer">HKUSTDial <Icon as={FaGithub} color={colorMode === 'dark' ? 'white' : 'gray.800'} /></Link>!
          </Text>
        </VStack>
      </Text>
    </Box>
  );
};

export default Footer; 