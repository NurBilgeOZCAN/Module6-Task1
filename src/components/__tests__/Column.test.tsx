import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Column from '../Column';
import { Column as ColumnType, Task } from '../../types';

describe('Column', () => {
  const mockColumn: ColumnType = {
    id: 'col-1',
    title: 'To Do',
    taskIds: ['task-1', 'task-2'],
  };

  const mockTasks: Task[] = [
    { id: 'task-1', title: 'Task 1', description: 'Desc 1', priority: 'Medium', status: 'To Do' },
    { id: 'task-2', title: 'Task 2', description: 'Desc 2', priority: 'High', status: 'In Progress' },
  ];

  const mockOnAddTask = vi.fn();
  const mockOnEditTask = vi.fn();
  const mockOnDeleteTask = vi.fn();

  it('renders the column name', () => {
    render(
      <Column 
        column={mockColumn}
        tasks={mockTasks}
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
        tasks={mockTasks}
        onAddTask={mockOnAddTask}
        onEditTask={mockOnEditTask}
        onDeleteTask={mockOnDeleteTask}
      />
    );
    expect(screen.getByText('Task 1')).toBeTruthy();
    expect(screen.getByText('Task 2')).toBeTruthy();
  });

  it('renders "No tasks yet" when the task list is empty', () => {
    const emptyColumn: ColumnType = { ...mockColumn, taskIds: [] };
    render(
      <Column 
        column={emptyColumn}
        tasks={[]}
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
        tasks={mockTasks}
        onAddTask={mockOnAddTask}
        onEditTask={mockOnEditTask}
        onDeleteTask={mockOnDeleteTask}
      />
    );
    expect(screen.getByLabelText('To Do')).toBeTruthy();
  });
});
