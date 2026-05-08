# Contracts / API

This project is a frontend-only single-page application and does not require backend API contracts.

## Local Storage Contract
- Key: `taskboard:state:v1`
- Value: JSON-serialized `BoardState` as documented in `data-model.md`.
- Consumers: the client application only.
- Migration: If schema changes, increment the `v` suffix and provide an in-app migration routine.

## UI Interaction Contract
Because there's no backend, document the expected UI interaction contract for external reviewers and automated checks:
- Creating a task: `TaskForm` open -> submit -> task appears in `To Do` column and is persisted.
- Editing a task: open `TaskForm` with existing data -> submit -> task updates and persists.
- Deleting a task: confirm deletion -> task removed from UI and persisted state.
- Moving a task: drag or keyboard move -> task relocates between columns and persists status update.

No external APIs or network contracts are required.

---

Document maintained by: SpecKit agent
Date: 2026-05-08
