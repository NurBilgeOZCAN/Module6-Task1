### Tasks

#### Phase 1: Setup
- [ ] T001 Initialize the project with Vite and TypeScript.
- [ ] T002 Install dependencies: React, Tailwind CSS, `react-beautiful-dnd`, `vitest`, `@testing-library/react`.
- [ ] T003 Set up the project structure (folders for components, types, and utilities).
- [ ] T004 Configure Tailwind CSS and Vitest for the project.
 - [ ] T035 Configure ESLint and Prettier for code quality and consistency.
 - [ ] T036 Add a basic `App.tsx` placeholder and route mounting for the board.

#### Phase 2: Core Components
- [ ] T005 Create the `Board` component in `src/components/Board.tsx` with unit tests.
- [ ] T006 Create the `Column` component in `src/components/Column.tsx` with unit tests.
- [ ] T007 Create the `TaskCard` component in `src/components/TaskCard.tsx` with unit tests.
- [ ] T008 Define shared TypeScript types in `src/types/index.ts`.
- [ ] T009 Implement localStorage utilities in `src/utils/localStorage.ts` with unit tests for saving and loading.

#### Phase 3: Styling
- [ ] T010 Apply global styles using Tailwind CSS.
- [ ] T011 Style the `Board` component for a clean layout.
- [ ] T012 Style the `Column` component for a modern look.
- [ ] T013 Style the `TaskCard` component with priority indicators and responsive design.

#### Phase 4: Drag-and-Drop
- [ ] T014 Integrate `react-beautiful-dnd` into the project.
- [ ] T015 Implement drag-and-drop functionality in the `Board` component.
- [ ] T016 Handle `onDragEnd` to update the board state when tasks are moved.
- [ ] T017 Test drag-and-drop interactions for usability and accessibility.
 - [ ] T029 Implement global `n` keyboard shortcut to open `TaskForm` (ignore when typing).
 - [ ] T030 Add unit test for the `n` keyboard shortcut (ensures focus guard and form open behavior).

#### Phase 5: Finalization & Extended Features
- [ ] T018 Create the `TaskForm` component for creating/editing tasks with unit tests.
- [ ] T019 Implement Edit flow: open form with task data, save updates to state and localStorage.
- [ ] T020 Implement Delete flow: remove task from state and localStorage after confirmation.
- [ ] T021 Validate task fields (e.g., title, priority) before saving.
- [ ] T022 Optimize performance for rendering up to 500 tasks.
- [ ] T023 Test responsiveness across common screen sizes.
- [ ] T024 Test edge cases (e.g., empty columns, invalid input, data loss scenarios).
- [ ] T025 Polish the UI for a portfolio-ready presentation.

#### Performance & Accessibility Tasks
- [ ] T031 Apply `React.memo` and `useMemo` optimizations for `TaskCard` and derived lists; measure render impact.
- [ ] T032 Add ARIA labels and attributes to columns, task cards, buttons, dialogs, and drag regions.
- [ ] T033 Implement keyboard-accessible interactions for create/edit/delete/move (including keyboard DnD support where feasible).
- [ ] T034 Add accessibility verification tests and manual a11y checklist (focus states, contrast, keyboard navigation).

#### Final Phase: Polish & Cross-Cutting Concerns
- [ ] T026 Ensure consistent styling and spacing across all components.
- [ ] T027 Verify localStorage persistence works correctly (save/load state).
- [ ] T028 Conduct a final manual test for all features.