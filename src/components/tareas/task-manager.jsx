import React from 'react';

import DivTasks from '../divTasks/divTasks';
import { getTareas } from './tareas-service';


function TaskManager() {

  return (
       <>
      <DivTasks tareas={getTareas()} /> 
      {console.log("Tareas en TaskManager:", getTareas())}
      </>
  );
}

export default TaskManager;
