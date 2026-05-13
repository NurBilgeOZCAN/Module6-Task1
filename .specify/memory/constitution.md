# Task-Board6 Constitution

## Core Principles

### I. Readable Code
Code must be clean, understandable, and consistently structured. TypeScript must be used for type safety and clarity. Avoid unnecessary abstraction, overly complex patterns, and unclear naming.

### II. Responsive UI/UX
The application must provide a usable and consistent experience across desktop, tablet, and mobile screen sizes. Layouts should remain readable, interactive elements should be easy to access, and the board should remain functional on smaller screens.

### III. Accessibility-Friendly Components
Components must follow accessibility-friendly practices. Use semantic HTML, accessible labels, visible focus states, keyboard-friendly interactions, and ARIA attributes only when needed. Prefer queries and selectors that reflect user-visible behavior.

### IV. LocalStorage Persistence
Task board data must persist through `localStorage` to provide a seamless browser-only experience. Persistence logic must handle missing, invalid, or corrupted stored data safely without breaking the application.

### V. Minimal Dependencies
Favor built-in browser APIs and lightweight libraries. Add dependencies only when they clearly improve maintainability, accessibility, testing, or developer experience.

Utility-first CSS frameworks such as Tailwind CSS are permitted when they improve consistency and reduce custom CSS complexity. When used:
- Keep styles small, composable, and component-focused.
- Preserve accessible defaults such as focus visibility and sufficient contrast.
- Avoid large global overrides or duplicated utility patterns.
- Maintain a small and consistent design token approach.

### VI. Clear File Organization
Files must be organized predictably by feature, domain, or responsibility. Naming should make each file’s purpose clear. Source files, tests, utilities, and configuration should remain easy to locate.

### VII. Security Best Practices
Do not hardcode secrets or sensitive data. Validate and sanitize user-controlled inputs where relevant. Avoid unsafe browser APIs unless explicitly justified.

---

## Testing Principles

### 1. Testing Philosophy
All meaningful behavior changes must be validated with tests. Follow a Test-Driven Development mindset where practical:

- **RED**: Write or update a failing test first.
- **GREEN**: Implement the minimum change needed to pass.
- **REFACTOR**: Improve structure while keeping tests passing.

Tests should be generated from specifications and expected behavior, not from implementation details.

### 2. Coverage Requirements
The project follows the Testing Pyramid:

- **Unit tests**: Approximately 70%
- **Integration tests**: Approximately 20%
- **E2E tests**: Approximately 10%

Minimum quality targets:

- **Line coverage**: 80%
- **Branch coverage**: 75%
- **Mutation score**: 75%

Coverage and mutation results should be reviewed before final submission or merge.

### 3. Test Types & Organization
Use the following test structure:

- **Unit tests**: Small utilities, state logic, validation logic, component behavior.
- **Integration tests**: Board workflows, persistence, hydration, and state interactions.
- **E2E tests**: Critical user journeys only.

Preferred structure:

- `tests/unit/`
- `tests/integration/`
- `tests/e2e/`

Small component-level tests may also live in `src/**/__tests__` when they are tightly coupled to the source file. E2E tests must remain separate from Vitest execution and should be run through Playwright.

### 4. Naming Conventions
Test files should use clear and consistent names:

- **Unit/Integration tests**: `ComponentName.test.tsx` or `feature-name.test.ts`
- **E2E tests**: `feature-name.spec.ts`

Test suites and cases should describe observable behavior:

```ts
describe('TaskForm', () => {
  it('should reject empty task titles', () => {
    // test body
  });
});
```

Prefer names that explain what should happen and under which condition.

### 5. Test Anatomy
Tests must follow the Arrange-Act-Assert pattern:

- **Arrange**: Prepare data, mocks, and render state.
- **Act**: Perform the user or system action.
- **Assert**: Verify the expected observable result.

Each test must be independent, deterministic, and able to run alone. Use `beforeEach` for isolated setup. Avoid shared global state between tests.

### 6. Mocking & Test Data
Mock only what is external, unstable, or environment-dependent.

Allowed mocking examples:

- `localStorage`
- Timers or time-dependent behavior.
- Browser APIs where needed.
- External network calls if introduced later.

Do not mock internal business logic that can be tested directly. Use stable fixtures and helper functions for repeated task, column, or board state data.

### 7. Quality Criteria
Good tests must:

- Test observable behavior, not private implementation details.
- Use meaningful and exact assertions.
- Avoid tautological assertions such as `expect(x).toBe(x)`.
- Avoid weak assertion-only tests such as checking only `toBeDefined()` without validating behavior.
- Cover edge cases, invalid inputs, and error paths.
- Validate all boolean combinations and ensure logical correctness.
- Verify exact error messages for invalid inputs or failure cases.
- Validate return values and side effects explicitly.
- Remain deterministic and non-flaky.
- Prefer semantic queries such as `getByRole`, `getByLabelText`, and visible text.

Mutation testing should be used to validate test strength. Survived mutants must be reviewed and either fixed with targeted tests or documented as equivalent/low-risk. The command `npm run test:mutation` must be used as a quality gate to ensure mutation testing thresholds are met.

### 8. Tools & Frameworks
The project uses:

- **TypeScript** for type safety.
- **ESLint** for static analysis.
- **Vitest** for unit and integration tests.
- **Testing Library** for React component behavior.
- **@testing-library/jest-dom** for DOM assertions.
- **Playwright** for E2E tests.
- **Stryker** for mutation testing.

Required validation commands:

```bash
npm run typecheck
npm run lint
npm run test:unit
npm run test:integration
npm test
npm run test:e2e
npm run test:coverage
npm run test:mutation
```

---

## Additional Constraints

### Technology Stack
The project must remain aligned with the selected stack:

- **React** with functional components and hooks.
- **TypeScript**.
- **Vite**.
- Browser-only local persistence.
- Modular CSS, utility-first CSS, or lightweight styling approaches.

Tailwind CSS or other utility-first frameworks are permitted when they are used consistently, accessibly, and with clear maintainability benefits.

### Deployment
The application should remain suitable for static hosting platforms such as GitHub Pages, Vercel, or Netlify. No backend service is required.

---

## Development Workflow

### Code Review
All meaningful changes should be reviewed before merging. Reviews must check:

- Code clarity.
- Accessibility.
- Responsive behavior.
- Test coverage.
- LocalStorage safety.
- Dependency impact.

### Testing
Every behavior change must include corresponding tests. Before merge or final submission, run the full validation matrix:

```bash
npm run typecheck
npm run lint
npm run test:unit
npm run test:integration
npm test
npm run test:e2e
npm run test:coverage
npm run test:mutation
```

Coverage and mutation targets must be met or documented with a clear justification.

---

## Governance
This constitution is the source of truth for Task-Board6 development practices. Amendments require documentation, approval, and a migration note when existing code or tests are affected.

**Version**: 1.2.0  
**Ratified**: 2026-05-08  
**Last Amended**: 2026-05-13