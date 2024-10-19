import React from 'react';
import { Flex, Box, Heading, Link, Button } from '@chakra-ui/react';

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
        <a href='/'>
          Non-Profit Org
        </a> 
      </Heading>

      {/* Navigation Links */}
      <Flex gap="6" align="center">
        <Link href="/login" fontSize="lg" _hover={{ color: 'teal.300' }}>
          Login
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
