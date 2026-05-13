import { describe, it, expect, vi } from 'vitest';
import { loadBoardState, saveBoardState } from '../localStorage';

describe('localStorage edge cases', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it('returns null and logs when getItem throws', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(localStorage, 'getItem').mockImplementation(() => { throw new Error('denied'); });

    const loaded = loadBoardState();
    expect(loaded).toBeNull();
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });

  it('handles circular state gracefully when saving (invalid JSON)', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    // Create a circular object
    const state: any = { columns: [], tasks: {} };
    state.self = state;

    expect(() => saveBoardState(state)).not.toThrow();
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
