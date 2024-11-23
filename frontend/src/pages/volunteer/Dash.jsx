import React from 'react';
import { ChakraProvider, Box, Flex, Heading, Button, Text, Image, Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Dash() {
  return (
    <ChakraProvider>
      <Box bg="gray.100" minH="100vh">
        {/* <Navbar /> */}

        <Flex
          direction="column"
          align="center"
          justify="center"
          minH="70vh"
          padding="8"
        >
          <Heading as="h2" size="2xl" textAlign="center" mb="4">
            Volunteer Dashboard
          </Heading>
          <Text fontSize="xl" textAlign="center" mb="8">
            Manage your profile, receive notifications, and learn more about events that could use your help.
          </Text>
          
          <Flex
            direction="row"
            align="center"
            justify="center"
          >
            {/* Left Section: Image and Email */}
            <Flex direction="column" align="center">
              <Image
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="Profile picture"
                borderRadius="md"
                boxSize="20%"
                mb="4"
              />
              
              <Text fontSize="xl" textAlign="center">
                Example@Email.com
              </Text>
            </Flex>

            {/* Right Section: Notifications */}
            <Box
              bg="white"
              borderRadius="md"
              boxShadow="md"
              padding="6"
              width="30%"
              textAlign="center"
            >
              <Heading as="h4" size="md" mb="4">
                Notifications
              </Heading>
              <Text>Find notifications as they appear here.</Text>
              
              {/* Link to Volunteer History */}
              <ChakraLink as={RouterLink} to="/history" color="blue" mt="4" display="block">
                See Volunteer History
              </ChakraLink>
            </Box>
          </Flex>
        </Flex>

        <Box as="footer" bg="teal.500" color="white" padding="4" textAlign="center">
          <Text>&copy; 2024 Non-Profit Organization. All rights reserved.</Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Dash;
