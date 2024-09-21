import React, { useState } from 'react';
import MultiSelect from '../components/MultiSelect';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Select,
    CheckboxGroup,
    Checkbox,
    Stack,
    Heading,
    Center
  } from "@chakra-ui/react";
  import DatePicker from "react-datepicker";
  import "react-datepicker/dist/react-datepicker.css";

const Matching = () => {

    const [volunteer, setVolunteer] = useState("");
    const [event, setEvent] = useState("");

    var volunteers = [];
    var events = [];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(":D");
      };

    

    return (
        <Box p={6} maxW="600px" mx="auto">
            <Center><Heading mb={8}>Volunteer Matching</Heading></Center>
            <form onSubmit={handleSubmit}>

                {/* volunteers */}
                <FormControl isRequired mb={4}>
                    <FormLabel>Volunteers</FormLabel>
                    <Select
                        placeholder="First choose a volunteer"
                        options={volunteers}
                    >
                    </Select>
                </FormControl>

                {/* events */}
                <FormControl isRequired mb={4}>
                    <FormLabel>Matched Events</FormLabel>
                    <Select
                        placeholder="Then choose the best event"
                        options={events}
                    >
                    </Select>
                </FormControl>

                {/* Submit Button */}
                <Button colorScheme="blue" type="submit">
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default Matching
