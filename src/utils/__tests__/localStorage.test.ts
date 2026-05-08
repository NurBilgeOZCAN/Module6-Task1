import { describe, it, expect, beforeEach, vi } from 'vitest';
import { loadBoardState, saveBoardState } from '../localStorage';
import { BoardState } from '../../types';

describe('localStorage utilities', () => {
  const mockState: BoardState = {
    columns: [
      {
        id: 'col-1',
        name: 'To Do',
        tasks: [{ id: 'task-1', title: 'Task 1', description: 'Desc 1' }],
      },
    ],
  };

  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('saves and loads board state', () => {
    saveBoardState(mockState);
    const loadedState = loadBoardState();
    expect(loadedState).toEqual(mockState);
  });

  it('returns null if no state is saved', () => {
    const loadedState = loadBoardState();
    expect(loadedState).toBeNull();
  });

  it('handles corrupted data gracefully', () => {
    localStorage.setItem('boardState', 'invalid-json');
    const loadedState = loadBoardState();
    expect(loadedState).toBeNull();
  });
});
