# Personal Task Board - SpecKit Framework Lab

## Overview

This project was created as part of the **Module 06: SpecKit Framework Lab**.

The goal of this lab was to initialize GitHub SpecKit and experience a complete spec-driven development workflow. Instead of starting directly with code, the project followed a structured process where requirements, clarifications, checklists, technical plans, and implementation tasks were created first.

The selected feature is a **Personal Task Board** application.

## Lab Context

**Module:** Module 06  
**Topic:** SpecKit Framework  
**Approach:** Spec-Driven Development  
**AI Tool:** GitHub Copilot Chat  
**Project:** Personal Task Board  
**Main Focus:** Specification-first development workflow  

## Objective

The objective of this lab was to practice the SpecKit workflow by creating persistent, version-controlled specification artifacts.

The workflow followed this structure:

```txt
constitution → specify → clarify → checklist → plan → tasks → analyze → implement
```

The required part of the lab focused on:

- Initializing SpecKit
- Creating a project constitution
- Specifying a feature
- Clarifying ambiguous requirements
- Reviewing the generated checklist
- Creating an implementation plan
- Generating implementation tasks

## Project Idea

The project is a lightweight **Personal Task Board** for managing tasks across simple Kanban columns.

Main feature scope:

- To Do / In Progress / Done columns
- Create, edit, delete tasks
- Drag and drop between columns
- Browser localStorage persistence
- Keyboard shortcut support
- Frontend-only implementation

## Tech Stack

The planned implementation uses:

- React
- Vite
- TypeScript
- Browser localStorage
- GitHub SpecKit
- GitHub Copilot Chat

## SpecKit Setup

SpecKit was initialized for GitHub Copilot.

Expected initialization command:

```bash
specify init . --ai copilot
```

Verification command:

```bash
specify check
```

Expected folders after initialization:

```txt
.specify/
specs/
```

## SpecKit Workflow Completed

### 1. Constitution

The constitution defines the non-negotiable project principles.

Command used:

```txt
/speckit.constitution
```

Generated artifact:

```txt
.specify/memory/constitution.md
```

The constitution defines project rules such as:

- Clean code principles
- TypeScript strictness
- Documentation expectations
- Testing and quality expectations
- Maintainable implementation rules

## 2. Specify Feature

The feature was specified using SpecKit.

Command used:

```txt
/speckit.specify
```

Generated artifact:

```txt
specs/001-personal-task-board/spec.md
```

The specification defines:

- Core objective
- User stories
- Functional requirements
- Acceptance criteria
- Success criteria
- Scope boundaries

## 3. Clarify Ambiguities

Ambiguities were clarified before planning.

Command used:

```txt
/speckit.clarify
```

Purpose:

- Resolve unclear requirements
- Reduce hidden assumptions
- Improve specification precision
- Prevent rework during planning and implementation

The clarified decisions were reflected in:

```txt
specs/001-personal-task-board/spec.md
```

## 4. Checklist Review

The requirements checklist was reviewed before planning.

Generated artifact:

```txt
specs/001-personal-task-board/checklists/requirements.md
```

The checklist validates that:

- Requirements are clear
- Requirements are testable
- Edge cases are considered
- Scope is understandable
- The specification is ready for planning

## 5. Plan Generation

The technical plan was generated from the validated specification.

Command used:

```txt
/speckit.plan
```

Generated artifact:

```txt
specs/001-personal-task-board/plan.md
```

The plan includes:

- Technical approach
- Architecture decisions
- Data persistence strategy
- Component-level planning
- Implementation considerations

## 6. Research Artifact

A research document was also generated during the planning stage.

Generated artifact:

```txt
specs/001-personal-task-board/research.md
```

This file captures supporting decisions, technical notes, and reasoning used during planning.

## 7. Task Generation

Implementation tasks were generated from the plan.

Command used:

```txt
/speckit.tasks
```

Generated artifact:

```txt
specs/001-personal-task-board/tasks.md
```

The task file breaks implementation into actionable steps.

Each task is designed to be:

- Small
- Sequential
- Trackable
- Connected to the specification
- Suitable for implementation by an AI assistant or developer

## Generated Artifacts

| Artifact | Path | Status |
| -------- | ---- | ------ |
| Constitution | `.specify/memory/constitution.md` | Completed |
| Specification | `specs/001-personal-task-board/spec.md` | Completed |
| Requirements Checklist | `specs/001-personal-task-board/checklists/requirements.md` | Completed |
| Technical Plan | `specs/001-personal-task-board/plan.md` | Completed |
| Research Notes | `specs/001-personal-task-board/research.md` | Completed |
| Task List | `specs/001-personal-task-board/tasks.md` | Completed |

## Lab Completion Checklist

### Required

- [x] SpecKit initialized with `specify init`
- [x] `.specify/` directory created
- [x] `specs/` directory created
- [x] Constitution created with `/speckit.constitution`
- [x] Feature specified with `/speckit.specify`
- [x] Ambiguities clarified with `/speckit.clarify`
- [x] Requirements checklist reviewed
- [x] Plan generated with `/speckit.plan`
- [x] Tasks generated with `/speckit.tasks`
- [x] Spec-driven artifacts saved under `specs/`

### Bonus / Optional

- [x] `/speckit.analyze` consistency check
- [x] `/speckit.implement` source code generation
- [x] Full implementation completed
- [x] Final test run completed

## Quality Validation

The generated specification files were reviewed to ensure they do not depend on machine-specific performance assumptions.

Validation focused on avoiding criteria such as:

- CPU-specific expectations
- Local machine-dependent performance claims
- Hardcoded millisecond thresholds
- Developer-environment-specific success conditions

This keeps the specification more portable and suitable for CI-based validation.

## SpecKit vs Vibe Coding

This lab demonstrates the difference between vibe coding and spec-driven development.

### Vibe Coding

```txt
Prompt → Code → Fix repeatedly
```

Vibe coding is fast, but it can create:

- Hidden assumptions
- Missing requirements
- Weak traceability
- Inconsistent implementation
- Context loss across sessions

### SpecKit Workflow

```txt
Constitution → Spec → Clarify → Checklist → Plan → Tasks → Implementation
```

SpecKit creates persistent artifacts that make the project easier to review, resume, and hand off.

## Key Learning Outcomes

This lab demonstrated that SpecKit improves AI-assisted development by turning requirements into version-controlled project artifacts.

Main lessons:

- Specifications should be created before implementation.
- Clarification reduces ambiguity and rework.
- Checklists act as quality gates.
- Plans document the technical implementation strategy.
- Tasks create a clear execution roadmap.
- Constitution files help enforce consistent project principles.
- Spec-driven artifacts make AI-assisted work more traceable and reliable.

## How to Review This Project

Recommended review order:

1. Open `.specify/memory/constitution.md`
2. Review `specs/001-personal-task-board/spec.md`
3. Review `specs/001-personal-task-board/checklists/requirements.md`
4. Review `specs/001-personal-task-board/plan.md`
5. Review `specs/001-personal-task-board/research.md`
6. Review `specs/001-personal-task-board/tasks.md`

## Notes

This repository focuses on the **SpecKit specification workflow**.

The main purpose is not only to generate code, but to show how a feature can be defined, clarified, validated, planned, and decomposed before implementation.

The project follows this principle:

```txt
The specification is the source of truth.
The implementation follows the specification.
```

## Author

Nur Bilge ÖZCAN
