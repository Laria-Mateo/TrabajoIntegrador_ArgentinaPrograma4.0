import { Box, Flex, Input, Button, InputRightElement, InputGroup } from '@chakra-ui/react';
import React from 'react';

function Imput() {

  return (
<Flex
  mt="5vh"
  mb="3vh"
  align="center"
  justify="center"
  direction={['column', 'row']}
>
  <Box>
    <InputGroup>
      <Input
        placeholder="Enter your Task"
        borderRadius={"15px"}
        borderColor={"#E6E6E6"}
        width={"sm"}
      />
      <InputRightElement width='4rem'>
        <Button
          h='1.75rem'
          size='sm'
          bg={"-moz-initial"} 
          border={"1px"}
          borderColor={"#E6E6E6"}
          color={"#E6E6E6"} 
          _hover={{ bg: "#E6E6E6"}}  
        >
          +
        </Button>
      </InputRightElement>
    </InputGroup>
  </Box>
</Flex>
  );
}

export default Imput;

