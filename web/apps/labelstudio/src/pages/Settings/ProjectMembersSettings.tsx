import { useCallback, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { IconPlus, IconTrash } from "@humansignal/icons";
import { Button, Select, Spinner, Tooltip, useToast } from "@humansignal/ui";
import Input from "../../components/Form/Elements/Input/Input";
import { useAPI } from "../../providers/ApiProvider";
import { useProject } from "../../providers/ProjectProvider";
import "./ProjectMembersSettings.prefix.css";

type ProjectMember = {
  id: number;
  role: "admin" | "annotator";
  enabled: boolean;
  user: APIUserSimple;
};

const roleOptions = [
  { value: "admin", label: "Administrator" },
  { value: "annotator", label: "Annotator" },
];

export const ProjectMembersSettings = () => {
  const api = useAPI();
  const toast = useToast();
  const { project } = useProject();
  const [members, setMembers] = useState<ProjectMember[]>([]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const canManageMembers = project?.capabilities?.manage_members === true;

  const loadMembers = useCallback(async () => {
    if (!project?.id) return;
    setLoading(true);
    try {
      const result = await api.callApi("projectMembers", { params: { pk: project.id } });
      setMembers(Array.isArray(result) ? result : (result?.results ?? []));
    } finally {
      setLoading(false);
    }
  }, [api, project?.id]);

  useEffect(() => {
    void loadMembers();
  }, [loadMembers]);

  const addMember = async (event: FormEvent) => {
    event.preventDefault();
    if (!email.trim() || !project?.id) return;
    setSaving(true);
    try {
      await api.callApi("addProjectMember", {
        params: { pk: project.id },
        body: { email: email.trim() },
      });
      setEmail("");
      await loadMembers();
      toast.show({ message: "Project member added" });
    } finally {
      setSaving(false);
    }
  };

  const updateRole = async (member: ProjectMember, role: ProjectMember["role"]) => {
    if (!project?.id || member.role === role) return;
    await api.callApi("updateProjectMember", {
      params: { pk: project.id, memberPk: member.id },
      body: { role },
    });
    await loadMembers();
    toast.show({ message: "Project role updated" });
  };

  const removeMember = async (member: ProjectMember) => {
    if (!project?.id) return;
    await api.callApi("deleteProjectMember", {
      params: { pk: project.id, memberPk: member.id },
    });
    await loadMembers();
    toast.show({ message: "Project member removed" });
  };

  return (
    <section className="project-members">
      <header className="project-members__header">
        <div>
          <h1>Project members</h1>
          <p>Members can add existing organization accounts. Administrators manage roles and membership.</p>
        </div>
        <form className="project-members__invite" onSubmit={addMember}>
          <Input
            aria-label="Member email"
            placeholder="member@example.com"
            type="email"
            value={email}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
            required
          />
          <Button type="submit" leading={<IconPlus />} disabled={saving || !email.trim()}>
            Add Member
          </Button>
        </form>
      </header>

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
                <th aria-label="Actions" />
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td>
                    <strong>
                      {[member.user.first_name, member.user.last_name].filter(Boolean).join(" ") || member.user.email}
                    </strong>
                    <span>{member.user.email}</span>
                  </td>
                  <td>
                    <Select
                      aria-label={`Role for ${member.user.email}`}
                      value={member.role}
                      options={roleOptions}
                      disabled={!canManageMembers}
                      onChange={(role) => void updateRole(member, role as ProjectMember["role"])}
                    />
                  </td>
                  <td>
                    {canManageMembers && (
                      <Tooltip title="Remove member">
                        <Button
                          look="string"
                          variant="negative"
                          aria-label={`Remove ${member.user.email}`}
                          onClick={() => void removeMember(member)}
                        >
                          <IconTrash />
                        </Button>
                      </Tooltip>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

ProjectMembersSettings.title = "Members";
ProjectMembersSettings.path = "/members";
