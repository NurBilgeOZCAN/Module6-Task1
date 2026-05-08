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
- Write unit tests for all components.
- Perform manual testing for responsiveness and accessibility.

## Governance

This constitution supersedes all other practices. Amendments require documentation, approval, and a migration plan.

**Version**: 1.0.0 | **Ratified**: 2026-05-08 | **Last Amended**: 2026-05-08
