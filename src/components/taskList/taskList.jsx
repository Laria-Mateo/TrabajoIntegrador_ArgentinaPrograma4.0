import React from 'react';
import TaskItem from '../taskItem/TaskItem';
import { Box, Flex } from '@chakra-ui/react';


const TaskList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <Flex align={"center"} justify="center" direction={['column', 'row']}>
    <Box bg="#E6E6E6" w="sm" borderRadius={"15px"}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
            
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
        
      ))}
    </ul>
    </Box>
  </Flex>
    
    
  );
};

export default TaskList;