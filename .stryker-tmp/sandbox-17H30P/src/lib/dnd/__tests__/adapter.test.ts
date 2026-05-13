// @ts-nocheck
import { describe, it, expect } from 'vitest';
import { moveTask } from '../../dnd/adapter';

import type { BoardState } from '../../../types';

describe('moveTask', () => {
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

  it('reorders within the same column', () => {
    const result = moveTask(baseState, 'a', 'c');
    const col = result.columns.find((x) => x.id === 'c1');
    expect(col?.taskIds).toEqual(['b', 'c', 'a']);
  });

  it('moves task to another column before target', () => {
    const result = moveTask(baseState, 'a', 'd');
    const from = result.columns.find((x) => x.id === 'c1');
    const to = result.columns.find((x) => x.id === 'c2');
    expect(from?.taskIds).toEqual(['b', 'c']);
    expect(to?.taskIds).toEqual(['a', 'd']);
  });

  it('returns original state when ids not found', () => {
    const result = moveTask(baseState, 'x', 'y');
    expect(result).toBe(baseState);
  });
});
