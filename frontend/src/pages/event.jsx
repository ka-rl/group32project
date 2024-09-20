import React from 'react';
import DatePicker from 'react-datepicker';
import { MultiSelect } from 'chakra-multiselect'
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
} from '@chakra-ui/react';
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const event = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  const [selectedDate, setSelectedDate] = useState(null);

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
          mb={6}
        />
        <Textarea
          placeholder="Location"
          variant="filled"
          background="white"
          mb={3}
        />
        <MultiSelect
          name="skills"
          options={[
            {value: "lifting", label: "Heavy Lifting"},
            {value: "leadership", label: "Leadership Experience"},
            {value: "coding", label: "Coding Knowledge"},
            {value: "english", label: "Fluent in English"},
          ]} 
          placeholder="Select Skills"
          className="skills"
          classNamePrefix="select"
        />
        <Select placeholder='Select Urgency' mb={3}>
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </Select>
        <DatePicker
          selected={selectedDate}
          onchange={(date) => setSelectedDate(date)}
          dateFormat="MM/dd/yyyy"
          placeholder="Select Date"
        />
        <Button colorScheme="teal" mb={3}>
          Save
        </Button>
      </Flex>
    </Flex>
  );
};
 
export default event;
