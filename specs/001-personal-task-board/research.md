# Research & Decisions: Personal Task Board

This document records decisions and rationale for the key technical choices in the Personal Task Board feature.

## React + Vite + TypeScript
- Decision: Use React with TypeScript and Vite as the dev/build tool.
- Rationale: React provides a component model ideal for a small SPA. TypeScript adds type safety and clearer APIs. Vite offers fast cold starts and instant HMR, improving developer experience for a portfolio project.
- Trade-offs: Vite requires modern Node, but the productivity benefits and small bundle output justify the choice.

## Tailwind CSS
- Decision: Use Tailwind CSS for styling.
- Rationale: Tailwind enables rapid, utility-driven styling that keeps CSS local to components and reduces global stylesheet drift. It helps produce a clean, responsive UI quickly for a portfolio demo.
- Trade-offs: Utility classes add markup verbosity; documentation is provided in `plan.md` to explain rationale.

## localStorage Persistence
- Decision: Use browser `localStorage` for persistence.
- Rationale: The app is single-user and should work offline; `localStorage` is simple, widely supported, and sufficient for small datasets. It avoids backend complexity.
- Trade-offs: No cross-device sync; limited storage size (~5MB). Documented behaviors include last-write-wins within the same session.

## Drag-and-Drop Approach
- Decision: Use `react-beautiful-dnd` (or a similar lightweight, accessible DnD library).
- Rationale: `react-beautiful-dnd` provides accessible drag-and-drop with keyboard support and a solid API for reordering within and between lists. It integrates well with React state and is well-documented.
- Trade-offs: Adds a dependency; consider smaller alternatives if bundle size becomes a concern. Ensure ARIA and keyboard behaviors are explicitly tested.

## Testing: Vitest + React Testing Library
- Decision: Use Vitest as the test runner and React Testing Library (RTL) for component tests.
- Rationale: Vitest is fast, Vite-native, and well-suited for this stack. RTL focuses on testing UI behavior over implementation details, aligning with accessibility and user-focused testing.
- Trade-offs: Requires initial setup; benefits include fast feedback and alignment with the constitution requirement to unit test components.

## Accessibility Strategy
- Decision: Prioritize semantic HTML, ARIA attributes where needed, keyboard interactions, and automated/ manual a11y checks.
- Rationale: Constitution mandates accessibility. We'll include ARIA labels, ensure focus management for modals/forms, and verify keyboard drag-and-drop where feasible. Automated checks (axe or testing-library a11y helpers) plus manual keyboard testing ensure coverage.

## Performance Strategy
- Decision: Prioritize memoization and targeted state updates. Only add virtualization (e.g., `react-window`) if profiling indicates need.
- Rationale: For up to 500 tasks, careful memoization (`React.memo`), `useMemo`, and efficient reducer updates typically suffice. Virtualization adds complexity and should be a last resort.


---

Document maintained by: SpecKit agent
Date: 2026-05-08
