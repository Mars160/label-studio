# AGENTS.md

## Purpose

This file is the default guide for coding agents working in this repository. Keep changes scoped to the requested behavior, follow existing patterns in the area being modified, and do not rewrite unrelated code or generated output.

## Repository Map

Label Studio is a Python/Django backend plus a pnpm/Nx React monorepo.

- `label_studio/`: Django application, APIs, models, migrations, and backend tests.
- `web/apps/labelstudio/`: main frontend application and backend/frontend integration point.
- `web/libs/editor/`: annotation editor (React and mobx-state-tree).
- `web/libs/datamanager/`: Data Manager frontend.
- `web/libs/ui/`: shared design-system components.
- `web/libs/app-common/` and `web/libs/core/`: shared application blocks and utilities.
- `web/libs/frontend-test/`: shared frontend test helpers.
- `docs/`: Hexo documentation site.
- `.cursor/rules/`: detailed, task-specific engineering rules. Read the relevant rule before changing migrations, query iteration, storage providers, React/TypeScript, design-system code, or Cypress tests.

More specific `AGENTS.md` files, if added below this directory, take precedence for their subtree.

## Current Work

- Project-scoped access control is implemented on `develop`; PostgreSQL verification of migration `projects.0035_projectmember_role` is the only recorded environment follow-up. Read `docs/project-access-control-progress.md` before changing membership, roles, project authorization, annotation/tab visibility, or related frontend capabilities, and keep its implementation status, security findings, policy decisions, and verification results synchronized with the code.

## Environment Setup

Backend requirements are Python 3.10+ and uv:

```bash
uv sync
make migrate-dev
```

Frontend CI uses Node 22 and pnpm 11:

```bash
make frontend-install
```

Do not replace `uv.lock` or `web/pnpm-lock.yaml` with a lockfile from another package manager. Only update a lockfile when dependencies actually change.

For full-stack development, use the root Makefile targets. `make run-dev` starts Django with SQLite, while `make frontend-dev` starts the frontend HMR server. Docker development is available through `make docker-dev-setup` and `make docker-run-dev`.

### Docker Image Builds

- Every Docker image build must configure mainland China mirrors in its build stages before installing dependencies: npm uses `https://registry.npmmirror.com`, PyPI uses `https://mirrors.aliyun.com/pypi/simple/`, and Alpine package repositories use the corresponding `mirrors.aliyun.com/alpine` release repositories.
- Configure mirrors inside the Dockerfile/build stage rather than relying on the Docker host. Preserve any explicitly supplied registry or index build arguments so private registries remain usable.
- Pass a `BUILD_JOBS` build argument from the build command, defaulting to the available CPU count (for example, `--build-arg BUILD_JOBS="$(nproc)"`). Use it for native compilation through `MAKEFLAGS="-j${BUILD_JOBS}"`, `CMAKE_BUILD_PARALLEL_LEVEL="${BUILD_JOBS}"`, and equivalent build-tool options. This applies to packages compiled from source, including OpenCV.
- Do not bake a fixed CPU count into Dockerfiles. Keep runtime image stages free of build-only mirror configuration and compiler parallelism settings unless they are required at runtime.

## Common Commands

Run commands from the repository root unless the command explicitly changes directories.

### Backend

```bash
make run-dev                 # Django dev server with SQLite
make migrate-dev             # apply migrations
make makemigrations-dev      # create migrations
make test                    # backend tests except integration_tests
make fmt                     # format changed files
make fmt-check               # pre-push checks for changed files
make fmt-check-all           # pre-push checks for all files
```

For a focused backend test, run pytest from `label_studio/` so its `pytest.ini` is used:

```bash
cd label_studio
DJANGO_DB=sqlite uv run pytest path/to/test_file.py -v
```

### Frontend

Run pnpm/Nx commands from `web/`:

```bash
pnpm dev                     # main app development build/HMR
pnpm build                   # production frontend build
pnpm test:unit               # all frontend unit targets
pnpm ls:unit                 # main app unit tests
pnpm lsf:unit                # editor unit tests
pnpm dm:unit                 # Data Manager unit tests
pnpm lsf:integration         # editor Cypress integration tests
pnpm lint                    # Biome check with fixes
pnpm exec biome check . --diagnostic-level=error  # CI-style lint check without fixes
pnpm ui:serve                # shared UI Storybook
```

Prefer the narrowest Nx project target that covers the change. Do not run the full Cypress or backend suite when a focused test proves the change, but broaden verification for shared libraries, migrations, or cross-cutting behavior.

### Documentation

The docs site has its own pnpm workspace:

```bash
cd docs
pnpm install --frozen-lockfile
pnpm build
```

## Implementation Rules

### General

- Read neighboring code and tests before editing; preserve local architecture and naming.
- Keep patches focused. Add tests for bug fixes and behavior changes.
- Avoid editing generated artifacts unless the source change requires regeneration. Important generated outputs include frontend `dist/` content, `label_studio/core/all_urls.json`, Swagger output, tag-schema docs, and design tokens.
- Never commit secrets, local `.env` files, test data containing credentials, or runtime data.
- Maintain compatibility with both SQLite and PostgreSQL for backend behavior.

### Python and Django

- Ruff is the source of truth: Python 3.10 target, 119-character line length, single-quoted strings, and enabled `F`, `E`, and import-order checks.
- Type-hint new code. Keep functions focused and use existing service, serializer, permission, and API patterns.
- Use `iterate_queryset()` from `core.utils.iterators` for large unordered QuerySets. It does not preserve ordering; use an appropriate alternative when order matters.
- Avoid N+1 queries; use `select_related`, `prefetch_related`, annotations, or bulk operations where appropriate.
- API changes should include tests; prefer Tavern for endpoint workflows when it matches nearby coverage.
- Generate schema migrations with `make makemigrations-dev`, then inspect the result. Hand-edit or write custom operations only when the generated migration cannot express the required behavior. Migration changes must work on SQLite and PostgreSQL and pass migration linting in CI.
- Read `.cursor/rules/async_migrations.mdc` before introducing long-running indexes, data backfills, concurrent DDL, or other potentially blocking migration work.

### Frontend

- Use TypeScript and functional React components for new code. Follow the dependency boundaries in `.cursor/rules/react.mdc`: apps may import libraries; libraries must not import apps; `app-common` has additional documented restrictions.
- Reuse `@humansignal/ui`, `@humansignal/icons`, `@humansignal/core`, and `@humansignal/app-common` before adding local replacements.
- Follow `DESIGN.md` and `.cursor/rules/design.mdc` for UI work. Use semantic design tokens, preserve keyboard support and WCAG 2.1 AA behavior, and add or update colocated Storybook stories for shared components.
- Use CSS modules and existing component layout conventions. Do not hard-code colors, spacing, or typography where semantic tokens exist.
- Do not add Lodash or import `es-toolkit` directly. Use the wrappers documented in `.cursor/rules/no-lodash.mdc`; use `structuredClone` for deep cloning.
- Biome is authoritative for frontend formatting and linting. Avoid unrelated whole-tree auto-fix churn.
- Place editor Cypress specs under `web/libs/editor/tests/integration/e2e/`, fixtures under the parallel `data/` structure, and use centralized helpers from `@humansignal/frontend-test`. Read `.cursor/rules/cypress_tests.mdc` before changing integration tests.

## Verification Before Handoff

1. Run the smallest relevant tests for the modified behavior.
2. Run lint/format checks for touched Python or frontend files.
3. For shared or high-risk changes, run the affected project suite or broader checks.
4. Inspect `git diff --check` and `git diff`; remove accidental generated files and unrelated formatting changes.
5. Report exactly what was verified and call out checks that could not be run.

Do not claim completion while relevant tests or checks are failing.
