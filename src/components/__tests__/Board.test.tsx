import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Board from '../Board';
import { BoardState } from '../../types';

describe('Board', () => {
  const mockState: BoardState = {
    columns: [
      {
        id: 'col-1',
        title: 'To Do',
        taskIds: ['task-1'],
      },
      { id: 'col-2', title: 'In Progress', taskIds: [] },
      { id: 'col-3', title: 'Done', taskIds: [] },
    ],
    tasks: {
      'task-1': {
        id: 'task-1',
        title: 'Test Task',
        description: 'Test Desc',
        priority: 'Medium',
        status: 'To Do',
      },
    },
  };

  const mockOnStateChange = vi.fn();
  const mockOnAddTask = vi.fn();
  const mockOnEditTask = vi.fn();
  const mockOnDeleteTask = vi.fn();

  it('renders the board title', () => {
    render(
      <Board 
        state={mockState} 
        onStateChange={mockOnStateChange} 
        onAddTask={mockOnAddTask}
        onEditTask={mockOnEditTask}
        onDeleteTask={mockOnDeleteTask}
      />
    );
    expect(screen.getByText('Internal Task Board')).toBeTruthy();
  });

  it('renders columns from state', () => {
    render(
      <Board 
        state={mockState} 
        onStateChange={mockOnStateChange} 
        onAddTask={mockOnAddTask}
        onEditTask={mockOnEditTask}
        onDeleteTask={mockOnDeleteTask}
      />
    );
    expect(screen.getByLabelText('To Do')).toBeTruthy();
    expect(screen.getByLabelText('In Progress')).toBeTruthy();
    expect(screen.getByLabelText('Done')).toBeTruthy();
    expect(screen.getByText('Test Task')).toBeTruthy();
  });
});
