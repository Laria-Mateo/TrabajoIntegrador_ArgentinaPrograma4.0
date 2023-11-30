import * as React from 'react';
import { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/header/header';
import TaskList from './components/taskList/taskList';
import TaskForm from './components/taskForm/taskForm';
import TaskHistory from './components/taskHistory/taskHistory';

function App() {
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksh, setTasksh] = useState(initialTasks);
  
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Lista de tareas actualizada:', tasks);
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setTasksh([...tasksh, newTask]);
    setIsCreatingTask(true);
    setShowHistory(false);
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

  const startCreatingTask = () => {
    setIsCreatingTask(true);
    setShowHistory(false);
  };

  const showTaskHistory = () => {
    setShowHistory(true);
    setIsCreatingTask(false);
  };

  return (
    <ChakraProvider>
      <Header />

      {/* Mostrar ambos botones en todo momento */}
      <div>
        <button onClick={startCreatingTask}>Tareas</button>
        <button onClick={showTaskHistory}>Historial</button>
      </div>

      {/* Renderizar el formulario siempre, pero mostrarlo solo cuando estés creando tareas */}
      {(isCreatingTask || showHistory) && <TaskForm addTask={addTask} />}

      {/* Renderizar el componente TaskHistory solo cuando showHistory es true */}
      {showHistory && <TaskHistory history={tasksh} onClose={() => setShowHistory(false)} />}

      {/* Renderizar el componente TaskList solo cuando estás creando tareas */}
      {isCreatingTask && !showHistory && <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />}
    </ChakraProvider>
  );
}

export default App;