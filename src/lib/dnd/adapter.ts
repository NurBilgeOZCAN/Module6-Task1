import { arrayMove } from '@dnd-kit/sortable';
import { BoardState } from '../../types';

export const findColumnOfTask = (columns: BoardState['columns'], taskId: string) => {
  return columns.find((col) => col.taskIds.includes(taskId));
};

export const moveTask = (
  state: BoardState,
  activeId: string,
  overId: string
): BoardState => {
  const activeColumn = findColumnOfTask(state.columns, activeId);
  const overColumn = state.columns.find((col) => col.id === overId) || findColumnOfTask(state.columns, overId);

  if (!activeColumn || !overColumn) return state;

  const activeIndex = activeColumn.taskIds.indexOf(activeId);
  const overIndex = overColumn.taskIds.indexOf(overId);

  const newColumns = state.columns.map((col) => {
    if (col.id === activeColumn.id && col.id === overColumn.id) {
      return {
        ...col,
        taskIds: arrayMove(col.taskIds, activeIndex, overIndex),
      };
    }

    if (col.id === activeColumn.id) {
      return {
        ...col,
        taskIds: col.taskIds.filter((id) => id !== activeId),
      };
    }

    if (col.id === overColumn.id) {
      const newTaskIds = [...col.taskIds];
      const insertIndex = overIndex >= 0 ? overIndex : newTaskIds.length;
      newTaskIds.splice(insertIndex, 0, activeId);
      return {
        ...col,
        taskIds: newTaskIds,
      };
    }

    return col;
  });

  return { ...state, columns: newColumns };
};
