import React, { useState } from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
  Text,
  Box
} from '@chakra-ui/react';
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Login = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" bg={useColorModeValue('gray.50', 'gray.800')}>
      <Box 
        width="100%" 
        maxW="400px" 
        p={8} 
        borderRadius="lg" 
        boxShadow="lg" 
        bg={formBackground}
      >
        <Heading mb={6} textAlign="center">Log In</Heading>
        
        <form onSubmit={handleSubmit}>
          <FormControl id="email" mb={3}>
            <Input
              placeholder="E-mail"
              type="email"
              variant="filled"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </FormControl>
          
          <FormControl id="password" mb={6}>
            <Input
              placeholder="Password"
              type="password"
              variant="filled"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </FormControl>
          
          <Button colorScheme="teal" width="full" mb={4} type="submit">
            Log In
          </Button>
        </form>

        <Text textAlign="center" mb={3}>
          or <ChakraLink as={RouterLink} to="/register" color="teal.500" fontWeight="bold">Create an Account</ChakraLink>
        </Text>
      </Box>
    </Flex>
  );
};

export default Login;
