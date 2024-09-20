import React from 'react';
import { ChakraProvider, Box, Flex, Heading, Button, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function LandingPage() {
  return (
    <ChakraProvider>
      <Box bg="gray.100" minH="100vh">
        <Navbar />

        <Flex
          direction="column"
          align="center"
          justify="center"
          minH="70vh"
          padding="8"
        >
          <Heading as="h2" size="2xl" textAlign="center" mb="4">
            Empowering Communities, Transforming Lives
          </Heading>
          <Text fontSize="xl" textAlign="center" mb="8">
            Our mission is to support underserved communities with education, healthcare, and
            sustainable development projects.
          </Text>
          <Button as={Link} to="/register" colorScheme="teal" size="lg" mb="4">
            Join Us
          </Button>
          <Image
            src="https://students.1fbusa.com/hubfs/25%20Ways%20to%20Volunteer%20in%20Your%20Community.jpg"
            alt="Empowering communities"
            borderRadius="md"
          />
        </Flex>

        <Box as="footer" bg="teal.500" color="white" padding="4" textAlign="center">
          <Text>&copy; 2024 Non-Profit Organization. All rights reserved.</Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default LandingPage;
