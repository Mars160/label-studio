# Project Access Control Progress

Last reviewed: 2026-10-19

Status: **Implemented on `develop`; PostgreSQL migration verification remains an environment follow-up**

This is the engineering handoff record for the committed project-scoped access-control implementation. Keep it synchronized with code, tests, policy decisions, documentation, and unresolved findings.

## Goal

Replace organization-wide project visibility with explicit project membership and two per-project roles:

- **Admin**: manages the project and members and can see all project annotations and tabs.
- **Annotator**: works in assigned projects and sees only their own annotations, drafts, and Data Manager tabs.
- Only project admins may view project membership, search eligible organization accounts, or manage members.
- A new project's creator automatically becomes an enabled project admin.

The authorization boundary is `ProjectMember(project, user, role, enabled)`. Frontend behavior is driven by role-derived project capabilities, but every restriction must also be enforced server-side.

## Implemented

### Membership and migration

- Added `admin` and `annotator` roles and a unique `(project, user)` membership constraint.
- Added role/membership helpers and enabled-membership project discovery.
- Added a project `post_save` receiver that provisions the creator as an enabled admin for every creation path.
- Added migration `projects.0035_projectmember_role` to consolidate duplicates, preserve disabled creators, promote creators, and ensure an existing enabled member becomes admin when necessary.
- Added `projects.0036_merge_projectmember_role_projectsummary_counts` after an earlier upstream merge to join the two independent `0035` migration branches without schema operations.
- Added `projects.0037_merge_projecthotkeypreference_projectmember_role` after the 2026-08-08 upstream merge to join the local membership branch with upstream project hotkey preferences.
- Added `projects.0039_merge_20261019_0655` to join the local role migration branch with upstream import-progress/index migrations; no schema operations.
- Added final-admin demotion/removal protection with project-row locking.

### Member management

- Added admin-only project member list/create, candidate-search, and detail update/delete APIs.
- Admins can atomically add multiple active organization accounts as annotators or administrators.
- Candidate search matches name, username, or email and excludes inactive accounts and existing enabled members.
- Disabled memberships are re-enabled when the account is added again.
- Added an admin-only Project Members settings screen with searchable multi-select add, role, removal, and current-member search controls.
- Removed member/settings navigation from annotators and redirect direct member-settings access back to project data.

### Project, annotation, and tab isolation

- Project listing/detail and task discovery require enabled membership.
- Annotation and draft managers return all project records to admins and owner-only records to annotators.
- Annotation/task serializers, agreement calculations, Data Manager aggregates, and organization contribution statistics use role-visible annotations.
- Data Manager view querysets expose all project tabs to admins and owner-only tabs to annotators.
- View ownership is read-only to prevent tab transfer.
- Project statistics are owner-filtered for annotators.
- Project annotator lists return only the requesting annotator to non-admin members.
- In the opensource edition, Data Manager keeps global user fetching enabled because the Community task serializer returns annotator IDs; assignee lookup uses a non-throwing custom safe reference for deleted or otherwise unavailable users.

### Administrator-only project operations

Server-side admin checks cover member visibility and management, project/task mutation, imports, exports, file uploads, storage settings and sync, ML backends, project webhooks, Data Manager bulk actions, label configuration validation, and project summary reset. Frontend capability checks hide or disable the matching member, settings, import/export, storage, and ML entry points.

### User documentation

- Added a fork-specific access-control overview to the root `README.md`, including role boundaries and member-management behavior.
- Added `docs/README.zh-CN.md` as the Simplified Chinese user guide with matching access-control and deployment guidance.
- Updated Docker examples in both user guides to use `docker.io/mars160/label-studio:latest` and the fork's default `28000` host port.

## Verified

The following commands/checks have passed in the local test environment:

| Check | Result |
| --- | --- |
| New project membership/role suite | 36 passed |
| Combined project, task, Data Manager, export, storage, and webhook API suites | 79 passed |
| Data Manager ordering/filter regression suite | 42 passed |
| Total distinct focused backend tests | 131 passed |
| Ruff lint and format on changed Python files | Passed |
| Django `manage.py check` | Passed |
| `manage.py makemigrations --check --dry-run` | No changes detected |
| Python `compileall` and `git diff --check` | Passed |
| Biome 2.4.6 on 7 changed member-management frontend files | Passed |
| Label Studio TypeScript check and development build | Passed |
| Data Manager assignee and feature-flag regression tests | 7 passed |
| Biome 2.4.6 on the 4 assignee/feature-flag files | Passed |
| Post-upstream-merge project membership/role suite | 36 passed |
| Post-upstream-merge Data Manager manager/filter suite | 62 passed |
| Post-upstream-merge assignee and feature-flag tests | 9 passed |
| 2026-08-08 upstream merge focused access-control/backend regression suite | 152 passed |
| 2026-08-08 Ruff check/format on 37 changed Python files | Passed |
| 2026-08-08 Biome check on 5 merged Data Manager frontend files | Passed |
| 2026-08-08 Django check and migration drift check | Passed |
| 2026-08-08 conflict-marker and diff checks | Passed |
| 2026-08-12 upstream merge project/Data Manager serializer suites | 160 passed |
| 2026-08-12 Ruff, `compileall`, conflict-marker, and diff checks | Passed |
| 2026-08-23 upstream merge focused access-control/backend regression suite | 282 passed |
| 2026-08-23 Ruff, `compileall`, Django check, migration drift, conflict-marker, and diff checks | Passed |

Tests cover creator-admin provisioning, nonmember hiding, admin-only membership visibility and management, atomic multi-account role assignment and rollback, eligible-account full-name/username search, account-enumeration resistance, empty and invalid batch rejection, role management, active-user-aware final-admin protection, deactivation/soft/hard-offboarding replacement-admin promotion, disabled membership, admin/annotator annotation and draft visibility, role-safe Data Manager filtering, own-tab isolation, tab-owner immutability and persistence, annotator denial for ground-truth/prediction/model-version/live-ML/import/storage/webhook operations, prediction/draft/label relationship integrity, credential redaction, organization-level webhooks, migration promotion behavior, Data Manager task-path assignee references, project-scoped user filter options, project hotkey access, the opensource user-fetch feature-flag override, missing assignee degradation, and affected existing API behavior.

## 2026-10-19 upstream synchronization verification

Upstream target: `HumanSignal/label-studio` develop at `5b17e744a` (205 incoming commits). The following results verify the integrated code with the fork's project-scoped access controls preserved.

- Preserved project membership, admin-only management, annotation/draft/tab owner isolation, and frontend capability checks.
- Scoped new import/reimport job lists to project admins and annotation-to-draft conversion to role-visible annotations.
- Combined upstream instruction sanitization with local annotator credential redaction (two `to_representation` methods initially caused a regression; now consolidated).
- Retained upstream annotation deletion retry and storage credential-copy checks alongside local restrictions.
- Added import-job list authorization coverage and adapted upstream conversion tests to explicit project membership and owner isolation.
- Installed dependencies with `uv sync --frozen --group test`; `uv lock --check --offline` passed.
- Backend: focused checks passed 386 tests and 193 subtests; broader `projects/tests tasks/tests data_manager/tests io_storages/tests data_export/tests` run passed 746 tests and 183 subtests (overlapping coverage, not additive). Two incoming model tests assumed organization-wide access; adapted them to explicit project membership and fail-closed access for projects without an organization, preserving the local policy.
- Frontend: 22 tests passed across AppStore, Assignee, and feature flags. AppStore Biome check passed with one existing warning. Production `cd web && bun run build` passed (Vite application and service worker; Vite build took 12.30 seconds). Non-blocking warnings: outdated Browserslist data, runtime URL resolution, browser-externalized `module` from audio-file-decoder, and large chunks. Build-generated backend static-file changes were cleaned up.
- Ruff lint/format passed on six resolved backend files, three updated test files, and the merge migration. Django system check and migration drift check passed.
- Complete backend suite and PostgreSQL migration verification were not run. Incoming upstream documentation contains trailing whitespace reported by the full merge diff check; retained unchanged outside the resolved conflict.

## Resolved Security Review Findings

The independent review findings have been fixed and reverified:

1. **Annotation mutation:** annotators cannot set or clear `ground_truth` or rebind annotation task/project; uniqueness updates occur only after validation in the save transaction.
2. **Prediction mutation:** prediction create/update/delete and model-version deletion require project admin; task/project relationships are consistent and immutable.
3. **Shared labels:** a label linked to any unauthorized project cannot be mutated through the direct label API, and cross-organization label links are rejected.
4. **Tab persistence:** changed view `data` is saved and verified after database reload.
5. **Credential redaction:** project task-data credentials are omitted from annotator responses.
6. **Migration database routing:** every migration data query uses the schema editor's database alias.
7. **Admin draft visibility:** task and Data Manager serializers use role-aware draft querysets.
8. **Organization boundary/offboarding:** project access requires the active organization, a non-deleted organization membership, and an enabled project membership; soft/hard offboarding disables memberships and promotes a live replacement admin when required.
9. **Organization webhooks:** organization-level webhooks retain list/create/detail access through the existing organization permission path.
10. **Mutation side effects:** rejected annotation, ML, import, storage, webhook, prediction, and label requests do not perform the protected mutation or validation side effect.
11. **Data Manager filter isolation:** annotation result, ID, owner, equality, negation, containment, and empty filters operate only on role-visible annotations.
12. **Draft relationship integrity:** draft task/annotation relationships are immutable, and URL annotations must be visible and belong to the URL task.
13. **Live model redaction:** annotators cannot request ML backend settings through the project model-version endpoint.
14. **Effective admin invariant:** last-admin checks, account deactivation, and migration/runtime replacement consider only enabled, active members with a live organization membership.
15. **Member-management races and disclosure:** project-row locking serializes member mutations and revalidates admin access inside the transaction; account resolution is organization-scoped with uniform errors; failed frontend mutations no longer show success.

## Policy Decisions

- Annotators cannot view, search, add, change, or remove project members; all membership operations are admin-only.
- Admins may batch-add existing active organization accounts as annotators or administrators.
- Project management, task management, imports/exports, integrations, labels, ML, and project-wide actions are admin-only.
- Existing organization users who do not have a project membership intentionally lose access. This is the requested move from organization-wide visibility to explicit project membership, not a compatibility backfill.
- The current member-add API accepts existing accounts that already belong to the project's organization. Supporting unregistered-email invitations would require a separate invitation/token and post-signup flow and is outside the current implementation.

## Completion Checklist

- [x] Fix every independent security review finding and add focused regression coverage for high-risk paths.
- [x] Run 131 focused backend tests, including affected API, webhook, and Data Manager filter suites.
- [x] Run Ruff, Django checks, migration drift, `compileall`, `git diff --check`, and frontend Biome.
- [x] Complete the final diff audit for generated files, unrelated changes, permission declaration mismatches, and unscoped querysets.
- [x] Land the implementation on `develop` and publish matching English and Simplified Chinese user guidance.
- [ ] Validate migration `projects.0035_projectmember_role` on PostgreSQL when that service is available; SQLite migration/test verification is complete.

No known blocking authorization finding remains. The implementation is committed on `develop`; PostgreSQL verification of migration `projects.0035_projectmember_role` is the only documented environment-dependent follow-up.
