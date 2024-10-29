
import React from 'react';
import { useState } from 'react'
import { useRegister } from '../hooks/useRegister'
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
  Text
} from '@chakra-ui/react';
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Register = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {register, error, isLoading} = useRegister();
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    await register(email, password)

  }

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
      >
        <Heading mb={6}>Register</Heading>
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
          <Button colorScheme="teal" mb={3} type='submit' disabled={isLoading}>
            Create Account
          </Button>
          {error && <div className="error">{error}</div>}
        </form>
        <Text>
            or <ChakraLink as={RouterLink} to="/login" color="blue">Log In</ChakraLink>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Register;
