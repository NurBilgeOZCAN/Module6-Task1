// @ts-nocheck
import { describe, it, expect } from 'vitest';
import { moveTask } from '../../dnd/adapter';
import type { BoardState } from '../../../types';

describe('moveTask edge cases', () => {
  const baseState: BoardState = {
    columns: [
      { id: 'c1', title: 'To Do', taskIds: ['a', 'b', 'c'] },
      { id: 'c2', title: 'In Progress', taskIds: ['d'] },
    ],
    tasks: {
      a: { id: 'a', title: 'A', priority: 'Medium', status: 'To Do' },
      b: { id: 'b', title: 'B', priority: 'Medium', status: 'To Do' },
      c: { id: 'c', title: 'C', priority: 'Medium', status: 'To Do' },
      d: { id: 'd', title: 'D', priority: 'Medium', status: 'In Progress' },
    },
  };

  it('appends to column when overId is a column id (boundary case)', () => {
    const result = moveTask(baseState, 'a', 'c2');
    const to = result.columns.find((x) => x.id === 'c2');
    expect(to?.taskIds).toEqual(['d', 'a']);
  });

  it('exact ordering when moving within same column to adjacent position', () => {
    const result = moveTask(baseState, 'b', 'a');
    const col = result.columns.find((x) => x.id === 'c1');
    // b moved before a -> exact array
    expect(col?.taskIds).toEqual(['b', 'a', 'c']);
  });

  it('returns original state when overId is unknown (invalid input)', () => {
    const result = moveTask(baseState, 'a', 'unknown-id');
    expect(result).toBe(baseState);
  });
});
