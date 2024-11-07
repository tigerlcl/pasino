import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
  useColorMode
} from '@chakra-ui/react';

const Hero = () => {
  const { colorMode } = useColorMode();
  const bgGradient = colorMode === 'dark' 
    ? 'linear(to-r, purple.900, blue.900)'
    : 'linear(to-r, purple.100, blue.100)';
  const textColor = colorMode === 'dark' ? 'white' : 'gray.800';
  const boxBg = colorMode === 'dark' ? 'whiteAlpha.50' : 'blackAlpha.50';

  return (
    <Box
      as="section"
      position="relative"
      bgGradient={bgGradient}
      color={textColor}
    >
      <Container maxW="container.xl" py={8}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: 6, md: 16 }}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            flex={1}
            maxW="350px"
            bg={boxBg}
            borderRadius="2xl"
            p={6}
            backdropFilter="blur(10px)" 
          >
            <Image
              src="/web_icon.png"
              alt="Data Research"
              width="100%"
              height="auto"
              objectFit="contain"
              maxH="250px"
            />
          </Box>

          <Stack flex={1} spacing={4}>
            <Heading
              as="h1"
              size="2xl"
              fontWeight="bold"
              bgGradient={colorMode === 'dark' 
                ? "linear(to-r, purple.200, blue.200)"
                : "linear(to-r, purple.500, blue.500)"
              }
              bgClip="text"
              textShadow="none"
            >
              Welcome to Panvas
            </Heading>
            <Text fontSize="xl" color={textColor}>
              Where Research Meets Prediction
            </Text>
            <Text fontSize="lg" color={textColor}>
              Predict paper acceptance outcomes, earn credits, and join the academic community
            </Text>
            <Box mt={4}>
              <Text fontWeight="bold">Panvas = Paper + Canvas</Text>
              <Text>
                A canvas where researchers come together to predict and discuss academic paper outcomes, 
                creating a collaborative space for research insight.
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero; 