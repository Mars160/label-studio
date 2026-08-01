import { useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { Redirect } from "react-router-dom";
import { IconPlus, IconTrash } from "@humansignal/icons";
import {
  Button,
  Select,
  Spinner,
  TagAutocomplete,
  Tooltip,
  useToast,
  type TagAutocompleteOption,
  type TagOption,
} from "@humansignal/ui";
import Input from "../../components/Form/Elements/Input/Input";
import { useAPI } from "../../providers/ApiProvider";
import { useProject } from "../../providers/ProjectProvider";
import { useParams } from "../../providers/RoutesProvider";
import "./ProjectMembersSettings.prefix.css";

type ProjectRole = "admin" | "annotator";

type ProjectMember = {
  id: number;
  role: ProjectRole;
  enabled: boolean;
  user: APIUserSimple;
};

const roleOptions = [
  { value: "annotator", label: "Annotator" },
  { value: "admin", label: "Administrator" },
];

const getUserName = (user: APIUserSimple) => [user.first_name, user.last_name].filter(Boolean).join(" ");

const getUserDisplayName = (user: APIUserSimple) => {
  const name = getUserName(user);
  return name || (user.username && user.username !== user.email ? user.username : "");
};

const getUserLabel = (user: APIUserSimple) => getUserDisplayName(user) || user.email;

const getCandidateLabel = (user: APIUserSimple) => {
  const name = getUserLabel(user);
  return name === user.email ? user.email : `${name} (${user.email})`;
};

export const ProjectMembersSettings = () => {
  const api = useAPI();
  const toast = useToast();
  const { project } = useProject();
  const params = useParams();
  const routeProjectId = Number(params.id);
  const [members, setMembers] = useState<ProjectMember[]>([]);
  const [candidates, setCandidates] = useState<APIUserSimple[]>([]);
  const [selectedUserIds, setSelectedUserIds] = useState<number[]>([]);
  const [newMemberRole, setNewMemberRole] = useState<ProjectRole>("annotator");
  const [memberSearch, setMemberSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchingCandidates, setSearchingCandidates] = useState(false);
  const [saving, setSaving] = useState(false);
  const [updatingMemberId, setUpdatingMemberId] = useState<number | null>(null);
  const previousRouteProjectId = useRef(routeProjectId);
  const navigationGeneration = useRef(0);
  if (previousRouteProjectId.current !== routeProjectId) {
    previousRouteProjectId.current = routeProjectId;
    navigationGeneration.current++;
  }
  const memberRequestId = useRef(0);
  const candidateRequestId = useRef(0);
  const candidateSearchTimer = useRef<number>();
  const canManageMembers = project?.id === routeProjectId && project?.capabilities?.manage_members === true;

  const loadMembers = useCallback(async () => {
    if (!project?.id || !canManageMembers) return;
    const generation = navigationGeneration.current;
    const requestId = ++memberRequestId.current;
    setLoading(true);
    try {
      const result = await api.callApi("projectMembers", { params: { pk: project.id } });
      if (requestId !== memberRequestId.current || generation !== navigationGeneration.current || !result?.$meta.ok)
        return;
      setMembers(Array.isArray(result) ? result : (result?.results ?? []));
    } finally {
      if (requestId === memberRequestId.current && generation === navigationGeneration.current) setLoading(false);
    }
  }, [api, canManageMembers, project?.id, routeProjectId]);

  const loadCandidates = useCallback(
    async (search = "") => {
      if (!project?.id || !canManageMembers) return;
      const generation = navigationGeneration.current;
      const requestId = ++candidateRequestId.current;
      setSearchingCandidates(true);
      try {
        const result = await api.callApi("projectMemberCandidates", {
          params: { pk: project.id, search },
        });
        if (
          requestId !== candidateRequestId.current ||
          generation !== navigationGeneration.current ||
          !result?.$meta.ok
        )
          return;
        const nextCandidates: APIUserSimple[] = Array.isArray(result) ? result : (result?.results ?? []);
        setCandidates((current) => {
          const candidatesById = new Map(current.map((candidate) => [candidate.id, candidate]));
          for (const candidate of nextCandidates) candidatesById.set(candidate.id, candidate);
          return [...candidatesById.values()];
        });
      } finally {
        if (requestId === candidateRequestId.current && generation === navigationGeneration.current)
          setSearchingCandidates(false);
      }
    },
    [api, canManageMembers, project?.id, routeProjectId],
  );

  useEffect(() => {
    setMembers([]);
    setCandidates([]);
    setSelectedUserIds([]);
    setMemberSearch("");
    setSaving(false);
    setUpdatingMemberId(null);
    setSearchingCandidates(false);
    setLoading(canManageMembers);
    if (!canManageMembers) return;

    void loadMembers();
    void loadCandidates();

    return () => {
      memberRequestId.current++;
      candidateRequestId.current++;
      if (candidateSearchTimer.current) window.clearTimeout(candidateSearchTimer.current);
    };
  }, [canManageMembers, loadCandidates, loadMembers, routeProjectId]);

  const searchCandidates = useCallback(
    (query: string) => {
      if (candidateSearchTimer.current) window.clearTimeout(candidateSearchTimer.current);
      candidateSearchTimer.current = window.setTimeout(() => void loadCandidates(query.trim()), 250);
    },
    [loadCandidates],
  );

  const filteredMembers = useMemo(() => {
    const search = memberSearch.trim().toLowerCase();
    if (!search) return members;
    return members.filter((member) =>
      [getUserName(member.user), member.user.email, member.user.username]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(search)),
    );
  }, [memberSearch, members]);

  const candidateOptions = useMemo(
    () => candidates.map((candidate) => ({ value: candidate.id, label: getCandidateLabel(candidate) })),
    [candidates],
  );
  const candidatesById = useMemo(() => new Map(candidates.map((candidate) => [candidate.id, candidate])), [candidates]);

  const candidateSearchFilter = useCallback(
    (option: TagAutocompleteOption<number>, query: string) => {
      const value = typeof option === "object" ? option.value : option;
      if (typeof value !== "number") return false;
      const candidate = candidatesById.get(value);
      if (!candidate) return false;
      const normalizedQuery = query.trim().toLowerCase();
      return [getUserName(candidate), candidate.email, candidate.username]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(normalizedQuery));
    },
    [candidatesById],
  );

  const renderCandidateOption = useCallback(
    (option: TagOption<number>) => <span>{option.label ?? String(option.value)}</span>,
    [],
  );

  const addMembers = async (event: FormEvent) => {
    event.preventDefault();
    if (!selectedUserIds.length || !project?.id || !canManageMembers) return;
    const projectId = project.id;
    const generation = navigationGeneration.current;
    setSaving(true);
    try {
      const result = await api.callApi("addProjectMember", {
        params: { pk: projectId },
        body: { user_ids: selectedUserIds, role: newMemberRole },
      });
      if (!result?.$meta.ok) {
        if (result) toast.show({ message: "Unable to add project members", type: "error" });
        return;
      }
      if (generation !== navigationGeneration.current) return;
      const addedCount = selectedUserIds.length;
      setSelectedUserIds([]);
      setCandidates((current) => current.filter((candidate) => !selectedUserIds.includes(candidate.id)));
      await Promise.all([loadMembers(), loadCandidates()]);
      if (generation !== navigationGeneration.current) return;
      toast.show({ message: `${addedCount} project member${addedCount === 1 ? "" : "s"} added` });
    } finally {
      if (generation === navigationGeneration.current) setSaving(false);
    }
  };

  const updateRole = async (member: ProjectMember, role: ProjectRole) => {
    if (!project?.id || member.role === role || !canManageMembers) return;
    const projectId = project.id;
    const generation = navigationGeneration.current;
    setUpdatingMemberId(member.id);
    try {
      const result = await api.callApi("updateProjectMember", {
        params: { pk: projectId, memberPk: member.id },
        body: { role },
      });
      if (!result?.$meta.ok) {
        if (result) toast.show({ message: "Unable to update the project role", type: "error" });
        return;
      }
      if (generation !== navigationGeneration.current) return;
      await loadMembers();
      if (generation !== navigationGeneration.current) return;
      toast.show({ message: "Project role updated" });
    } finally {
      if (generation === navigationGeneration.current) setUpdatingMemberId(null);
    }
  };

  const removeMember = async (member: ProjectMember) => {
    if (!project?.id || !canManageMembers) return;
    const projectId = project.id;
    const generation = navigationGeneration.current;
    setUpdatingMemberId(member.id);
    try {
      const result = await api.callApi("deleteProjectMember", {
        params: { pk: projectId, memberPk: member.id },
      });
      if (!result?.$meta.ok) {
        if (result) toast.show({ message: "Unable to remove the project member", type: "error" });
        return;
      }
      if (generation !== navigationGeneration.current) return;
      await Promise.all([loadMembers(), loadCandidates()]);
      if (generation !== navigationGeneration.current) return;
      toast.show({ message: "Project member removed" });
    } finally {
      if (generation === navigationGeneration.current) setUpdatingMemberId(null);
    }
  };

  if (!project?.id || project.id !== routeProjectId) return null;
  if (!canManageMembers) return <Redirect to={`/projects/${project.id}/data`} />;

  return (
    <section className="project-members">
      <header className="project-members__header">
        <div>
          <h1>Project members</h1>
          <p>Add organization accounts and assign project-level roles.</p>
        </div>
      </header>

      <form className="project-members__add" onSubmit={addMembers}>
        <div className="project-members__add-heading">
          <h2>Add members</h2>
          <p>Select organization accounts, then choose their project role.</p>
        </div>
        <div className="project-members__add-controls">
          <div className="project-members__field project-members__field--accounts">
            <label htmlFor="project-member-accounts">Accounts</label>
            <TagAutocomplete<number>
              name="project-member-accounts"
              options={candidateOptions}
              value={selectedUserIds}
              onChange={setSelectedUserIds}
              onSearch={searchCandidates}
              searchFilter={candidateSearchFilter}
              renderOption={renderCandidateOption}
              isLoading={searchingCandidates}
              minSearchLength={1}
              placeholder="Search by name or email"
              triggerClassName="project-members__account-picker"
              contentClassName="project-members__account-options"
            />
          </div>
          <div className="project-members__field project-members__field--role">
            <label htmlFor="project-member-role">Role</label>
            <Select
              id="project-member-role"
              aria-label="Role for new members"
              value={newMemberRole}
              options={roleOptions}
              onChange={(role) => setNewMemberRole(role as ProjectRole)}
            />
          </div>
          <Button
            type="submit"
            leading={<IconPlus />}
            waiting={saving}
            disabled={saving || selectedUserIds.length === 0}
            className="project-members__add-button"
          >
            Add {selectedUserIds.length || ""} Member{selectedUserIds.length === 1 ? "" : "s"}
          </Button>
        </div>
      </form>

      <div className="project-members__toolbar">
        <h2>
          Current members <span>({members.length})</span>
        </h2>
        <Input
          aria-label="Search current members"
          placeholder="Search members"
          type="search"
          value={memberSearch}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setMemberSearch(event.target.value)}
        />
      </div>

      {loading ? (
        <div className="project-members__loading">
          <Spinner size={32} />
        </div>
      ) : (
        <div className="project-members__table-wrap">
          <table className="project-members__table">
            <thead>
              <tr>
                <th>Account</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.length === 0 ? (
                <tr>
                  <td className="project-members__empty" colSpan={3}>
                    No members match your search.
                  </td>
                </tr>
              ) : (
                filteredMembers.map((member) => (
                  <tr key={member.id}>
                    <td className="project-members__account">
                      {getUserDisplayName(member.user) && <strong>{getUserDisplayName(member.user)}</strong>}
                      <span>{member.user.email}</span>
                    </td>
                    <td>
                      <Select
                        aria-label={`Role for ${member.user.email}`}
                        value={member.role}
                        options={roleOptions}
                        disabled={updatingMemberId === member.id}
                        onChange={(role) => void updateRole(member, role as ProjectRole)}
                      />
                    </td>
                    <td>
                      <Tooltip title="Remove member">
                        <Button
                          look="string"
                          variant="negative"
                          aria-label={`Remove ${member.user.email}`}
                          disabled={updatingMemberId === member.id}
                          onClick={() => void removeMember(member)}
                        >
                          <IconTrash />
                        </Button>
                      </Tooltip>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

ProjectMembersSettings.title = "Members";
ProjectMembersSettings.path = "/members";
