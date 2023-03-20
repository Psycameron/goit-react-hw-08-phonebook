import { Box, Text } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <Box paddingTop="30px">
      <Helmet>
        <title>Save Contacts</title>
      </Helmet>
      <Text
        height="100%"
        textAlign="center"
        fontWeight="bold"
        color="#212121"
        fontSize="24px"
      >
        Welcome! Join and keep your contacts here
      </Text>
    </Box>
  );
}
