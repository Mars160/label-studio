import { types } from "mobx-state-tree";
import { Assignee } from "./Assignee";
import { FF_DISABLE_GLOBAL_USER_FETCHING } from "../utils/feature-flags";
import { User } from "./Users";

const Root = types.model("AssigneeTestRoot", {
  users: types.array(User),
  assignees: types.array(Assignee),
});

const TaskRoot = types.model("AssigneeTaskTestRoot", {
  users: types.array(User),
  taskStore: types.model("AssigneeTaskStore", {
    list: types.array(
      types.model("AssigneeTask", {
        id: types.identifierNumber,
        annotators: types.array(Assignee),
      }),
    ),
  }),
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

  it("resolves an annotator from the real task store path", () => {
    const root = TaskRoot.create({
      users: [user],
      taskStore: { list: [{ id: 10, annotators: [user.id] }] },
    });

    expect(root.taskStore.list[0].annotators[0].user).toBe(root.users[0]);
  });

  it("does not throw at the task store path when global users are unavailable", () => {
    const root = TaskRoot.create({
      users: [],
      taskStore: { list: [{ id: 10, annotators: [user.id] }] },
    });
    const assignee = root.taskStore.list[0].annotators[0];

    expect(() => assignee.user).not.toThrow();
    expect(assignee.user).toBeUndefined();
    expect(assignee.id).toBe(user.id);
  });

  it("accepts an embedded user when global user fetching is disabled", () => {
    const originalAppSettings = window.APP_SETTINGS;
    window.APP_SETTINGS = {
      sentry_environment: "production",
      feature_flags: { [FF_DISABLE_GLOBAL_USER_FETCHING]: true },
    };

    try {
      const root = Root.create({
        users: [],
        assignees: [{ ...user, user_id: user.id }],
      });

      expect(root.assignees[0].user.fullName).toBe("Test User");
    } finally {
      window.APP_SETTINGS = originalAppSettings;
    }
  });
});
