import { arrayMove } from '@dnd-kit/sortable';
import { BoardState, Task } from '../../types';

export const findColumnOfTask = (columns: BoardState['columns'], taskId: string) => {
  return columns.find((col) => col.tasks.some((task) => task.id === taskId));
};

export const moveTask = (
  state: BoardState,
  activeId: string,
  overId: string
): BoardState => {
  const activeColumn = findColumnOfTask(state.columns, activeId);
  const overColumn = state.columns.find((col) => col.id === overId) || findColumnOfTask(state.columns, overId);

  if (!activeColumn || !overColumn) return state;

  const activeIndex = activeColumn.tasks.findIndex((t) => t.id === activeId);
  const overIndex = overColumn.tasks.findIndex((t) => t.id === overId);

  const newColumns = state.columns.map((col) => {
    if (col.id === activeColumn.id && col.id === overColumn.id) {
      return {
        ...col,
        tasks: arrayMove(col.tasks, activeIndex, overIndex),
      };
    }

    if (col.id === activeColumn.id) {
      return {
        ...col,
        tasks: col.tasks.filter((t) => t.id !== activeId),
      };
    }

    if (col.id === overColumn.id) {
      const taskToMove = activeColumn.tasks[activeIndex];
      const newTasks = [...col.tasks];
      newTasks.splice(overIndex >= 0 ? overIndex : newTasks.length, 0, taskToMove);
      return {
        ...col,
        tasks: newTasks,
      };
    }

    return col;
  });

  return { ...state, columns: newColumns };
};
