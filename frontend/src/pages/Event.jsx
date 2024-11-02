import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import MultiSelect from '../components/SkillSelect';
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
} from '@chakra-ui/react';

const Event = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  // State for each input field
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [urgency, setUrgency] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);

  // Save event data to backend
  const handleSave = async () => {
    const eventData = {
      name: eventName,
      description: eventDescription,
      location: eventLocation,
      skills: selectedSkills,
      urgency: urgency,
      date: selectedDate,
    };

    try {
      const response = await fetch("http://localhost:3000/api/event/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Event saved successfully!");
      } else {
        alert(data.error || "Failed to save event.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving the event.");
    }
  };

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        rounded={6}
      >
        <Heading mb={6}>Event Management</Heading>

        <FormControl isRequired mb={3}>
          <FormLabel>Event Name</FormLabel>
          <Input
            placeholder="Enter event name..."
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            variant="filled"
            background="white"
          />
        </FormControl>

        <FormControl isRequired mb={3}>
          <FormLabel>Event Description</FormLabel>
          <Textarea
            placeholder="Enter event description..."
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            variant="filled"
            background="white"
          />
        </FormControl>

        <FormControl isRequired mb={3}>
          <FormLabel>Event Location</FormLabel>
          <Textarea
            placeholder="Enter event location..."
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            variant="filled"
            background="white"
          />
        </FormControl>
         
        <FormControl isRequired mb={4}>
          <FormLabel>Skills</FormLabel>
          <MultiSelect
            selectedSkills={selectedSkills}
            setSelectedSkills={setSelectedSkills}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Event Urgency</FormLabel>
          <Select
            bg="white"
            placeholder="Select Urgency"
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
            mb={3}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
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

        <Button colorScheme="teal" mb={6} onClick={handleSave}>
          Save
        </Button>
      </Flex>
    </Flex>
  );
};

export default Event;
