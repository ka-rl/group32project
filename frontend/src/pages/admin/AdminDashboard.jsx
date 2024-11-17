import React from 'react';
import { ChakraProvider, Box, Flex, Heading, Button, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

function AdminDashboard() {
  return (
    <ChakraProvider>
      <Box bg="gray.100" minH="100vh">\
        {/* sidebar */}
        <Flex>


        </Flex>

        {/* main page */}
        <Flex
          direction="column"
          align="center"
          justify="center"
          minH="70vh"
          padding="8"
        >
          <Heading as="h2" size="2xl" textAlign="center" mb="4">
            Admin Dashboard
          </Heading>
        </Flex>

        <Box as="footer" bg="teal.500" color="white" padding="4" textAlign="center">
          <Text>&copy; 2024 Non-Profit Organization. All rights reserved.</Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default AdminDashboard;
