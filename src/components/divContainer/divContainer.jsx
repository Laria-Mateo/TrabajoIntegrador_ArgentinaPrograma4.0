import { Box, Flex, Input, Button, InputRightElement, InputGroup } from '@chakra-ui/react';
import React, { useState } from 'react';
import Imput from '../imput/imput';
import DivTasks from '../divTasks/divTasks';
import TaskManager from '../tareas/task-manager';
import TareasLista from '../tareas/tareas-lista';

function DivContainer() {

  return (
    <>
    <Imput />
    <DivTasks/>
    </>
  );
}

export default DivContainer;

