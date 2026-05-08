import React, { useState, useEffect } from 'react';
import { BoardState } from './types';
import Board from './components/Board';
import { loadBoardState, saveBoardState } from './utils/localStorage';

import TaskForm from './components/TaskForm';
import { Task } from './types';

const INITIAL_STATE: BoardState = {
  columns: [
    { id: 'todo', name: 'To Do', tasks: [] },
    { id: 'in-progress', name: 'In Progress', tasks: [] },
    { id: 'done', name: 'Done', tasks: [] },
  ],
};

import React, { useState, useEffect, useCallback } from 'react';

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
    setState(prev => ({
      ...prev,
      columns: prev.columns.map(col => ({
        ...col,
        tasks: col.tasks.filter(t => t.id !== taskId)
      }))
    }));
  }, []);

  const handleFormSubmit = useCallback((taskData: Omit<Task, 'id'>) => {
    if (editingTask) {
      // Edit existing task
      setState(prev => ({
        ...prev,
        columns: prev.columns.map(col => ({
          ...col,
          tasks: col.tasks.map(t => t.id === editingTask.id ? { ...t, ...taskData } : t)
        }))
      }));
    } else {
      // Create new task
      const newTask: Task = {
        id: crypto.randomUUID(),
        ...taskData
      };
      setState(prev => ({
        ...prev,
        columns: prev.columns.map(col => 
          col.id === (activeColumnId || 'todo')
            ? { ...col, tasks: [...col.tasks, newTask] }
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
