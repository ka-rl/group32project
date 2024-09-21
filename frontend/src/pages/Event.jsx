import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import MultiSelect from '../components/MultiSelect';
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
  Textarea,
  Select,
  ChakraProvider,
  extendTheme,
  Box
} from '@chakra-ui/react';
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Event = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]); // State to manage selected values

  const skillOptions = [
    { label: 'React', value: 'react', bg: "white"},
    { label: 'Node.js', value: 'node'},
    { label: 'JavaScript', value: 'javascript'},
    { label: 'Python', value: 'python'},
    { label: 'CSS', value: 'css'},
  ];

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
      >
        <Heading mb={6}>Event Management</Heading>

        <FormControl isRequired mb={3}>
          <FormLabel>Event Name</FormLabel>
          <Input
              
              placeholder="Event Name"
              type="text"
              variant="filled"
              background="white"
          />
        </FormControl>

      <FormControl isRequired mb={3}>
        <FormLabel>Event Description</FormLabel>
        <Textarea
          placeholder="Event Description"
          variant="filled"
          background="white"
        />
        </FormControl>

        <FormControl isRequired mb={3}>
          <FormLabel>Event Location</FormLabel>
          <Textarea
            placeholder="Event Location"
            variant="filled"
            background="white"
          />
        </FormControl>
         
        <FormControl isRequired mb={4}>
          <FormLabel>Skills</FormLabel>
          <MultiSelect
            options={skillOptions}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Event Urgency</FormLabel>
          <Select bg="white" placeholder='Select Urgency' mb={3}>
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
          </Select>
        </FormControl>

      <FormControl mb={3}>
        <FormLabel>Event Date</FormLabel>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MM/dd/yyyy"
          placeholderText="Select Date"
          />
        </FormControl>

         <Button colorScheme="teal" mb={6}>
          Save
        </Button>

      </Flex>
    </Flex>
  );
};
 
export default Event;
