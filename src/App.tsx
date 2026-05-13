import React, { useState, useEffect, useCallback } from 'react';
import { BoardState } from './types';
import Board from './components/Board';
import { loadBoardState, saveBoardState } from './utils/localStorage';

import TaskForm from './components/TaskForm';
import { Task } from './types';

const INITIAL_STATE: BoardState = {
  columns: [
    { id: 'todo', title: 'To Do', taskIds: [] },
    { id: 'in-progress', title: 'In Progress', taskIds: [] },
    { id: 'done', title: 'Done', taskIds: [] },
  ],
  tasks: {},
};

function App() {
  const [state, setState] = useState<BoardState>(() => {
    return loadBoardState() || INITIAL_STATE;
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [activeColumnId, setActiveColumnId] = useState<string | null>(null);

  useEffect(() => {
    saveBoardState(state);
  }, [state]);

  const handleAddTask = useCallback((columnId: string) => {
    setActiveColumnId(columnId);
    setEditingTask(null);
    setIsFormOpen(true);
  }, []);

  const handleEditTask = useCallback((task: Task) => {
    setEditingTask(task);
    setIsFormOpen(true);
  }, []);

  const handleDeleteTask = useCallback((taskId: string) => {
    setState(prev => {
      const newTasks = { ...prev.tasks };
      delete newTasks[taskId];
      
      return {
        ...prev,
        tasks: newTasks,
        columns: prev.columns.map(col => ({
          ...col,
          taskIds: col.taskIds.filter(id => id !== taskId)
        }))
      };
    });
  }, []);

  const handleFormSubmit = useCallback((taskData: Omit<Task, 'id'>) => {
    if (editingTask) {
      // Edit existing task
      setState(prev => ({
        ...prev,
        tasks: {
          ...prev.tasks,
          [editingTask.id]: { ...prev.tasks[editingTask.id], ...taskData }
        }
      }));
    } else {
      // Create new task
      const newTask: Task = {
        id: crypto.randomUUID(),
        ...taskData
      };
      const targetColumnId = activeColumnId || 'todo';
      
      setState(prev => ({
        ...prev,
        tasks: {
          ...prev.tasks,
          [newTask.id]: newTask
        },
        columns: prev.columns.map(col => 
          col.id === targetColumnId
            ? { ...col, taskIds: [...col.taskIds, newTask.id] }
            : col
        )
      }));
    }
    setIsFormOpen(false);
    setEditingTask(null);
    setActiveColumnId(null);
  }, [editingTask, activeColumnId]);

  const handleStateChange = useCallback((newState: BoardState) => {
    setState(newState);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 'n' key opens task form if not in an input
      if (e.key === 'n' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName || '')) {
        handleAddTask('todo');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleAddTask]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Board 
        state={state} 
        onStateChange={handleStateChange} 
        onAddTask={handleAddTask}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
      {isFormOpen && (
        <TaskForm 
          initialTask={editingTask || undefined}
          onSubmit={handleFormSubmit}
          onCancel={() => {
            setIsFormOpen(false);
            setEditingTask(null);
            setActiveColumnId(null);
          }}
        />
      )}
    </div>
  );
}

export default App;
