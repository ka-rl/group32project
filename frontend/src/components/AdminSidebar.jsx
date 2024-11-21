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
          to="/"
          variant="ghost"
          colorScheme={location.pathname === '/admin/AdminDashboard' ? 'yellow' : 'whiteAlpha'}
          w="full"
        >
          Dashboard
        </Button>
        <Button
          as={Link}
          to="/manage-event"
          variant="ghost"
          colorScheme={location.pathname === '/admin/manage-event' ? 'yellow' : 'whiteAlpha'}
          w="full"
        >
          Manage Event
        </Button>
        <Button
          as={Link}
          to="/event-history"
          variant="ghost"
          colorScheme={location.pathname === '/admin/event-history' ? 'yellow' : 'whiteAlpha'}
          w="full"
        >
          Event History
        </Button>
        <Button
          as={Link}
          to="/volunteer-data"
          variant="ghost"
          colorScheme={location.pathname === '/admin/volunteer-data' ? 'yellow' : 'whiteAlpha'}
          w="full"
        >
          Volunteer Data Report
        </Button>
      </VStack>
    </Box>
  );
};

export default AdminSidebar;
