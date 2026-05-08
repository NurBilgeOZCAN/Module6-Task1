import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Column from '../Column';
import { Column as ColumnType } from '../../types';

describe('Column', () => {
  const mockTasks = [
    { id: '1', title: 'Task 1', description: 'Desc 1' },
    { id: '2', title: 'Task 2', description: 'Desc 2' },
  ];

  const mockColumn: ColumnType = {
    id: 'col-1',
    name: 'To Do',
    tasks: mockTasks,
  };

  const mockOnAddTask = vi.fn();
  const mockOnEditTask = vi.fn();
  const mockOnDeleteTask = vi.fn();

  it('renders the column name', () => {
    render(
      <Column 
        column={mockColumn} 
        onAddTask={mockOnAddTask}
        onEditTask={mockOnEditTask}
        onDeleteTask={mockOnDeleteTask}
      />
    );
    expect(screen.getByText('To Do')).toBeTruthy();
  });

  it('renders the list of tasks', () => {
    render(
      <Column 
        column={mockColumn} 
        onAddTask={mockOnAddTask}
        onEditTask={mockOnEditTask}
        onDeleteTask={mockOnDeleteTask}
      />
    );
    expect(screen.getByText('Task 1')).toBeTruthy();
    expect(screen.getByText('Task 2')).toBeTruthy();
  });

  it('renders "No tasks yet" when the task list is empty', () => {
    const emptyColumn: ColumnType = { ...mockColumn, tasks: [] };
    render(
      <Column 
        column={emptyColumn} 
        onAddTask={mockOnAddTask}
        onEditTask={mockOnEditTask}
        onDeleteTask={mockOnDeleteTask}
      />
    );
    expect(screen.getByText('No tasks yet')).toBeTruthy();
  });

  it('has the correct accessibility label', () => {
    render(
      <Column 
        column={mockColumn} 
        onAddTask={mockOnAddTask}
        onEditTask={mockOnEditTask}
        onDeleteTask={mockOnDeleteTask}
      />
    );
    expect(screen.getByLabelText('To Do')).toBeTruthy();
  });
});
