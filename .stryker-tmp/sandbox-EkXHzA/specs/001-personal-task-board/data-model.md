# Data Model: Personal Task Board

## Task Entity
The primary data entity is the `Task`.

Task fields:
- `id` (string, UUID) — Unique identifier for the task.
- `title` (string) — Short, required title.
- `description` (string | optional) — Optional longer description.
- `status` (enum) — One of: `"To Do" | "In Progress" | "Done"`.
- `priority` (enum) — `"High" | "Medium" | "Low"`.
- `dueDate` (string | optional) — ISO 8601 date string (e.g., 2026-05-08).
- `createdAt` (string) — ISO 8601 timestamp when the task was created.
- `updatedAt` (string) — ISO 8601 timestamp when the task was last updated.

Example TypeScript type:

```typescript
export type Task = {
  id: string;
  title: string;
  description?: string;
  status: 'To Do' | 'In Progress' | 'Done';
  priority: 'High' | 'Medium' | 'Low';
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
};
```

## Board State
Board state is an object combining task storage and a column ordering for efficient rendering and DnD operations.

```typescript
export type Column = {
  id: string;
  title: string;
  taskIds: string[];
};

export type BoardState = {
  tasks: Record<string, Task>;
  columns: Column[]; // three columns: To Do, In Progress, Done
};
```

## localStorage Schema
- Key: `taskboard:state:v1`
- Value: JSON stringified `BoardState`.

Example stored JSON:

```json
{
  "tasks": {
    "task-1": {"id":"task-1","title":"Example","status":"To Do","priority":"Medium","createdAt":"...","updatedAt":"..."}
  },
  "columns": [
    {"id":"col-1","title":"To Do","taskIds":["task-1"]},
    {"id":"col-2","title":"In Progress","taskIds":[]},
    {"id":"col-3","title":"Done","taskIds":[]}
  ]
}
```

## State Transitions (Actions)
The app uses a `useReducer`-style state machine. Actions include:

- `HYDRATE_STATE` { payload: BoardState }
  - Applies persisted state on startup.

- `CREATE_TASK` { payload: Task }
  - Adds `Task` to `tasks` and pushes its `id` to `columns[0].taskIds` (To Do).
  - Sets `createdAt` and `updatedAt` timestamps.

- `UPDATE_TASK` { payload: { id, changes } }
  - Merges `changes` into `tasks[id]`, updates `updatedAt`.

- `DELETE_TASK` { payload: { id } }
  - Removes `id` from `tasks` and from any `column.taskIds` array.

- `MOVE_TASK` { payload: { sourceColumnId, destColumnId, sourceIndex, destIndex, taskId } }
  - Removes taskId from source column array and inserts into destination column array at `destIndex`.
  - Updates `tasks[taskId].status` to match the destination column title and sets `updatedAt`.

## Persistence Behavior
- On every state change, serialize `BoardState` and write to localStorage under `taskboard:state:v1`.
- Use `try-catch` for read/write and fall back to an empty default state on parse errors.
- For simultaneous updates within the same session, the last reducer action wins (last-write-wins).

## Versioning
- The schema uses a versioned key (`v1`) to allow future migrations. If migration is required, detect older versions and run an in-app migration function before hydration.

---

Document maintained by: SpecKit agent
Date: 2026-05-08
