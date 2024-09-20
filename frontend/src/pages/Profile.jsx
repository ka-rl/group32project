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

const Profile = () => {

    const [fullName, setFullName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [skills, setSkills] = useState([]);
    const [preferences, setPreferences] = useState("");
    const [availability, setAvailability] = useState([]);

    const skillsOptions = [
        {value:"breathing",label:"Breathing"},
        {value:"walking",label:"Walking"},
    ];
    const stateOptions = ["Alabama", "California", "New York", "Texas", "Florida"];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(":D");
      };

    

    return (
        <Box p={6} maxW="600px" mx="auto">
            <Center><Heading mb={8}>Profile</Heading></Center>
            <form onSubmit={handleSubmit}>
            {/* Full Name */}
                <FormControl isRequired mb={4}>
                    <FormLabel>Full Name</FormLabel>
                    <Input
                        placeholder="Enter your full name"
                    />
                </FormControl>

                        {/* Address 1 */}
                <FormControl isRequired mb={4}>
                    <FormLabel>Address 1</FormLabel>
                    <Input
                        placeholder="Enter your address"
                    />
                </FormControl>

                {/* Address 2 */}
                <FormControl mb={4}>
                    <FormLabel>Address 2</FormLabel>
                    <Input
                        placeholder="Enter your address (optional)"
                    />
                </FormControl>

                {/* City */}
                <FormControl isRequired mb={4}>
                    <FormLabel>City</FormLabel>
                    <Input
                        placeholder="Enter your city"
                    />
                </FormControl>

                {/* State */}
                <FormControl isRequired mb={4}>
                    <FormLabel>State</FormLabel>
                    <Select
                        placeholder="Select your state"
                        options={stateOptions}
                    >
                    </Select>
                </FormControl>

                {/* Zip Code */}
                <FormControl isRequired mb={4}>
                    <FormLabel>Zip Code</FormLabel>
                    <Input
                        placeholder="Enter your zip code"
                    />
                </FormControl>

                {/* Skills - Multi Select */}
                <FormControl isRequired mb={4}>
                    <FormLabel>Skills</FormLabel>
                    <MultiSelect
                        options={skillsOptions}
                    />
                </FormControl>

                {/* Preferences */}
                <FormControl mb={4}>
                    <FormLabel>Preferences</FormLabel>
                    <Textarea
                        placeholder="Enter your preferences (optional)"
                    />
                </FormControl>

                {/* Availability - Date Picker */}
                <FormControl isRequired mb={4}>
                    <FormLabel>Availability</FormLabel>
                </FormControl>

                {/* Submit Button */}
                <Button colorScheme="blue" type="submit">
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default Profile
