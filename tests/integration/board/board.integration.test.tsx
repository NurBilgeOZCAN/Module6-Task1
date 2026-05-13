import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Board from '../../../src/components/Board';
import { BoardState } from '../../../src/types';

describe('Board Integration', () => {
  const mockState: BoardState = {
    columns: [
      { id: 'todo', title: 'To Do', taskIds: ['task-1'] },
      { id: 'in-progress', title: 'In Progress', taskIds: [] },
      { id: 'done', title: 'Done', taskIds: [] },
    ],
    tasks: {
      'task-1': {
        id: 'task-1',
        title: 'Existing Task',
        description: 'Task description',
        priority: 'Medium',
        status: 'To Do',
      },
    },
  };

  const mockOnStateChange = vi.fn();
  const mockOnAddTask = vi.fn();
  const mockOnEditTask = vi.fn();
  const mockOnDeleteTask = vi.fn();

  it('renders all columns with correct titles', () => {
    render(
      <Board
        state={mockState}
        onStateChange={mockOnStateChange}
        onAddTask={mockOnAddTask}
        onEditTask={mockOnEditTask}
        onDeleteTask={mockOnDeleteTask}
      />
    );

    expect(screen.getByText('To Do')).toBeInTheDocument();
    expect(screen.getByText('In Progress')).toBeInTheDocument();
    expect(screen.getByText('Done')).toBeInTheDocument();
  });

  it('displays existing tasks in their columns', () => {
    render(
      <Board
        state={mockState}
        onStateChange={mockOnStateChange}
        onAddTask={mockOnAddTask}
        onEditTask={mockOnEditTask}
        onDeleteTask={mockOnDeleteTask}
      />
    );

    expect(screen.getByText('Existing Task')).toBeInTheDocument();
  });

  it('calls onAddTask when New Task button is clicked', () => {
    render(
      <Board
        state={mockState}
        onStateChange={mockOnStateChange}
        onAddTask={mockOnAddTask}
        onEditTask={mockOnEditTask}
        onDeleteTask={mockOnDeleteTask}
      />
    );

    const newTaskButton = screen.getByRole('button', { name: /new task/i });
    fireEvent.click(newTaskButton);

    expect(mockOnAddTask).toHaveBeenCalledWith('todo');
  });

  it('shows empty state when columns have no tasks', () => {
    const emptyState: BoardState = {
      columns: [
        { id: 'todo', title: 'To Do', taskIds: [] },
        { id: 'in-progress', title: 'In Progress', taskIds: [] },
        { id: 'done', title: 'Done', taskIds: [] },
      ],
      tasks: {},
    };

    render(
      <Board
        state={emptyState}
        onStateChange={mockOnStateChange}
        onAddTask={mockOnAddTask}
        onEditTask={mockOnEditTask}
        onDeleteTask={mockOnDeleteTask}
      />
    );

    // Should show empty state messages for columns with no tasks
    const emptyMessages = screen.getAllByText('No tasks yet');
    expect(emptyMessages.length).toBeGreaterThan(0);
  });
});