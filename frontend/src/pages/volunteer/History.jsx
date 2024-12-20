// History.jsx
import React, { useState } from 'react';
import { useSearchVolunteerHistory } from '../../hooks/useSearchVolunteerHistory'; // Import the custom hook
import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
  Box,
  Text,
} from '@chakra-ui/react';
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const History = () => {
  const [email, setEmail] = useState('');
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  const { searchVolunteerHistory, eventHistory, error, isLoading } = useSearchVolunteerHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await searchVolunteerHistory(email); // Call the hook function to search history
  };

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex flexDirection="column" bg={formBackground} p={12} borderRadius={8} boxShadow="lg">
        <Heading mb={6}>Volunteer History</Heading>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="E-mail"
            type="email"
            variant="filled"
            background="white"
            mb={3}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Button colorScheme="teal" mb={3} type="submit" isLoading={isLoading}>
            Search Volunteer History
          </Button>
          {error && (
            <Text color="red.500" mb={3}>
              {error}
            </Text>
          )}
        </form>

        {eventHistory.length > 0 && (
          <Box mt={6}>
            <Heading size="md" mb={3}>
              Event History:
            </Heading>
            <ul>
              {eventHistory.map((event, index) => (
                <li key={index}>
                  <Text>- {event}</Text>
                </li>
              ))}
            </ul>
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export default History;
