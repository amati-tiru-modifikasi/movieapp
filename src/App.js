import React from 'react';
import {
  ChakraProvider,
  theme,
  Box,
  Flex
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import Navbar from './components/Navbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex
          p={5}
          justifyContent={{ base: 'center', sm: 'space-between' }}
          alignItems="center"
          flexWrap="wrap"
        >
          <Navbar />
          <ColorModeSwitcher />
        </Flex>
      </Box>
      
    </ChakraProvider>
  );
}

export default App;
