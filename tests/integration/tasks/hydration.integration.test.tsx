import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import App from '../../../src/App';

describe('Integration - hydration from localStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('hydrates board state from localStorage on startup', async () => {
    const state = {
      columns: [
        { id: 'todo', title: 'To Do', taskIds: ['x1'] },
        { id: 'in-progress', title: 'In Progress', taskIds: [] },
        { id: 'done', title: 'Done', taskIds: [] },
      ],
      tasks: {
        x1: { id: 'x1', title: 'Persisted Task', priority: 'Low', status: 'To Do' },
      },
    };
    localStorage.setItem('boardState', JSON.stringify(state));

    render(<App />);

    // Should display the persisted task
    expect(await screen.findByText('Persisted Task')).toBeTruthy();
  });
});
