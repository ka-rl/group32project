import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  Select,
} from '@chakra-ui/react';
import AdminSidebar from '../../components/AdminSidebar';

const initialEvents = [
  { id: 1, name: 'Event One', date: '2024-12-01', location: 'Location One', skills: 'Communication' },
  { id: 2, name: 'Event Two', date: '2024-11-20', location: 'Location Two', skills: 'Teamwork' },
  { id: 3, name: 'Event Three', date: '2024-10-15', location: 'Location Three', skills: 'Leadership' },
  // Add more sample events
];

function EventHistory() {
  const [events, setEvents] = useState(initialEvents);
  const [filteredEvents, setFilteredEvents] = useState(initialEvents);
  const [search, setSearch] = useState('');
  const [filterSkills, setFilterSkills] = useState('');
  const [sortBy, setSortBy] = useState('');

  // Filter and Sort events
  const filterAndSortEvents = () => {
    let filtered = events;

    if (search) {
      filtered = filtered.filter((event) =>
        event.name.toLowerCase().includes(search.toLowerCase()) ||
        event.location.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filterSkills) {
      filtered = filtered.filter((event) =>
        event.skills.toLowerCase().includes(filterSkills.toLowerCase())
      );
    }

    if (sortBy === 'name') {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'date') {
      filtered = filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setFilteredEvents(filtered);
  };

  // Trigger on input change for search, skills, and sorting
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    filterAndSortEvents();
  };

  const handleSkillsChange = (e) => {
    setFilterSkills(e.target.value);
    filterAndSortEvents();
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    filterAndSortEvents();
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
                  Event History
                </Heading>

                {/* Filter/Search Bar */}
                <HStack spacing="4" mb="6">
                  <Input
                    placeholder="Search by name or location"
                    value={search}
                    onChange={handleSearchChange}
                    w="300px"
                  />
                  <Select
                    placeholder="Filter by Skills"
                    value={filterSkills}
                    onChange={handleSkillsChange}
                    w="200px"
                  >
                    <option value="Communication">Communication</option>
                    <option value="Teamwork">Teamwork</option>
                    <option value="Leadership">Leadership</option>
                  </Select>
                  <Select
                    placeholder="Sort by"
                    value={sortBy}
                    onChange={handleSortChange}
                    w="200px"
                  >
                    <option value="name">Name</option>
                    <option value="date">Date</option>
                  </Select>
                </HStack>

                {/* Event Table */}
                {filteredEvents.length > 0 ? (
                  <Table variant="striped" colorScheme="teal" maxW="800px">
                    <Thead>
                      <Tr>
                        <Th>Event Name</Th>
                        <Th>Date</Th>
                        <Th>Location</Th>
                        <Th>Skills Required</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {filteredEvents.map((event) => (
                        <Tr key={event.id}>
                          <Td>{event.name}</Td>
                          <Td>{event.date}</Td>
                          <Td>{event.location}</Td>
                          <Td>{event.skills}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                ) : (
                  <Text>No events found matching your criteria.</Text>
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

export default EventHistory;
