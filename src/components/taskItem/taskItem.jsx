import React, { useState } from 'react';
import { Box } from "@chakra-ui/react"
import {Captura} from './Captura.jpg';
import {CapturaDelete} from './CapturaDelete.jpg';

const TaskItem = ({ task, completeTask, deleteTask }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(!completed);
    completeTask(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (

    <Box
    borderRadius={"15px"}
    alignItems={"center"}
    justify={"center"}
    borderColor={"#E6E6E6"}
    width={"350px"}
    m={"10px"}
    bg={"white"}    
>
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
    <button onClick={handleComplete}>
        <img src={Captura} alt="" />
    </button>
      {task.name} 
      
      <button onClick={handleDelete}>
      <img src={CapturaDelete} alt="" />
      </button>
    </li>
    </Box>
  );
};

export default TaskItem;