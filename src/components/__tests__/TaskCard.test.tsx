import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TaskCard from '../TaskCard';
import { Task } from '../../types';

describe('TaskCard', () => {
  const mockTask: Task = {
    id: 'task-1',
    title: 'Test Task',
    description: 'Test Description',
  };

  it('renders task title', () => {
    render(<TaskCard task={mockTask} />);
    expect(screen.getByText('Test Task')).toBeTruthy();
  });

  it('renders task description', () => {
    render(<TaskCard task={mockTask} />);
    expect(screen.getByText('Test Description')).toBeTruthy();
  });

  it('does not render description if empty', () => {
    const noDescTask: Task = { ...mockTask, description: '' };
    render(<TaskCard task={noDescTask} />);
    expect(screen.queryByText('Test Description')).toBeNull();
  });

  it('has correct accessibility attributes', () => {
    render(<TaskCard task={mockTask} />);
    const card = screen.getByRole('listitem');
    expect(card).toBeTruthy();
    expect(card.getAttribute('aria-label')).toBe('Task: Test Task');
  });
});
