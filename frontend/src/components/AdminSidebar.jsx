import React from 'react';
import { Box, Button, VStack, Heading } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const location = useLocation(); // Hook to get the current route

  return (
    <Box
      as="nav"
      bg="teal.500"
      color="white"
      w="250px"
      minH="100vh"
      p="4"
      position="fixed"
    >
      <VStack spacing="6" align="flex-start">
        <Heading as="h4" size="md" mb="4">
          Admin Menu
        </Heading>
        <Button
          as={Link}
          to="/admin/AdminDashboard"
          variant="ghost"
          colorScheme={location.pathname === '/admin/AdminDashboard' ? 'yellow' : 'whiteAlpha'}
          _hover={{ bg: 'gold', color: 'black' }}
          w="full"
        >
          Dashboard
        </Button>
        <Button
          as={Link}
          to="/admin/manage-event"
          variant="ghost"
          colorScheme={location.pathname === '/admin/manage-event' ? 'yellow' : 'whiteAlpha'}
          _hover={{ bg: 'gold', color: 'black' }}
          w="full"
        >
          Manage Event
        </Button>
        <Button
          as={Link}
          to="/admin/event-history"
          variant="ghost"
          colorScheme={location.pathname === '/admin/event-history' ? 'yellow' : 'whiteAlpha'}
          _hover={{ bg: 'gold', color: 'black' }}
          w="full"
        >
          Event History
        </Button>
        <Button
          as={Link}
          to="/admin/volunteer-data"
          variant="ghost"
          colorScheme={location.pathname === '/admin/volunteer-data' ? 'yellow' : 'whiteAlpha'}
          _hover={{ bg: 'gold', color: 'black' }}
          w="full"
        >
          Volunteer Data Report
        </Button>
      </VStack>
    </Box>
  );
};

export default AdminSidebar;
