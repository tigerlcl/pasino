import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      textAlign="center"
      py={8}
      bg="gray.50"
      color="gray.600"
      _dark={{
        bg: 'gray.800',
        color: 'gray.400'
      }}
    >
      <Text fontSize="sm">
        Prototype design, no commercial use. Love from DIAL ❤️
      </Text>
    </Box>
  );
};

export default Footer; 