import * as React from 'react'

// 1. import `ChakraProvider` component
import { Box, ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header/header'
import DivContainer from './components/divContainer/divContainer'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      
      <Header/>
      <DivContainer/>
      
    </ChakraProvider>
  )
}
export default App
