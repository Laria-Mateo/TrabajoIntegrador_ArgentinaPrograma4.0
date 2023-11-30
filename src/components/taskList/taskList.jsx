import React from 'react';
import TaskItem from '../taskItem/TaskItem';
import { Box, Flex } from '@chakra-ui/react';


const TaskList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <Flex align={"center"} justify="center" direction={['column', 'row']}>
    <Box bg="#E6E6E6"       width={{ base: 'sm', lg: 'lg' }}  
      maxW={{ base: 'full', lg: 'container.lg' }} borderRadius={"15px"}>
        
    <ul style={{ listStyleType: 'none', padding: '20px' }}>
            
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