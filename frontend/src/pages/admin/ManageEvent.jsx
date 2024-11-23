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
  Spinner,
} from '@chakra-ui/react';
import AdminSidebar from '../../components/AdminSidebar';
import { useEventCreation } from '../../hooks/useEventCreation'; // Import the hook

function ManageEvent() {
  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    location: '',
    description: '',
  });
  const { createEvent, error, isLoading } = useEventCreation(); // Using the event creation hook
  const [events, setEvents] = useState([]); // Events list state
  const toast = useToast();

  // Add new event
  const addEvent = async () => {
    if (!newEvent.name || !newEvent.date || !newEvent.location || !newEvent.description) {
      toast({
        title: 'Error',
        description: 'All fields are required!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      // Call the createEvent function from the hook
      const createdEvent = await createEvent(newEvent.name, newEvent.description, newEvent.location, newEvent.date);

      if (createdEvent) {
        // If the event is successfully created, update the events list
        setEvents((prevEvents) => [...prevEvents, createdEvent]);
        setNewEvent({ name: '', date: '', location: '', description: '' }); // Clear form

        toast({
          title: 'Event Created',
          description: 'The event has been created successfully!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong while creating the event.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
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
                    placeholder="Description"
                    value={newEvent.description}
                    onChange={(e) =>
                      setNewEvent((prev) => ({ ...prev, description: e.target.value }))
                    }
                  />
                  <Button colorScheme="teal" onClick={addEvent} isLoading={isLoading}>
                    Add Event
                  </Button>
                  {error && <Text color="red.500">{error}</Text>}
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
                        <Th>Description</Th>
                        <Th>Actions</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {events.map((event) => (
                        <Tr key={event.id}>
                          <Td>{event.name}</Td>
                          <Td>{event.date}</Td>
                          <Td>{event.location}</Td>
                          <Td>{event.description}</Td>
                          <Td>
                            <HStack spacing="2">
                              <Button
                                colorScheme="yellow"
                                size="sm"
                                // Add edit functionality here
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
