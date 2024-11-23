import React, { useState } from 'react';
import { useRegister } from '../../hooks/useRegister';
import {
  Flex,
  Heading,
  Input,
  Button,
  Text,
  Select,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import MultiSelect from '../../components/SkillSelect';

const Register = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const skills = 'none';
  const [preferences, setPreferences] = useState('');
  const [availability, setAvailability] = useState('');
  
  const { register, error, isLoading } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    console.log(firstName, lastName, email, password, location, preferences, availability, skills);
    await register(firstName, lastName, email, password, location, preferences, availability, skills);
  };

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
            placeholder="First Name"
            type="text"
            variant="filled"
            background="white"
            mb={3}
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <Input
            placeholder="Last Name"
            type="text"
            variant="filled"
            background="white"
            mb={3}
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
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
            mb={3}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Input
            placeholder="Location"
            type="text"
            variant="filled"
            background="white"
            mb={3}
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
          <Select
            placeholder="Preference"
            variant="filled"
            background="white"
            mb={3}
            onChange={(e) => setPreferences(e.target.value)}
            value={preferences}
          >
            <option value="pref1">1</option>
            <option value="pref2">2</option>
            <option value="pref3">3</option>
          </Select>
          <MultiSelect />
          <Select
            placeholder="Availability"
            variant="filled"
            background="white"
            mt={3}
            mb={3}
            onChange={(e) => setAvailability(e.target.value)}
            value={availability}
          >
            <option value="availability1">1</option>
            <option value="availability2">2</option>
            <option value="availability3">3</option>
          </Select>
          <Button colorScheme="teal" mt={1} mb={3} type="submit">
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
