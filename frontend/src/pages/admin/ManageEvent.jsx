import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Input,
  Textarea,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useToast,
} from '@chakra-ui/react';
import AdminSidebar from '../../components/AdminSidebar';

function ManageEvent() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    location: '',
    skills: '',
  });
  const toast = useToast();

  // Add new event
  const addEvent = () => {
    if (!newEvent.name || !newEvent.date || !newEvent.location || !newEvent.skills) {
      toast({
        title: 'Error',
        description: 'All fields are required!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setEvents([...events, { ...newEvent, id: Date.now() }]);
    setNewEvent({ name: '', date: '', location: '', skills: '' }); // Clear form
    toast({
      title: 'Success',
      description: 'Event added successfully!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  // Remove event
  const removeEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
    toast({
      title: 'Event removed',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  // Update event (placeholder for future functionality)
  const updateEvent = (id) => {
    toast({
      title: 'Edit Event',
      description: `Edit functionality can be added here for Event ID: ${id}`,
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider>
      <Box bg="gray.100" minH="100vh">
        <Flex direction="column" minH="100vh">
          <Flex flex="1">
            {/* Sidebar */}
            <AdminSidebar />

            {/* Main Content */}
            <Box ml="250px" flex="1" p="8">
              <Flex direction="column" align="center" justify="center" minH="70vh">
                <Heading as="h2" size="2xl" textAlign="center" mb="6">
                  Manage Events
                </Heading>

                {/* Add New Event Form */}
                <VStack spacing="4" mb="8" align="stretch" w="100%" maxW="600px">
                  <Heading as="h4" size="md">
                    Add New Event
                  </Heading>
                  <Input
                    placeholder="Event Name"
                    value={newEvent.name}
                    onChange={(e) =>
                      setNewEvent((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                  <Input
                    placeholder="Event Date (e.g., 2024-12-31)"
                    type="date"
                    value={newEvent.date}
                    onChange={(e) =>
                      setNewEvent((prev) => ({ ...prev, date: e.target.value }))
                    }
                  />
                  <Input
                    placeholder="Location"
                    value={newEvent.location}
                    onChange={(e) =>
                      setNewEvent((prev) => ({ ...prev, location: e.target.value }))
                    }
                  />
                  <Textarea
                    placeholder="Skills Required/Preferred (e.g., Communication, Time Management)"
                    value={newEvent.skills}
                    onChange={(e) =>
                      setNewEvent((prev) => ({ ...prev, skills: e.target.value }))
                    }
                  />
                  <Button colorScheme="teal" onClick={addEvent}>
                    Add Event
                  </Button>
                </VStack>

                {/* Events Table */}
                <Heading as="h4" size="md" mb="4">
                  Existing Events
                </Heading>
                {events.length > 0 ? (
                  <Table variant="striped" colorScheme="teal" maxW="800px">
                    <Thead>
                      <Tr>
                        <Th>Event Name</Th>
                        <Th>Date</Th>
                        <Th>Location</Th>
                        <Th>Skills Required</Th>
                        <Th>Actions</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {events.map((event) => (
                        <Tr key={event.id}>
                          <Td>{event.name}</Td>
                          <Td>{event.date}</Td>
                          <Td>{event.location}</Td>
                          <Td>{event.skills}</Td>
                          <Td>
                            <HStack spacing="2">
                              <Button
                                colorScheme="yellow"
                                size="sm"
                                onClick={() => updateEvent(event.id)}
                              >
                                Edit
                              </Button>
                              <Button
                                colorScheme="red"
                                size="sm"
                                onClick={() => removeEvent(event.id)}
                              >
                                Delete
                              </Button>
                            </HStack>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                ) : (
                  <Text>No events added yet.</Text>
                )}
              </Flex>
            </Box>
          </Flex>

          {/* Footer */}
          <Box as="footer" bg="teal.500" color="white" padding="4" textAlign="center">
            <Text>&copy; 2024 Non-Profit Organization. All rights reserved.</Text>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default ManageEvent;
