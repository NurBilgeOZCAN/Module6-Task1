import React from 'react';
import TaskCard from './TaskCard';
import { ColumnProps } from '../types';

const Column: React.FC<ColumnProps> = ({ column }) => {
  return (
    <div className="column">
      <h2>{column.name}</h2>
      {column.tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
      <button>Add Task</button>
    </div>
  );
};

export default Column;