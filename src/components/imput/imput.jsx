import { Box, Flex, Input, Button, InputRightElement, InputGroup } from '@chakra-ui/react';
import React, { useState } from 'react';
import { agregarTarea } from '../tareas/tareas-service';
import DivTasks from '../divTasks/divTasks';
import TaskManager from '../tareas/task-manager';
import { getTareas } from '../tareas/tareas-service';
import TareasLista from '../tareas/tareas-lista';

function Imput() {
  const [task, setTask] = useState({ id: -1, text: 'Enter Your Task' });
  const [idCounter, setIdCounter] = useState(0);

  function infoTask(event) {
    setTask({ id: idCounter, text: event.target.value });
  }

  function addTask() {
    agregarTarea(task);
    setTask({ id: -1, text: 'Enter Your Task' });
    setIdCounter(idCounter + 1); 
    console.log("Se agregó una tarea");
  }

  return (
    <>
      <Flex mt="5vh" mb="3vh" align="center" justify="center" direction={['column', 'row']}>
        <Box>
          <InputGroup>
            <Input
              placeholder='Enter your Task'
              borderRadius={"15px"}
              borderColor={"#E6E6E6"}
              width={"sm"}
              value={task.text}
              onChange={infoTask}
            />
            <InputRightElement width='4rem'>
              <Button
                h='1.75rem'
                size='sm'
                bg={"-moz-initial"}
                border={"1px"}
                borderColor={"#E6E6E6"}
                color={"#E6E6E6"}
                _hover={{ bg: "#E6E6E6" }}
                onClick={() => {
                  addTask();
                }}
              >
                +
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Flex>
 
    </>
  );
}

export default Imput;
