import { types } from "mobx-state-tree";
import { Assignee } from "./Assignee";
import { User } from "./Users";

const Root = types.model("AssigneeTestRoot", {
  users: types.array(User),
  assignees: types.array(Assignee),
});

const user = {
  id: 1,
  first_name: "Test",
  last_name: "User",
  username: "test-user",
  email: "test@example.com",
  last_activity: "2026-01-01T00:00:00Z",
  avatar: null,
  initials: "TU",
};

describe("Assignee", () => {
  it("resolves a user reference when the user exists in the root store", () => {
    const root = Root.create({ users: [user], assignees: [user.id] });

    expect(root.assignees[0].user).toBe(root.users[0]);
    expect(root.assignees[0].fullName).toBe("Test User");
  });

  it("does not throw when a referenced user is missing", () => {
    const root = Root.create({ users: [], assignees: [user.id] });
    const assignee = root.assignees[0];

    expect(() => assignee.user).not.toThrow();
    expect(assignee.user).toBeUndefined();
    expect(assignee.fullName).toBeUndefined();
    expect(assignee.id).toBe(user.id);
  });
});
