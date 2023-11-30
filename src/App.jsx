import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Header from './components/header/header';
import TaskList from './components/taskList/taskList';
import TaskForm from './components/taskForm/taskForm';

function App() {
  // Load tasks from local storage on component mount
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    // Save tasks to local storage whenever tasks state changes
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Lista de tareas actualizada:', tasks);
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <ChakraProvider>
      <Header />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
    </ChakraProvider>
  );
}

export default App;
