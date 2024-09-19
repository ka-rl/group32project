
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
} from '@chakra-ui/react';

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
        <Button colorScheme="teal" mb={8}>
          Log In
        </Button>
      </Flex>
    </Flex>
  );
};

export default Login;
