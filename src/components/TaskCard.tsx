import React from 'react';
import { TaskProps } from '../types';

const TaskCard: React.FC<TaskProps> = ({ task }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;