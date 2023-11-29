import * as React from 'react'
import{ useState, useEffect } from 'react';
// 1. import `ChakraProvider` component
import { Box, ChakraProvider } from '@chakra-ui/react'
import Header from './components/header/header'
import TaskList from './components/taskList/taskList';
import TaskForm from './components/taskForm/taskForm';


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Aquí puedes realizar acciones adicionales cuando la lista de tareas cambia
    console.log('Lista de tareas actualizada:', tasks);
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <ChakraProvider>
      <Header />
      <div>
      
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
      
    </div>
    </ChakraProvider>
  )
}
export default App
