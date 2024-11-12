import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Link,
  Stack,
  Text,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useColorMode,
  useDisclosure,
  HStack
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgGradient = colorMode === 'dark' 
    ? 'linear(to-r, purple.900, blue.900)'
    : 'linear(to-r, purple.100, blue.100)';
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Rules', path: '/rules' },
    { name: 'Paper Arena', path: '/arena' },
    { name: 'My Profile', path: '/profile' },
    { name: 'FAQ', path: '/faq' }
  ];

  return (
    <Box
      as="header"
      bgGradient={bgGradient}
      px={4}
      position="sticky"
      top={0}
      zIndex={100}
      width="100%"
    >
      <Flex
        h={16}
        maxW="container.xl"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link
          as={RouterLink}
          to="/"
          _hover={{ textDecoration: 'none' }}
          height="100%"
          display="flex"
          alignItems="center"
        >
          <Text
            fontSize="2xl"
            fontWeight="bold"
            bgGradient={colorMode === 'dark' 
              ? "linear(to-r, purple.200, blue.200)"
              : "linear(to-r, purple.500, blue.500)"
            }
            bgClip="text"
            fontFamily="'Space Grotesk', sans-serif"
            letterSpacing="wide"
          >
            Panvas
          </Text>
        </Link>

        {/* Desktop Navigation */}
        <HStack spacing={1} height="100%" alignItems="center" bg={colorMode === 'dark' ? 'whiteAlpha.100' : 'whiteAlpha.300'} borderRadius="lg">
          <Stack
            as="nav"
            direction="row"
            spacing={1}
            display={{ base: 'none', md: 'flex' }}
            height="100%"
            alignItems="center"
            bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
            borderRadius="lg"
          >
            {menuItems.map((item) => (
              <Link
                key={item.path}
                as={RouterLink}
                to={item.path}
                px={4}
                py={2}
                rounded="md"
                _hover={{
                  textDecoration: 'none',
                  bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'whiteAlpha.500',
                  boxShadow: 'md'
                }}
                color={colorMode === 'dark' ? 'white' : 'gray.800'}
                fontWeight="medium"
                height="75%"
                display="flex"
                alignItems="center"
              >
                {item.name}
              </Link>
            ))}
          </Stack>

          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            size="md"
            variant="ghost"
            color={colorMode === 'dark' ? 'white' : 'gray.800'}
            _hover={{
              bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'whiteAlpha.500'
            }}
            mx={2}
          />
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="ghost"
          color={colorMode === 'dark' ? 'white' : 'gray.800'}
          _hover={{
            bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'whiteAlpha.500'
          }}
        />

        {/* Mobile Navigation Drawer */}
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent bgGradient={bgGradient}>
            <DrawerCloseButton color={colorMode === 'dark' ? 'white' : 'gray.800'} />
            <DrawerHeader>
              <Text
                bgGradient={colorMode === 'dark' 
                  ? "linear(to-r, purple.200, blue.200)"
                  : "linear(to-r, purple.500, blue.500)"
                }
                bgClip="text"
                fontSize="2xl"
                fontWeight="bold"
              >
                Menu
              </Text>
            </DrawerHeader>

            <DrawerBody>
              <VStack spacing={4} align="stretch" mt={4}>
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    as={RouterLink}
                    to={item.path}
                    px={3}
                    py={2}
                    rounded="md"
                    _hover={{
                      textDecoration: 'none',
                      bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'whiteAlpha.500',
                    }}
                    color={colorMode === 'dark' ? 'white' : 'gray.800'}
                    fontWeight="medium"
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Header; 