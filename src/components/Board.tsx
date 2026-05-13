import React from 'react';
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragOverEvent,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import Column from './Column';
import TaskCard from './TaskCard';
import { BoardState, Task } from '../types';
import { moveTask } from '../lib/dnd/adapter';

interface BoardProps {
  state: BoardState;
  onStateChange: (state: BoardState) => void;
  onAddTask: (columnId: string) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
}

const Board: React.FC<BoardProps> = ({ 
  state, 
  onStateChange, 
  onAddTask, 
  onEditTask, 
  onDeleteTask 
}) => {
  const [activeTask, setActiveTask] = React.useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const taskId = active.id as string;
    const task = state.tasks[taskId];
    if (task) setActiveTask(task);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      const newState = moveTask(state, active.id as string, over.id as string);
      onStateChange(newState);
    }
  };

  const handleDragEnd = () => {
    setActiveTask(null);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="p-6 bg-white border-b border-slate-200 shadow-sm flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">Internal Task Board</h1>
          <button 
            onClick={() => onAddTask('todo')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm text-sm font-medium"
          >
            New Task
          </button>
        </header>
        <main className="flex-1 overflow-x-auto bg-slate-50 p-6 flex gap-6 items-start">
          {state.columns.map((column) => {
            const columnTasks = column.taskIds.map(id => state.tasks[id]).filter(Boolean);
            return (
              <Column 
                key={column.id} 
                column={column}
                tasks={columnTasks}
                onAddTask={onAddTask}
                onEditTask={onEditTask}
                onDeleteTask={onDeleteTask}
              />
            );
          })}
        </main>
      </div>
      <DragOverlay>
        {activeTask ? <TaskCard task={activeTask} /> : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Board;
