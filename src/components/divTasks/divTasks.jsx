import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import Imput from '../imput/imput';
import { eliminarTarea, getTareas } from '../tareas/tareas-service';
import TareasLista from '../tareas/tareas-lista';

function DivTasks({ tareas }) {
  console.log("Tareas en DivTasks:", tareas);
  if (!tareas || tareas.length === 0) {
    return <p>No tasks available.</p>;
  }

  return (
    <Flex align={"center"} justify="center" direction={['column', 'row']}>
      <Box bg="#E6E6E6" w="sm" borderRadius={"15px"}>
        {tareas.map((t) => (
          <Box
            borderRadius={"15px"}
            alignItems={"center"}
            justify={"center"}
            borderColor={"#E6E6E6"}
            width={"350px"}
            m={"10px"}
            bg={"white"}
            key={t.id}
          >
            <p>{t.text} <button onClick={()=>{eliminarTarea(t)}}>x</button></p>
          </Box>
        ))}
      </Box>
    </Flex>
  );
}

export default DivTasks;

