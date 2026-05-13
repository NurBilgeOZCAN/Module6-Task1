import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TaskForm from '../TaskForm';

describe('TaskForm validation', () => {
  it('does not call onSubmit when title is empty', () => {
    const onSubmit = vi.fn();
    render(<TaskForm onSubmit={onSubmit} onCancel={vi.fn()} />);

    // Clear title and submit
    const titleInput = screen.getByLabelText('Title') as HTMLInputElement;
    fireEvent.change(titleInput, { target: { value: '   ' } });
    fireEvent.click(screen.getByRole('button', { name: /create task/i }));

    expect(onSubmit).not.toHaveBeenCalled();
  });
});
