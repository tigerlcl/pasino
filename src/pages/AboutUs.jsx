import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  HStack,
  Avatar,
  useColorMode,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { 
  FaUsers, 
  FaLightbulb, 
  FaRocket, 
  FaChartLine,
  FaGlobeAsia,
  FaHandshake,
  FaMedal
} from 'react-icons/fa';


const AboutUs = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? 'gray.800' : 'white';
  const textColor = colorMode === 'dark' ? 'white' : 'gray.800';
  const sectionBg = colorMode === 'dark' ? 'gray.700' : 'gray.50';

  const teamMembers = [
    {
      name: "D",
      role: "Founder & Lead Researcher",
      avatar: "",
      description: "XXX"
    },
    {
      name: "IA",
      role: "Research Scientist",
      avatar: "",
      description: "XXX"
    },
    {
      name: "L",
      role: "Technical Lead",
      avatar: "",
      description: "XXX"
    }
  ];

  const roadmapItems = [
    {
      phase: "Phase 1: Launch (Q2 2024)",
      items: [
        "Submit Panvas vision paper and launch platform beta version",
        "Release initial version of DialCoin system",
        "Partner with top-tier CS conferences",
      ]
    },
    {
      phase: "Phase 2: Expansion (Q3-Q4 2024)",
      items: [
        "Expand to multiple research domains",
        "Introduce researcher reputation system",
        "Launch mobile application",
        "Implement advanced analytics dashboard"
      ]
    },
    {
      phase: "Phase 3: Innovation (2025)",
      items: [
        "Integrate AI-powered prediction assistance",
        "Launch cross-conference analytics",
        "Implement automated paper quality assessment",
        "Establish global academic partnerships"
      ]
    }
  ];

  return (
      <Box bg={bgColor} color={textColor} minH="100vh">
        <Container maxW="container.xl" py={20}>
          <VStack spacing={20}>
            {/* Vision Section */}
            <Box 
              textAlign="center" 
              w="full"
              transition="transform 0.5s ease"
              _hover={{ transform: 'translateY(-8px)' }}
            >
              <HStack justify="center" mb={6}>
                <Icon as={FaLightbulb} w={8} h={8} color="yellow.400" />
                <Heading size="2xl">Our Vision</Heading>
              </HStack>
              <Text fontSize="xl" maxW="800px" mx="auto" lineHeight="tall">
                To revolutionize academic peer review through the power of collective intelligence 
                and prediction markets. DIAL aims to create a more transparent, efficient, and 
                engaging academic publishing ecosystem where researchers can contribute to and 
                benefit from community wisdom.
              </Text>
            </Box>

            {/* Values Section */}
            <Box w="full">
              <HStack justify="center" mb={10}>
                <Icon as={FaHandshake} w={8} h={8} color="green.400" />
                <Heading size="xl">Our Values</Heading>
              </HStack>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {[
                  { 
                    icon: FaGlobeAsia, 
                    title: "Decentralized Intelligence", 
                    text: "Harnessing collective wisdom of the academic community" 
                  },
                  { 
                    icon: FaMedal, 
                    title: "Academic Excellence", 
                    text: "Promoting high-quality research through better predictions" 
                  },
                  { 
                    icon: FaRocket, 
                    title: "Innovation", 
                    text: "Pioneering new approaches to academic publishing" 
                  },
                  { 
                    icon: FaHandshake, 
                    title: "Community Trust", 
                    text: "Building a transparent and fair prediction ecosystem" 
                  }
                ].map((value, index) => (
                  <HStack
                    key={index}
                    bg={sectionBg}
                    p={6}
                    borderRadius="xl"
                    spacing={4}
                    transition="all 0.5s ease-in-out"
                    _hover={{ 
                      transform: 'translateY(-8px)',
                      boxShadow: 'xl'
                    }}
                  >
                    <Icon as={value.icon} w={10} h={10} color="purple.400" />
                    <Box>
                      <Heading size="md" mb={2}>{value.title}</Heading>
                      <Text>{value.text}</Text>
                    </Box>
                  </HStack>
                ))}
              </SimpleGrid>
            </Box>

            {/* Team Section */}
            <Box w="full">
              <HStack justify="center" mb={10}>
                <Icon as={FaUsers} w={8} h={8} color="blue.400" />
                <Heading size="xl">Our Team</Heading>
              </HStack>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                {teamMembers.map((member, index) => (
                  <Box
                    key={index}
                    bg={sectionBg}
                    p={6}
                    borderRadius="xl"
                    textAlign="center"
                    transition="all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{ 
                      transform: 'translateY(-8px)',
                      boxShadow: 'xl'
                    }}
                  >
                    <Avatar size="xl" src={member.avatar} mb={4} />
                    <Heading size="md" mb={2}>{member.name}</Heading>
                    <Text color="blue.400" mb={4}>{member.role}</Text>
                    <Text>{member.description}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            {/* Roadmap Section */}
            <Box w="full">
              <HStack justify="center" mb={10}>
                <Icon as={FaChartLine} w={8} h={8} color="purple.400" />
                <Heading size="xl">Roadmap</Heading>
              </HStack>
              <VStack spacing={8} align="stretch">
                {roadmapItems.map((phase, index) => (
                  <Box
                    key={index}
                    bg={sectionBg}
                    p={6}
                    borderRadius="xl"
                    transition="all 0.5s ease"
                    _hover={{ 
                      transform: 'translateX(8px)',
                      boxShadow: 'lg'
                    }}
                  >
                    <Heading size="md" mb={4} color="purple.400">
                      {phase.phase}
                    </Heading>
                    <List spacing={3}>
                      {phase.items.map((item, itemIndex) => (
                        <ListItem 
                          key={itemIndex}
                          transition="transform 0.4s ease"
                          _hover={{ transform: 'translateX(4px)' }}
                        >
                          <ListIcon as={FaRocket} color="green.400" />
                          {item}
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ))}
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
  );
};

export default AboutUs; 