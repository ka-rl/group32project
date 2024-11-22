import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import MultiSelect from '../components/SkillSelect';
import { useAuthContext } from '../hooks/useAuthContext';
import { useEventCreation } from '../hooks/useEventCreation';
import { useNavigate } from 'react-router-dom';
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
  const [eventName, setEventName] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const { user } = useAuthContext()
  const {createEvent, error, isLoading} = useEventCreation();

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createEvent(eventName, eventDescription, eventLocation, selectedDate)
    //doesn't work gotta configure the schema or whatever
  }


  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
      >
        <Heading mb={6}>Event Management</Heading>

        <form onSubmit={handleSubmit}>
          <FormControl isRequired mb={3}>
            <FormLabel>Event Name</FormLabel>
            <Input
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Enter event name..."
                type="text"
                variant="filled"
                background="white"
                value={eventName}
            />
          </FormControl>

        <FormControl isRequired mb={3}>
          <FormLabel>Event Description</FormLabel>
          <Textarea
            placeholder="Enter event description..."
            variant="filled"
            background="white"
            onChange={(e)=>setEventDescription(e.target.value)}
            value={eventDescription}
          />
          </FormControl>

          <FormControl isRequired mb={3}>
            <FormLabel>Event Location</FormLabel>
            <Textarea
              placeholder="Enter event location..."
              variant="filled"
              background="white"
              onChange={(e)=>setEventLocation(e.target.value)}
              value={eventLocation}
            />
          </FormControl>
          
          <FormControl isRequired mb={4}>
            <FormLabel>Skills</FormLabel>
            <MultiSelect
            value={selectedSkills}
            onChange={(selected) => setSelectedSkills(selected)}
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

          <Button colorScheme="teal" mb={6} type="submit">
            Save
          </Button>
      </form> 

      </Flex>
    </Flex>
  );
};
 
export default Event;