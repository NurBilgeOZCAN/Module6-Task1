import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import TaskCard from './TaskCard';
import { ColumnProps } from '../types';

interface ColumnComponentProps {
  column: ColumnType;
  onAddTask: (columnId: string) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
}

const Column: React.FC<ColumnComponentProps> = ({ 
  column, 
  onAddTask, 
  onEditTask, 
  onDeleteTask 
}) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <section 
      ref={setNodeRef}
      className="column bg-white p-4 rounded shadow min-w-[300px] flex flex-col max-h-full" 
      aria-label={column.name}
    >
      <h3 className="text-md font-semibold mb-3 text-slate-700">{column.name}</h3>
      <div className="task-list flex flex-col gap-2 overflow-y-auto flex-1 min-h-[100px]">
        <SortableContext 
          items={column.tasks.map(t => t.id)} 
          strategy={verticalListSortingStrategy}
        >
          {column.tasks.length === 0 ? (
            <p className="text-sm text-slate-400 italic text-center py-4">No tasks yet</p>
          ) : (
            column.tasks.map((task) => (
              <TaskCard 
                key={task.id} 
                task={task} 
                onEdit={onEditTask} 
                onDelete={onDeleteTask} 
              />
            ))
          )}
        </SortableContext>
      </div>
      <button 
        onClick={() => onAddTask(column.id)}
        className="mt-4 text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium self-start p-1"
      >
        + Add Task
      </button>
    </section>
  );
};

export default Column;