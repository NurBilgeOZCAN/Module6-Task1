import { BoardState } from '../types';

export const loadBoardState = (): BoardState | null => {
  const data = localStorage.getItem('boardState');
  return data ? JSON.parse(data) : null;
};

export const saveBoardState = (state: BoardState): void => {
  localStorage.setItem('boardState', JSON.stringify(state));
};