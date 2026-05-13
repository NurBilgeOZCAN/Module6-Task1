import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from '../../../src/App';

describe('Integration - Task CRUD & localStorage save', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('creates, edits, and deletes a task and persists changes', async () => {
    vi.spyOn(globalThis.crypto, 'randomUUID').mockReturnValue('00000000-0000-0000-0000-00000000a001');

    const { unmount } = render(<App />);

    // Create
    fireEvent.click(screen.getByRole('button', { name: /new task/i }));
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'IT Create' } });
    fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'desc' } });
    fireEvent.click(screen.getByRole('button', { name: /create task/i }));

    await waitFor(() => expect(screen.getByText('IT Create')).toBeTruthy());

    const saved = JSON.parse(localStorage.getItem('boardState') || '{}');
    expect(saved.tasks['00000000-0000-0000-0000-00000000a001']).toBeDefined();

    // Edit
    const editButton = await screen.findByLabelText('Edit task: IT Create');
    fireEvent.click(editButton);
    const titleInput = screen.getByLabelText('Title') as HTMLInputElement;
    fireEvent.change(titleInput, { target: { value: 'IT Edited' } });
    fireEvent.click(screen.getByRole('button', { name: /save changes/i }));
    await waitFor(() => expect(screen.getByText('IT Edited')).toBeTruthy());

    const saved2 = JSON.parse(localStorage.getItem('boardState') || '{}');
    const id = Object.keys(saved2.tasks)[0];
    expect(saved2.tasks[id].title).toBe('IT Edited');

    // Delete
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    const deleteButton = await screen.findByLabelText('Delete task: IT Edited');
    fireEvent.click(deleteButton);
    await waitFor(() => expect(screen.queryByText('IT Edited')).toBeNull());

    const saved3 = JSON.parse(localStorage.getItem('boardState') || '{}');
    expect(Object.keys(saved3.tasks).length).toBe(0);

    unmount();
  });
});
