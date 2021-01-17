import React from 'react';
import {
  ChakraProvider,
  theme,
  Box,
  Flex
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import Navbar from './components/Navbar';
import MovieList from './components/MovieList';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex
          p={5}
          justifyContent={{ base: 'center', sm: 'space-between' }}
          alignItems="center"
          flexWrap="wrap"
          bg="teal.500"
        >
          <Navbar />
          <ColorModeSwitcher />
        </Flex>
        <MovieList />
      </Box>
      
    </ChakraProvider>
  );
}

export default App;
