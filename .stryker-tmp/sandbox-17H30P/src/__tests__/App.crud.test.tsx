// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from '../App';

describe('App - task CRUD and keyboard shortcut', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('creates a new task and persists to localStorage', async () => {
    vi.spyOn(globalThis.crypto, 'randomUUID').mockReturnValue('00000000-0000-0000-0000-000000000001');

    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /new task/i }));

    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Integration Test Task' } });
    fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'Created by test' } });
    fireEvent.click(screen.getByRole('button', { name: /create task/i }));

    await waitFor(() => expect(screen.getByText('Integration Test Task')).toBeTruthy());
    expect(screen.getByText('Created by test')).toBeTruthy();

    const saved = JSON.parse(localStorage.getItem('boardState') || '{}');
    expect(saved.tasks['00000000-0000-0000-0000-000000000001']).toBeDefined();
    expect(saved.tasks['00000000-0000-0000-0000-000000000001'].title).toBe('Integration Test Task');
  });

  it('edits an existing task and updates localStorage', async () => {
    vi.spyOn(globalThis.crypto, 'randomUUID').mockReturnValue('00000000-0000-0000-0000-000000000002');

    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /new task/i }));
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Edit Me' } });
    fireEvent.click(screen.getByRole('button', { name: /create task/i }));

    const editButton = await screen.findByLabelText('Edit task: Edit Me');
    fireEvent.click(editButton);

    const titleInput = screen.getByLabelText('Title') as HTMLInputElement;
    expect(titleInput.value).toBe('Edit Me');
    fireEvent.change(titleInput, { target: { value: 'Edited Title' } });
    fireEvent.click(screen.getByRole('button', { name: /save changes/i }));

    await waitFor(() => expect(screen.getByText('Edited Title')).toBeTruthy());
    const saved = JSON.parse(localStorage.getItem('boardState') || '{}');
    const taskId = Object.keys(saved.tasks)[0];
    expect(saved.tasks[taskId].title).toBe('Edited Title');
  });

  it('deletes a task when confirmed', async () => {
    vi.spyOn(globalThis.crypto, 'randomUUID').mockReturnValue('00000000-0000-0000-0000-000000000003');

    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /new task/i }));
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Delete Me' } });
    fireEvent.click(screen.getByRole('button', { name: /create task/i }));

    vi.spyOn(window, 'confirm').mockReturnValue(true);

    const deleteButton = await screen.findByLabelText('Delete task: Delete Me');
    fireEvent.click(deleteButton);

    await waitFor(() => expect(screen.queryByText('Delete Me')).toBeNull());
    const saved = JSON.parse(localStorage.getItem('boardState') || '{}');
    expect(Object.keys(saved.tasks).length).toBe(0);
  });

  it('opens the TaskForm when pressing the n key', async () => {
    render(<App />);
    fireEvent.keyDown(window, { key: 'n' });
    expect(await screen.findByRole('heading', { name: /new task/i })).toBeTruthy();
  });
});
