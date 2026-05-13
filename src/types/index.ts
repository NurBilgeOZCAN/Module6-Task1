export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate?: string;
  status: 'To Do' | 'In Progress' | 'Done';
}

export interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

export interface BoardState {
  columns: Column[];
  tasks: Record<string, Task>;
}

export interface ColumnProps {
  column: Column;
  tasks: Task[];
}

export interface TaskProps {
  task: Task;
}