import React, { useState, useEffect } from 'react';
import Column from './Column';
import { loadBoardState, saveBoardState } from '../utils/localStorage';
import { BoardState } from '../types';

const Board: React.FC = () => {
  const [board, setBoard] = useState<BoardState>(loadBoardState() || { columns: [] });

  useEffect(() => {
    saveBoardState(board);
  }, [board]);

  const addColumn = (name: string) => {
    setBoard({
      ...board,
      columns: [...board.columns, { id: Date.now().toString(), name, tasks: [] }],
    });
  };

  return (
    <div className="board">
      {board.columns.map((column) => (
        <Column key={column.id} column={column} />
      ))}
      <button onClick={() => addColumn('New Column')}>Add Column</button>
    </div>
  );
};

export default Board;