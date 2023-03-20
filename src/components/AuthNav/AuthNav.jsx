import { NavLink } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Box display="flex" marginBottom="10px">
      <NavLink to="/register">
        <Text
          backgroundColor="#f5f5f5"
          marginLeft="15px"
          marginRight="10px"
          fontSize="large"
          padding="10px"
          borderRadius="md"
          _hover={{
            backgroundColor: '#5938f5',
            color: '#ffffff',
          }}
        >
          Register
        </Text>
      </NavLink>
      <NavLink to="/login">
        <Text
          backgroundColor="#f5f5f5"
          width="85px"
          textAlign="center"
          fontSize="large"
          padding="10px"
          borderRadius="md"
          _hover={{
            backgroundColor: '#5938f5',
            color: '#ffffff',
          }}
        >
          Log In
        </Text>
      </NavLink>
    </Box>
  );
};
