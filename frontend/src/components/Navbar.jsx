import React from 'react';
import { Flex, Box, Heading, Link, Button, textDecoration } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex
      as="nav"
      bg="teal.500"
      color="white"
      padding="4"
      align="center"
      justify="space-between"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      {/* Branding */}
      <Heading as="h1" size="lg">
        <Link href='/' _hover={ {textDecoration: 'None'}}>Non-Profit Org</Link>
      </Heading>

      {/* Navigation Links */}
      <Flex gap="6" align="center">
        <Link href="/login" fontSize="lg" _hover={{ color: 'teal.300' }}>
          Volunteer Login
        </Link>
        <Link href="/admin/login" fontSize="lg" _hover={{ color: 'teal.300'}}>
          Admin Login
        </Link>
        <Link href="/event" fontSize="lg" _hover={{ color: 'teal.300' }}>
          Host an Event
        </Link>
        <Button colorScheme="teal" variant="outline" size="md">
          Donate Now
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
