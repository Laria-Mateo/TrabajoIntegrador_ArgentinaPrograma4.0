// TaskHistory.js
import React from 'react';

const TaskHistory = ({ history, onClose }) => {
  return (
    <div>
      <h2>Historial de Tareas</h2>
      <ul>
        {history.map((task, index) => (
          <li key={index}>{task.name}</li>
        ))}
      </ul>
      <button onClick={onClose}>Cerrar Historial</button>
    </div>
  );
};

export default TaskHistory;
