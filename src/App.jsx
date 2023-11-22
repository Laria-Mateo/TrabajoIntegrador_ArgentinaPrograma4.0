import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Header from './assets/components/Header/header'
import DivTasks from './assets/components/divTasks/divTasks'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Header/>
      <DivTasks/>
    </ChakraProvider>
  )
}
export default App
