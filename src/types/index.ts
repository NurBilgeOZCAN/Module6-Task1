export interface Task {
  id: string;
  title: string;
  description: string;
}

export interface Column {
  id: string;
  name: string;
  tasks: Task[];
}

export interface BoardState {
  columns: Column[];
}

export interface ColumnProps {
  column: Column;
}

export interface TaskProps {
  task: Task;
}