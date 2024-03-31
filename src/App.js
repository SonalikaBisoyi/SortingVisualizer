import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import SortingVisualizer from './components/SortingVisualiser';

function App() {
  return (
    <ChakraProvider>
      <Container maxW="container.lg" mt={10}>
        <SortingVisualizer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
