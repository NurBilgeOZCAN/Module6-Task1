import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TaskForm from '../TaskForm';

describe('TaskForm', () => {
  it('renders correctly for new task', () => {
    render(<TaskForm onSubmit={vi.fn()} onCancel={vi.fn()} />);
    expect(screen.getByText('New Task')).toBeTruthy();
    expect(screen.getByPlaceholderText('What needs to be done?')).toBeTruthy();
  });

  it('calls onSubmit with correct data', () => {
    const handleSubmit = vi.fn();
    render(<TaskForm onSubmit={handleSubmit} onCancel={vi.fn()} />);
    
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'New Test Task' } });
    fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'New Description' } });
    fireEvent.click(screen.getByText('Create Task'));

    expect(handleSubmit).toHaveBeenCalledWith({
      title: 'New Test Task',
      description: 'New Description',
    });
  });

  it('calls onCancel when cancel button clicked', () => {
    const handleCancel = vi.fn();
    render(<TaskForm onSubmit={vi.fn()} onCancel={handleCancel} />);
    
    fireEvent.click(screen.getByText('Cancel'));
    expect(handleCancel).toHaveBeenCalled();
  });
});
