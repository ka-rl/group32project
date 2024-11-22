import React, { useState } from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const History = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Background color depending on color mode
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  const searchVolunteerHistory = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email) {
      setError('Please enter a valid email.');
      setIsLoading(false);
      return;
    }
    setError('');
    //Code to call mongoDB query goes here, incomplete
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
          {error && <div className="error" style={{ color: 'red' }}>{error}</div>}
        </form>
      </Flex>
    </Flex>
  );
};

export default History;
