import { getRoot, types } from "mobx-state-tree";
import { User } from "./Users";
import { StringOrNumberID } from "./types";

const UserReference = types.safeReference(User, {
  get(identifier, parent) {
    return getRoot(parent).users?.find((user) => String(user.id) === String(identifier));
  },
  set(user) {
    return user.id;
  },
});

const UserOrReference = types.union(
  {
    dispatcher: (snapshot) => (snapshot !== null && typeof snapshot === "object" ? User : UserReference),
  },
  User,
  UserReference,
);

export const Assignee = types
  .model("Assignee", {
    id: StringOrNumberID,
    user: types.late(() => UserOrReference),
    review: types.maybeNull(types.enumeration(["accepted", "rejected", "fixed"])),
    reviewed: types.maybeNull(types.boolean),
    annotated: types.maybeNull(types.boolean),
  })
  .views((self) => ({
    get firstName() {
      return self.user?.firstName;
    },
    get lastName() {
      return self.user?.lastName;
    },
    get username() {
      return self.user?.username;
    },
    get email() {
      return self.user?.email;
    },
    get lastActivity() {
      return self.user?.lastActivity;
    },
    get avatar() {
      return self.user?.avatar;
    },
    get initials() {
      return self.user?.initials;
    },
    get fullName() {
      return self.user?.fullName;
    },
  }))
  .preProcessSnapshot((sn) => {
    let result = sn;

    if (typeof sn === "number") {
      result = {
        id: sn,
        user: sn,
        annotated: true,
        review: null,
        reviewed: false,
      };
    } else {
      const { user_id, user: nestedUser, annotated, review, reviewed, ...user } = sn;
      const id = user_id ?? sn.id;

      const hasUserProperties = Object.keys(user).length > 0;

      let resolvedUser = id;
      if (nestedUser && typeof nestedUser === "object") {
        resolvedUser = nestedUser;
      } else if (hasUserProperties) {
        resolvedUser = { id, ...user };
      }

      result = {
        id,
        user: resolvedUser,
        annotated,
        review,
        reviewed,
      };
    }

    return result;
  });
