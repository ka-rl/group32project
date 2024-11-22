import React from 'react';
import { ChakraProvider, Box, Flex, Heading, Text } from '@chakra-ui/react';
import AdminSidebar from '../../components/AdminSidebar';

function AdminDashboard() {
  return (
    <ChakraProvider>
      <Flex direction="column" minH="100vh" bg="gray.100">
        {/* Sidebar and Main Content */}
        <Flex flex="1">
          {/* Sidebar */}
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

        {/* Footer */}
        <Box as="footer" bg="teal.500" color="white" p="4" textAlign="center">
          <Text>&copy; 2024 Non-Profit Organization. All rights reserved.</Text>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default AdminDashboard;
