### Tasks

#### Phase 1: Setup
- [x] T001 Initialize the project with Vite and TypeScript.
- [x] T002 Install dependencies: React, Tailwind CSS, `@dnd-kit/core`, `@dnd-kit/sortable`, `vitest`, `@testing-library/react`.
- [x] T003 Set up the project structure (folders for components, types, and utilities).
- [x] T004 Configure Tailwind CSS and Vitest for the project.
- [x] T035 Configure ESLint and Prettier for code quality and consistency.
- [x] T036 Add a basic `App.tsx` placeholder and route mounting for the board.

**Phase ordering notes:** Complete T001 → T002 → T003 → T004 before implementing component styling and DnD (Phase 3/4).

#### Phase 2: Core Components
- [x] T005 Create the `Board` component in `src/components/Board.tsx` with unit tests.
- [x] T006 Create the `Column` component in `src/components/Column.tsx` with unit tests.
- [x] T007 Create the `TaskCard` component in `src/components/TaskCard.tsx` with unit tests.
- [x] T008 Define shared TypeScript types in `src/types/index.ts`.
- [x] T009 Implement localStorage utilities in `src/utils/localStorage.ts` with unit tests for saving and loading.

#### Phase 3: Styling
- [x] T010 Apply global styles using Tailwind CSS.
- [x] T011 Style the `Board` component for a clean layout.
- [x] T012 Style the `Column` component for a modern look.
- [x] T013 Style the `TaskCard` component with priority indicators and responsive design.

#### Phase 4: Drag-and-Drop
- [x] T014 Integrate `@dnd-kit/core` and related `@dnd-kit` utilities behind a small adapter (`src/lib/dnd/*`).
- [x] T015 Implement drag-and-drop functionality in the `Board` component using the adapter.
- [x] T016 Update state on drag end / drop and ensure targeted updates (avoid full-list re-renders).
- [x] T017 Test drag-and-drop interactions for usability and accessibility, including keyboard DnD flows.
- [x] T029 Implement global `n` keyboard shortcut to open `TaskForm` (ignore when typing).
- [x] T030 Add unit test for the `n` keyboard shortcut (ensures focus guard and form open behavior).

#### Phase 5: Finalization & Extended Features
- [x] T018 Create the `TaskForm` component for creating/editing tasks with unit tests.
- [x] T019 Implement Edit flow: open form with task data, save updates to state and localStorage.
- [x] T020 Implement Delete flow: remove task from state and localStorage after confirmation.
- [x] T021 Validate task fields (e.g., title, priority) before saving.
- [x] T022 Optimize performance for rendering up to 500 tasks. See **T037** for deterministic verification and CI checks.
- [x] T023 Test responsiveness across common screen sizes.
- [x] T024 Test edge cases (e.g., empty columns, invalid input, data loss scenarios).
- [x] T025 Polish the UI for a portfolio-ready presentation.

#### Performance & Accessibility Tasks
- [x] T031 Apply `React.memo` and `useMemo` optimizations for `TaskCard` and derived lists; measure render impact.
- [x] T032 Add ARIA labels and attributes to columns, task cards, buttons, dialogs, and drag regions.
- [x] T033 Implement keyboard-accessible interactions for create/edit/delete/move (including keyboard DnD support where feasible).
- [x] T034 Add accessibility verification tests and manual a11y checklist (focus states, contrast, keyboard navigation).
- [x] T037 Deterministic performance verification: implement a CI-friendly verification harness that validates performance without relying on absolute millisecond thresholds.
- Generate a seeded synthetic dataset of 500 tasks (deterministic RNG seed) for all performance tests.
- Verify create, edit, delete, and move operations avoid unnecessary re-renders by using render-count assertions (e.g., React Profiler test doubles, instrumentation, or test-utils hooks).
- Implement regression checks to detect performance regressions across CI runs (compare render counts or relative deltas to a baseline snapshot), not absolute timings.
- Verify task grouping and filtered views use memoized derived state (`useMemo`, selectors) where appropriate.
- Ensure drag/move interactions update only the affected task and related column state; assert there is no full-board or full-list re-render when a single task is moved.
- Document the deterministic test harness and include instructions for running it in CI. Explicitly avoid environment-specific assumptions, platform-specific timing behavior, and absolute timing thresholds.
- [x] T038 Add a concrete accessibility checklist entry in `checklists/requirements.md` and connect verification tests (axe smoke test + manual checklist).
 - [x] T039 Add CI job: run `vitest` and fail on test failures.
 - [x] T040 Add CI axe smoke test: run `jest-axe` or `axe` checks and fail CI on critical accessibility violations.

#### Final Phase: Polish & Cross-Cutting Concerns
- [x] T026 Ensure consistent styling and spacing across all components.
- [x] T027 Verify localStorage persistence works correctly (save/load state).
- [x] T028 Conduct a final manual test for all features.
