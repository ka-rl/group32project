
import React from 'react';
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
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

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin();
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
  }

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
      >
        <Heading mb={6}>Log In</Heading>
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
          <Input
            placeholder="Password"
            type="password"
            variant="filled"
            background="white"
            mb={6}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button colorScheme="teal" mb={3} type="submit" disabled={isLoading}>
            Log In
          </Button>
          {error && <div className="error">{error}</div>}
        </form>
        <Text>
            or <ChakraLink as={RouterLink} to="/register" color="blue">Create an Account</ChakraLink>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Login;
