import React, { useState } from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
  Box,
  Text,
} from '@chakra-ui/react';

const History = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [eventHistory, setEventHistory] = useState([]);

  const formBackground = useColorModeValue('gray.100', 'gray.700');

  const searchVolunteerHistory = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email) {
      setError('Please enter a valid email.');
      setIsLoading(false);
      return;
    }

    setError('');
    try {
      const response = await fetch('/api/users/history', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setEventHistory(data.eventHistory || []);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }

    setIsLoading(false);
  };

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Volunteer History</Heading>
        <form onSubmit={searchVolunteerHistory}>
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
