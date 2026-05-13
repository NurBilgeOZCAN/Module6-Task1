# Quickstart: Personal Task Board

## Prerequisites
- Node.js 18+ (recommended)
- npm 8+ or yarn

## Install
Run in the project root:

```bash
npm install
```

## Development
Start the dev server (Vite):

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Tests
Run unit tests (Vitest):

```bash
npm run test
```

## Build
Create a production build:

```bash
npm run build
```

## Expected App Behavior
- The app displays three columns: **To Do**, **In Progress**, **Done**.
- Users can create tasks via the `New Task` button or pressing `n` (when not typing).
- Tasks appear in the `To Do` column after creation; users can drag tasks between columns.
- Users can edit a task by clicking the edit button on a task card; the form pre-fills existing data.
- Deleting a task prompts for confirmation and removes it from state and localStorage.
- All tasks persist across refreshes via `localStorage`.
- Keyboard and ARIA accessibility are supported for primary interactions.

---

Document maintained by: SpecKit agent
Date: 2026-05-08
