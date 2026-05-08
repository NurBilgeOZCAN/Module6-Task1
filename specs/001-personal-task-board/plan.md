# Technical Implementation Plan: Personal Task Board

## Technical Context
The Personal Task Board is a React + TypeScript single-page application designed for individual users to manage tasks in a Kanban-style board. The application will use Vite for fast development, Tailwind CSS for styling, and localStorage for data persistence. Drag-and-drop functionality will be implemented using `@dnd-kit` primitives behind a small adapter.

## Project Architecture
- **Frontend Framework**: React (functional components with hooks)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React's `useState` and `useReducer` hooks
- **Persistence**: localStorage
 - **Drag-and-Drop**: `@dnd-kit` primitives (implemented via an adapter)
- **Testing**: Vitest and React Testing Library (mandatory per constitution)

## Component Structure
- **Board**: Main container for columns and tasks. Holds the shared state and logic for moving tasks.
- **Column**: Represents a task category (To Do, In Progress, Done). Displays a list of filtered tasks.
- **TaskCard**: Displays individual task details. Provides actions for editing and deleting.
- **TaskForm**: Modal or inline form for creating/editing tasks. Validates inputs before submission.
- **localStorage Utilities**: Helper functions for robust JSON parsing and persistent storage of `BoardState`.
- **Shared Types**: TypeScript types for tasks, columns, and board state.

## Shared TypeScript Types
```typescript
type Task = {
  id: string;
  title: string;
  description?: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate?: string;
  status: 'To Do' | 'In Progress' | 'Done';
};

type Column = {
  id: string;
  title: string;
  taskIds: string[];
};

type BoardState = {
  columns: Column[];
  tasks: Record<string, Task>;
};
```

## Data Model
- **Tasks**: Stored as objects with unique IDs.
- **Columns**: Contain an array of task IDs to maintain order.
- **Board State**: Combines tasks and columns for easy state management.

## State Management Approach
- Use `useReducer` for managing complex state transitions (e.g., moving tasks between columns, editing, deleting).
- Define actions: `CREATE_TASK`, `UPDATE_TASK`, `DELETE_TASK`, `MOVE_TASK`, `HYDRATE_STATE`.

## Edit/Delete Behavior
- **Editing**: Clicking an edit button on the `TaskCard` opens the `TaskForm` in edit mode. The form is pre-filled with the current task's attributes. On save, the `UPDATE_TASK` action updates the task in the central state and triggers a persistent save.
- **Deleting**: A delete button on the `TaskCard` triggers a confirmation prompt. Upon user approval, the `DELETE_TASK` action removes the task from the state and localStorage.

## localStorage Persistence Strategy
- Save the entire board state as a JSON string in localStorage.
- Load the board state from localStorage on app initialization.
- Use `try-catch` to handle potential errors during read/write operations.

## Drag-and-Drop Strategy
- Use `@dnd-kit/core` + `@dnd-kit/sortable` for drag-and-drop primitives implemented behind a small adapter (`src/lib/dnd/*`).
- Implement drop handlers to update the board state when tasks are moved, and ensure keyboard accessibility and ARIA attributes are present.

## Responsive UI Strategy
- Use Tailwind CSS utility classes for responsive design.
- Optimize layout for both desktop and mobile devices.
- Test responsiveness manually across common screen sizes.

## Tailwind Rationale
- Tailwind CSS is chosen for fast, consistent, and responsive styling with minimal custom CSS. It enables utility-driven layouts, reduces global CSS drift, and keeps styles modular and maintainable. This choice supports the constitution principles (readable code and minimal dependencies) and is documented here for transparency.

This approach is now constitution-compliant: the project constitution permits utility-first frameworks (e.g., Tailwind) when they reduce custom CSS complexity and maintain accessibility and responsiveness.

## Drag-and-Drop Strategy (Updated)
- Use `@dnd-kit/core` and related `@dnd-kit` utilities instead of `react-beautiful-dnd` (the latter is deprecated). Implement the DnD layer behind a small abstraction (`src/lib/dnd/*`) so the implementation can be swapped later with minimal changes.
- Ensure keyboard accessibility and ARIA attributes are provided by the DnD adapter and supplement with custom focus management as needed.

## Performance Targets (Added)
- Initial render: The UI should remain responsive with 500 tasks. Use a deterministic synthetic dataset (seeded generator) for testing; in CI prefer regression checks (render-count assertions, relative timing deltas) rather than machine-dependent absolute timings.
- Interaction latency: Drag/move interactions should feel immediate and avoid unnecessary full-list re-renders. Use `React.memo`, `useMemo`, and targeted reducer updates. Implement tests that assert render counts (no full-list re-render on single-task move) and verify relative visual-update responsiveness in the harness.

## Accessibility Targets (Added)
- Keyboard navigation for create/edit/delete/move must be supported and tested.
- Visible focus states present on interactive controls.
- ARIA labels/roles provided for columns, task cards, dialogs/forms, and drag regions.
- Testing strategy includes RTL tests preferring semantic queries and an `axe` or `jest-axe` smoke test in CI.

## Performance Strategy
- Apply `React.memo` to `TaskCard` to prevent unnecessary re-renders when unrelated state changes occur.
- Use `useMemo` for deriving per-column task lists and other computed values to avoid expensive recalculations.
- Keep reducer updates targeted: update only the task and column arrays affected by an action to minimize changes fed to React.
- Profile first; only consider list virtualization (e.g., `react-window`) if profiling shows rendering issues at scale.

## Keyboard Shortcuts
- Implement a global keyboard handler for the `n` key to open the `TaskForm` in create mode.
- The handler must ignore events when focus is inside `input`, `textarea`, or elements with `contenteditable` to avoid interrupting typing.
- Add unit tests to verify the shortcut behavior and the focus-guarding logic.

## Implementation Phases
### Phase 1: Setup
1. Initialize the project with Vite and TypeScript.
2. Install dependencies: React, Tailwind CSS, `@dnd-kit/core`, `@dnd-kit/sortable`, `vitest`, `@testing-library/react`.
3. Set up the project structure and testing environment.

### Phase 2: Core Components & Logic
1. Define shared TypeScript types.
2. Implement localStorage utilities with unit tests.
3. Create `Board`, `Column`, and `TaskCard` components with basic unit tests.

### Phase 3: Styling & Interactive Features
1. Apply global styles using Tailwind CSS.
2. Integrate `@dnd-kit` via the DnD adapter and implement drag-and-drop.
3. Implement `TaskForm` for creating and editing tasks.

### Phase 4: persistence & Comprehensive Testing
1. Wire up state management to localStorage.
2. Write comprehensive unit tests for all components and state logic.

### Phase 5: Finalization
1. Optimize performance for up to 500 tasks.
2. Test responsiveness and edge cases.
3. Conduct final polish for portfolio readiness.

## Risks and Edge Cases
- **Task Overload**: Optimize rendering for large task lists.
- **Invalid Input**: Validate task fields before saving.
- **Data Loss**: Use `try-catch` for localStorage operations.
 - **Concurrent Edits**: Not applicable (single-user application). Local updates follow a last-write-wins model within the same browser session.

---

This plan ensures a clean, maintainable implementation aligned with the project principles.