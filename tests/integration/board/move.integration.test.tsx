import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Board from '../../../src/components/Board';
import { moveTask } from '../../../src/lib/dnd/adapter';
import type { BoardState } from '../../../src/types';

describe('Integration - move task via moveTask + Board render', () => {
  it('moves a task from one column to another and Board reflects it', () => {
    const state: BoardState = {
      columns: [
        { id: 'todo', title: 'To Do', taskIds: ['t1'] },
        { id: 'done', title: 'Done', taskIds: [] },
      ],
      tasks: {
        t1: { id: 't1', title: 'Task 1', priority: 'Medium', status: 'To Do' },
      },
    };

    let newState = state;
    const onStateChange = (s: BoardState) => { newState = s; };

    const { rerender } = render(
      <Board state={state} onStateChange={onStateChange} onAddTask={() => {}} onEditTask={() => {}} onDeleteTask={() => {}} />
    );

    // Simulate a DnD move: move 't1' to column 'done' before nothing
    const moved = moveTask(state, 't1', 'done');
    // apply change via onStateChange handler
    onStateChange(moved);

    // rerender with updated state
    rerender(<Board state={newState} onStateChange={onStateChange} onAddTask={() => {}} onEditTask={() => {}} onDeleteTask={() => {}} />);

    // Task should now appear under Done column
    expect(screen.getByLabelText('Done')).toBeTruthy();
    expect(screen.getByText('Task 1')).toBeTruthy();
  });
});
