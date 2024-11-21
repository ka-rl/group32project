import React from 'react';
import { ChakraProvider, Box, Flex, Heading, Text } from '@chakra-ui/react';
import AdminSidebar from '../../components/AdminSidebar';

function EventHistory() {
  return (
    <ChakraProvider>
      <Box bg="gray.100" minH="100vh">
        <Flex>
          {/* Sidebar */}
          <AdminSidebar />
          
          {/* Main Content */}
          <Box ml="250px" flex="1" p="8">
            <Flex
              direction="column"
              align="center"
              justify="center"
              minH="70vh"
            >
              <Heading as="h2" size="2xl" textAlign="center" mb="4">
                Event History
              </Heading>
              <Text fontSize="lg" color="gray.600">
                This is the Event History page. Start adding your content here.
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default EventHistory;
