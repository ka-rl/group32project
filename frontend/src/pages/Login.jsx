
import React from 'react';
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

const Login = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
      >
        <Heading mb={6}>Log In</Heading>
        <Input
          placeholder="E-mail"
          type="email"
          variant="filled"
          background="white"
          mb={3}
        />
        <Input
          placeholder="Password"
          type="password"
          variant="filled"
          background="white"
          mb={6}
        />
        <Button colorScheme="teal" mb={3}>
          Log In
        </Button>
        <Text>
            or <ChakraLink as={RouterLink} to="/register" color="blue">Create an Account</ChakraLink>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Login;