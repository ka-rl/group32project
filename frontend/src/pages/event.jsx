import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from 'chakra-multiselect';
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
        <Input
          placeholder="Event Name"
          type="text"
          variant="filled"
          background="white"
          mb={3}
        />
        <Textarea
          placeholder="Event Description"
          variant="filled"
          background="white"
          mb={3}
        />
         <Textarea
          placeholder="Event Location"
          variant="filled"
          background="white"
          mb={3}
        />
        
        <Box mb={3} zIndex={999} bg="white">
  <MultiSelect
    bg="white"
    options={skillOptions}
    value={selectedSkills}
    onChange={setSelectedSkills}
    placeholder="Required Skills"
    isMulti
    styles={{
      control: (provided) => ({
        ...provided,
        backgroundColor: "white",  // Ensure the input area has a white background
        zIndex: 9999,
      }),
      menu: (provided) => ({
        ...provided,
        backgroundColor: "white",  // Set dropdown menu background to white
        zIndex: 9999,
      }),
      option: (provided) => ({
        ...provided,
        backgroundColor: "white",  // Ensure each option has a solid white background
      }),
      multiValue: (provided) => ({
        ...provided,
        backgroundColor: "white",  // Set selected option background to white
      }),
      dropdownIndicator: (provided) => ({
        ...provided,
        backgroundColor: "white", // Ensure the dropdown arrow has a background
      }),
    }}
  />
</Box>

        
         <Select bg="white" placeholder='Select Urgency' mb={3}>
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </Select>

      <Box mb={3}>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MM/dd/yyyy"
          placeholderText="Select Date"
          />
        </Box>


         <Button colorScheme="teal" mb={6}>
          Save
        </Button>
      </Flex>
    </Flex>
  );
};
 
export default Event;
