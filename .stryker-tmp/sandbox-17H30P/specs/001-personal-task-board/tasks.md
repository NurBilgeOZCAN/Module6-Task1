### Tasks

Following the constitution's Testing Principles, all tasks follow Test-Driven Development (TDD) with RED-GREEN-REFACTOR cycle. Tests are written first, then minimal implementation, then refactoring while maintaining coverage.

## Unit Test Tasks (RED Phase)

#### Setup & Infrastructure
- [ ] UT001 Write failing unit tests for localStorage utilities in `tests/unit/utils/localStorage.test.ts` (save/load/error handling)
- [ ] UT002 Write failing unit tests for shared TypeScript types validation
- [ ] UT003 Write failing unit tests for DnD adapter in `tests/unit/lib/dnd/`

#### Components
- [ ] UT004 Write failing unit tests for Board component in `tests/unit/components/Board.test.tsx` (rendering, state updates)
- [ ] UT005 Write failing unit tests for Column component in `tests/unit/components/Column.test.tsx` (task filtering, display)
- [ ] UT006 Write failing unit tests for TaskCard component in `tests/unit/components/TaskCard.test.tsx` (display, interactions)
- [ ] UT007 Write failing unit tests for TaskForm component in `tests/unit/components/TaskForm.test.tsx` (create/edit modes, validation)

#### Utilities & Logic
- [ ] UT008 Write failing unit tests for state management actions (CREATE/UPDATE/DELETE/MOVE)
- [ ] UT009 Write failing unit tests for keyboard shortcut handler (n key, focus guarding)
- [ ] UT010 Write failing unit tests for form validation logic in `tests/unit/utils/validation.test.ts`
- [ ] UT011 Write failing unit tests for state selectors and derived data in `tests/unit/utils/selectors.test.ts`
- [ ] UT012 Write failing unit tests for utility functions (date formatting, priority sorting)
- [ ] UT013 Write failing unit tests for component props validation and TypeScript types

## Integration Test Tasks (RED Phase)

#### Task Management
- [ ] IT001 Write failing integration tests for task CRUD operations in `tests/integration/tasks/crud.test.ts`

#### Board Management
- [ ] IT002 Write failing integration tests for drag-and-drop task movement in `tests/integration/board/dnd.test.ts`

#### Persistence
- [ ] IT003 Write failing integration tests for localStorage persistence in `tests/integration/persistence/storage.test.ts`

#### Performance
- [ ] IT004 Write failing integration tests for performance with 500 tasks (render counts, memoization)

## E2E Test Tasks (RED Phase)

#### Critical User Journeys
- [ ] E2E001 Write failing E2E test for create task journey in `tests/e2e/create-task.spec.ts`
- [ ] E2E002 Write failing E2E test for manage board journey in `tests/e2e/manage-board.spec.ts`

#### Additional E2E Tests
- [ ] E2E003 Write failing E2E test for responsive layouts in `tests/e2e/responsive-layout.spec.ts` (mobile/tablet/desktop viewport checks)
- [ ] E2E004 Write failing E2E test for keyboard navigation and shortcut in `tests/e2e/keyboard-navigation.spec.ts` (shortcut `n`, focus handling, DnD via keyboard)
- [ ] E2E005 Write failing E2E accessibility smoke test in `tests/e2e/accessibility.spec.ts` (axe/critical violations on main views)

## Implementation Tasks (GREEN Phase)

#### Phase 1: Setup
- [ ] IMP001 Initialize the project with Vite and TypeScript
- [ ] IMP002 Install dependencies: React, Tailwind CSS, @dnd-kit, Jest, Playwright, Stryker
- [ ] IMP003 Set up the project structure (folders for components, types, utils, tests)
- [ ] IMP004 Configure Jest + ts-jest, Playwright, Stryker, ESLint, TypeScript strict mode
- [ ] IMP005 Add basic App.tsx placeholder and mounting

#### Phase 2: Core Infrastructure
- [ ] IMP006 Implement shared TypeScript types in `src/types/index.ts`
- [ ] IMP007 Implement localStorage utilities in `src/utils/localStorage.ts` (make UT001 pass)
- [ ] IMP008 Implement DnD adapter in `src/lib/dnd/` (make UT003 pass)

#### Phase 3: Components
- [ ] IMP009 Implement Board component in `src/components/Board.tsx` (make UT004 pass)
- [ ] IMP010 Implement Column component in `src/components/Column.tsx` (make UT005 pass)
- [ ] IMP011 Implement TaskCard component in `src/components/TaskCard.tsx` (make UT006 pass)
- [ ] IMP012 Implement TaskForm component in `src/components/TaskForm.tsx` (make UT007 pass)

#### Phase 4: State & Interactions
- [ ] IMP013 Implement state management with useReducer (make UT008 pass)
- [ ] IMP014 Implement keyboard shortcut handler (make UT009 pass)
- [ ] IMP015 Integrate drag-and-drop functionality (make IT004 pass)
- [ ] IMP016 Wire up localStorage persistence (make IT006-IT007 pass)

#### Phase 5: Features & Polish
- [ ] IMP017 Implement task CRUD operations (make IT001-IT003 pass)
- [ ] IMP018 Apply Tailwind CSS styling to all components
- [ ] IMP019 Add ARIA attributes and keyboard accessibility
- [ ] IMP020 Optimize performance for 500 tasks (make IT008 pass)
- [ ] IMP021 Implement responsive design (make E2E003 pass)
- [ ] IMP022 Final polish and cross-browser testing

## Refactor Tasks (REFACTOR Phase)

#### Code Quality
- [ ] REF001 Extract reusable test helpers (createTestUser, setupMockAPI)
- [ ] REF002 Apply React.memo and useMemo optimizations
- [ ] REF003 Refactor components for better separation of concerns
- [ ] REF004 Add error boundaries and robust error handling

#### Testing Quality
- [ ] REF005 Ensure all tests follow AAA pattern and are deterministic
- [ ] REF006 Remove any tautological assertions and test internals
- [ ] REF007 Verify 80% line / 75% branch coverage achieved
- [ ] REF008 Achieve 75% mutation score with Stryker

#### Documentation
- [ ] REF009 Update README with testing commands and coverage badges
- [ ] REF010 Document component APIs and test helpers
- [ ] REF011 Add performance benchmark documentation

## Quality Gates
- [ ] All unit tests pass (<1s execution)
- [ ] All integration tests pass (<5s execution)
- [ ] All E2E tests pass with Playwright
- [ ] Coverage: 80% line, 75% branch, 75% mutation
- [ ] TypeScript strict mode: zero errors
- [ ] ESLint: zero warnings/errors
- [ ] Accessibility: zero critical axe violations
- [ ] Manual testing: all features work across devices
