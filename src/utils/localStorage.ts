import { BoardState } from '../types';

export const loadBoardState = (): BoardState | null => {
  try {
    const data = localStorage.getItem('boardState');
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error('Failed to load board state from localStorage', err);
    return null;
  }
};

export const saveBoardState = (state: BoardState): void => {
  try {
    localStorage.setItem('boardState', JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save board state to localStorage', err);
  }
};