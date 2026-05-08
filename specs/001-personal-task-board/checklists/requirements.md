# Requirements Quality Checklist

Use this checklist to confirm the feature meets specification and quality gates.

- Functional Completeness
  - [ ] Create tasks (title required) — verified
  - [ ] Edit tasks (form pre-fills existing data) — verified
  - [ ] Delete tasks (confirmation prompt) — verified
  - [ ] Move tasks between columns (drag-and-drop) — verified
  - [ ] Keyboard shortcut `n` opens `TaskForm` (not when typing) — verified

- Persistence
  - [ ] Tasks persist after refresh via `localStorage`.
  - [ ] `taskboard:state:v1` schema is used and documented.

- Accessibility
  - [ ] Columns and cards have ARIA labels where necessary.
  - [ ] All interactive controls are reachable via keyboard.
  - [ ] Focus states are visible and logical.
  - [ ] Modal/dialog focus is trapped while open and returns on close.
  - [ ] Basic automated a11y tests pass (testing-library or axe checks).

- Performance
  - [ ] App performs smoothly with up to 500 tasks.
  - [ ] `TaskCard` is memoized and derived lists are memoized.
  - [ ] No unnecessary re-renders during move/edit/delete.

- Responsive UI
  - [ ] Layout adapts to narrow/mobile widths.
  - [ ] Touch drag-and-drop is usable on mobile.

- Testing & Governance
  - [ ] Unit tests exist for `Board`, `Column`, `TaskCard`, `TaskForm`, and localStorage utils.
  - [ ] Tests are run in CI and pass locally.
  - [ ] The implementation adheres to the project constitution.

---

Document maintained by: SpecKit agent
Date: 2026-05-08
