import React from 'react';
import { Flex, Box, Heading, Link, Button, textDecoration } from '@chakra-ui/react';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

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
      <Flex gap="4" align="center">
        {!user && (
           <div>
           <Button as="a" href="/login" fontSize="lg" bg='teal.500' color='white' _hover={{ color: 'teal.300' }}>
             Volunteer Login
           </Button>
         </div>
        )}
        {user && (
          <div>
            <span>{user.email}</span>
            {user.isAdmin ? (<span>admin</span>):(<span>volunteer</span>)}
            <Button onClick={handleClick} fontSize="lg" bg='teal.500' color='white' _hover={{ color: 'teal.300' }}>
              Logout
            </Button>
          </div>
        )}
        <Button as="a" href="/event" fontSize="lg" bg='teal.500' color='white' _hover={{ color: 'teal.300' }}>
            Host an Event
        </Button>

        <Button colorScheme="teal" variant="outline" size="md">
          Donate Now
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
