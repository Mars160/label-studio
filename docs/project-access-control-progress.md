# Project Access Control Progress

Last reviewed: 2026-07-30

Status: **Ready for review; PostgreSQL migration verification remains an environment follow-up**

This is the engineering handoff record for the uncommitted project-scoped access-control implementation. Keep it synchronized with code, tests, policy decisions, and unresolved findings.

## Goal

Replace organization-wide project visibility with explicit project membership and two per-project roles:

- **Admin**: manages the project and members and can see all project annotations and tabs.
- **Annotator**: works in assigned projects and sees only their own annotations, drafts, and Data Manager tabs.
- Every project member may add an existing active organization account to the project as an annotator.
- A new project's creator automatically becomes an enabled project admin.

The authorization boundary is `ProjectMember(project, user, role, enabled)`. Frontend behavior is driven by role-derived project capabilities, but every restriction must also be enforced server-side.

## Implemented

### Membership and migration

- Added `admin` and `annotator` roles and a unique `(project, user)` membership constraint.
- Added role/membership helpers and enabled-membership project discovery.
- Added a project `post_save` receiver that provisions the creator as an enabled admin for every creation path.
- Added migration `projects.0035_projectmember_role` to consolidate duplicates, preserve disabled creators, promote creators, and ensure an existing enabled member becomes admin when necessary.
- Added final-admin demotion/removal protection with project-row locking.

### Member management

- Added project member list/create and detail update/delete APIs.
- Any enabled member may add an existing active organization account; the new role is always annotator.
- Only admins may change roles or remove members.
- Disabled memberships are re-enabled when the account is added again.
- Added a Project Members settings screen with add, role, and removal controls.

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

Server-side admin checks cover project/task mutation, imports, exports, file uploads, storage settings and sync, ML backends, project webhooks, Data Manager bulk actions, label configuration validation, and project summary reset. Frontend capability checks hide or disable the matching settings, import/export, storage, and ML entry points.

## Verified

The following commands/checks have passed in the local uv environment:

| Check | Result |
| --- | --- |
| New project membership/role suite | 26 passed |
| Combined project, task, Data Manager, export, storage, and webhook API suites | 79 passed |
| Data Manager ordering/filter regression suite | 42 passed |
| Total distinct focused backend tests | 121 passed |
| Ruff lint and format on 30 changed Python files | Passed |
| Django `manage.py check` | Passed |
| `manage.py makemigrations --check --dry-run` | No changes detected |
| Python `compileall` and `git diff --check` | Passed |
| Biome 2.4.6 on 7 changed frontend files | No errors; 2 pre-existing unused-variable warnings |
| Data Manager assignee and feature-flag regression tests | 7 passed |
| Biome 2.4.6 on the 4 assignee/feature-flag files | Passed |

Tests cover creator-admin provisioning, nonmember hiding, member addition, role management, final-admin protection, soft and hard organization offboarding with replacement-admin promotion, disabled membership, admin/annotator annotation and draft visibility, role-safe Data Manager filtering, own-tab isolation, tab-owner immutability and persistence, annotator denial for ground-truth/prediction/model-version/live-ML/import/storage/webhook operations, prediction/draft/label relationship integrity, credential redaction, organization-level webhooks, migration promotion behavior, Data Manager task-path assignee references, the opensource user-fetch feature-flag override, missing assignee degradation, and affected existing API behavior.

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
14. **Effective admin invariant:** last-admin checks and migration/runtime replacement consider only enabled members with a live organization membership.

## Policy Decisions

- Annotators may add accounts only as annotators. They cannot grant admin, change roles, remove members, or escalate themselves.
- Project management, task management, imports/exports, integrations, labels, ML, and project-wide actions are admin-only.
- Existing organization users who do not have a project membership intentionally lose access. This is the requested move from organization-wide visibility to explicit project membership, not a compatibility backfill.
- The current member-add API accepts existing accounts that already belong to the project's organization. Supporting unregistered-email invitations would require a separate invitation/token and post-signup flow and is outside the current implementation.

## Completion Checklist

- [x] Fix every independent security review finding and add focused regression coverage for high-risk paths.
- [x] Run 121 focused backend tests, including affected API, webhook, and Data Manager filter suites.
- [x] Run Ruff, Django checks, migration drift, `compileall`, `git diff --check`, and frontend Biome.
- [x] Complete the final diff audit for generated files, unrelated changes, permission declaration mismatches, and unscoped querysets.
- [ ] Validate the migration on PostgreSQL when that service is available; SQLite migration/test verification is complete.

No known blocking authorization finding remains. The implementation and local verification are ready for review; PostgreSQL migration verification is the only documented environment-dependent follow-up.
