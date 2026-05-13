// @ts-nocheck
import { describe, it, expect, vi } from 'vitest';
import { saveBoardState } from '../localStorage';

describe('localStorage error handling', () => {
  it('handles setItem throwing without throwing', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const spy = vi.spyOn(localStorage, 'setItem').mockImplementation(() => { throw new Error('quota'); });

    expect(() => saveBoardState({ columns: [], tasks: {} })).not.toThrow();
    expect(consoleSpy).toHaveBeenCalled();

    // restore
    spy.mockRestore();
    consoleSpy.mockRestore();
  });
});
