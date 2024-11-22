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

// Sample volunteer data
const initialVolunteers = [
  { id: 1, name: 'John Doe', email: 'johndoe@example.com', skills: 'Communication', joinedDate: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', skills: 'Leadership', joinedDate: '2024-03-20' },
  { id: 3, name: 'Alice Johnson', email: 'alicejohnson@example.com', skills: 'Teamwork', joinedDate: '2024-04-10' },
  // Add more sample volunteers
];

function VolunteerData() {
  const [volunteers, setVolunteers] = useState(initialVolunteers);
  const [filteredVolunteers, setFilteredVolunteers] = useState(initialVolunteers);
  const [search, setSearch] = useState('');
  const [filterSkills, setFilterSkills] = useState('');
  const [sortBy, setSortBy] = useState('');
  
  // Filter and Sort volunteers
  const filterAndSortVolunteers = () => {
    let filtered = volunteers;

    if (search) {
      filtered = filtered.filter((volunteer) =>
        volunteer.name.toLowerCase().includes(search.toLowerCase()) ||
        volunteer.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filterSkills) {
      filtered = filtered.filter((volunteer) =>
        volunteer.skills.toLowerCase().includes(filterSkills.toLowerCase())
      );
    }

    if (sortBy === 'name') {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'date') {
      filtered = filtered.sort((a, b) => new Date(a.joinedDate) - new Date(b.joinedDate));
    }

    setFilteredVolunteers(filtered);
  };

  // Trigger on input change for search, skills, and sorting
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    filterAndSortVolunteers();
  };

  const handleSkillsChange = (e) => {
    setFilterSkills(e.target.value);
    filterAndSortVolunteers();
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    filterAndSortVolunteers();
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
                  Volunteer Data
                </Heading>

                {/* Filter/Search Bar */}
                <HStack spacing="4" mb="6">
                  <Input
                    placeholder="Search by name or email"
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
                    <option value="Leadership">Leadership</option>
                    <option value="Teamwork">Teamwork</option>
                  </Select>
                  <Select
                    placeholder="Sort by"
                    value={sortBy}
                    onChange={handleSortChange}
                    w="200px"
                  >
                    <option value="name">Name</option>
                    <option value="date">Joined Date</option>
                  </Select>
                </HStack>

                {/* Volunteer Table */}
                {filteredVolunteers.length > 0 ? (
                  <Table variant="striped" colorScheme="teal" maxW="800px">
                    <Thead>
                      <Tr>
                        <Th>Volunteer Name</Th>
                        <Th>Email</Th>
                        <Th>Skills</Th>
                        <Th>Joined Date</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {filteredVolunteers.map((volunteer) => (
                        <Tr key={volunteer.id}>
                          <Td>{volunteer.name}</Td>
                          <Td>{volunteer.email}</Td>
                          <Td>{volunteer.skills}</Td>
                          <Td>{volunteer.joinedDate}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                ) : (
                  <Text>No volunteers found matching your criteria.</Text>
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

export default VolunteerData;
