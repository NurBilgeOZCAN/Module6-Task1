# Task-Board6 Constitution

## Core Principles

### I. Readable Code
Code must be clean, well-documented, and follow consistent coding standards. Use TypeScript for type safety and clarity. Avoid overly complex patterns.

### II. Responsive UI/UX
The application must be fully responsive, ensuring usability across devices and screen sizes. Prioritize user-friendly design and intuitive navigation.

### III. Accessibility-Friendly Components
All components must adhere to accessibility standards (e.g., WCAG). Use semantic HTML and ARIA attributes where necessary.

### IV. LocalStorage Persistence
Persist user data locally using `localStorage` for a seamless user experience. Ensure data integrity and avoid overloading storage.

### V. Minimal Dependencies
Favor built-in browser APIs and lightweight libraries. Avoid unnecessary dependencies to reduce bundle size and improve maintainability.

Tailwind and Utility-First CSS: Utility-first frameworks such as Tailwind CSS are explicitly permitted when they demonstrably improve consistency, reduce custom CSS surface area, and keep styles maintainable and minimal. Use Tailwind only when the team documents the rationale and ensures styles remain accessible, responsive, and easy to maintain. When used, follow these rules:
- Keep component styles small and composable (avoid large global overrides).
- Ensure accessible defaults (visible focus, sufficient contrast) and document any deviations.
- Keep a small design token set and avoid duplicative utilities.

### VI. Clear File Organization
Organize files logically by feature or domain. Use clear naming conventions and maintain a predictable folder structure.

### VII. Security Best Practices
Avoid hardcoded secrets. Sanitize user inputs and follow secure coding practices to prevent vulnerabilities.


## Testing Principles

### Philosophy
Adopt TDD with a RED-GREEN-REFACTOR workflow focused on observable behavior. Prioritize fast, small unit tests; add focused integration tests for state and DnD interactions; reserve Playwright E2E for critical user journeys only.

### Coverage
Targets: 80% line coverage and 75% branch coverage. Follow the testing pyramid: ~70% unit, ~20% integration, ~10% E2E. Enforce coverage checks in CI pipelines.

### Organization
Keep tests under `tests/` mirroring `src/` (`tests/unit/`, `tests/integration/`, `tests/e2e/`). Component helpers or tightly-coupled small unit tests may live alongside source in `src/**/__tests__`, but prefer centralized `tests/` for CI clarity.

### Naming
Unit/integration: `ComponentName.test.tsx`. E2E: `feature-name.spec.ts`. Use `describe('X')` and `it('should ...')` for behavior-focused names.

### Anatomy
Follow Arrange-Act-Assert. Use `beforeEach` for isolated setup. Keep tests independent, deterministic, and single-purpose.

### Mocking
Mock external networks/services (use `msw` or `vi` network stubs). Do not mock internal logic—test it directly. Use fixtures for complex data and stable test doubles for time and randomness.

### Quality Criteria
Tests must be fast (unit <1s), deterministic, and meaningful (no tautologies). Avoid flaky selectors; prefer semantic queries (`getByRole`, `getByLabelText`). Aim for maintainable assertions that validate behavior, not implementation.

### Tools
Vitest + Testing Library for unit/integration; Playwright for E2E; `@testing-library/jest-dom` for DOM matchers; `msw` for network mocking; Stryker for mutation testing. Run `vitest --coverage` in CI and gate merges on coverage/mutation thresholds.

## Additional Constraints

### Technology Stack
- React (with functional components and hooks)
- TypeScript
- CSS-in-JS or modular CSS for styling
 - Tailwind CSS or other utility-first frameworks (permitted when used with documented rationale and accessibility/maintainability safeguards)

### Deployment
- Static hosting (e.g., GitHub Pages, Vercel)
- No backend services required

## Development Workflow

### Code Review
- All code must be peer-reviewed before merging.
- Ensure adherence to principles and coding standards.

### Testing
Adhere to the Testing Principles outlined above. All code changes must include corresponding tests and achieve required coverage thresholds. Run full test suite before merging, including unit, integration, and E2E tests.

## Governance

This constitution supersedes all other practices. Amendments require documentation, approval, and a migration plan.

**Version**: 1.1.0 | **Ratified**: 2026-05-08 | **Last Amended**: 2026-05-12
