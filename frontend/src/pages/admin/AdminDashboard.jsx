import React from 'react';
import { ChakraProvider, Box, Flex, Heading, Button, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../components/AdminSidebar';

function AdminDashboard() {
  return (
    <ChakraProvider>
      <Box bg="gray.100" minH="100vh">
        {/* Sidebar */}
        <Flex>
          <AdminSidebar />

          {/* Main Page */}
          <Box ml="250px" flex="1" p="8">
            <Flex
              direction="column"
              align="center"
              justify="center"
              minH="70vh"
            >
              <Heading as="h2" size="2xl" textAlign="center" mb="4">
                Admin Dashboard
              </Heading>
            </Flex>
          </Box>
        </Flex>

        <Box as="footer" bg="teal.500" color="white" padding="4" textAlign="center">
          <Text>&copy; 2024 Non-Profit Organization. All rights reserved.</Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default AdminDashboard;
