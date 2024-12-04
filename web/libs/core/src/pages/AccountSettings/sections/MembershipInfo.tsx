// import { Divider } from "../../../../../../apps/labelstudio/src/components/Divider/Divider";
// import { useCurrentUser } from "../../../../../../apps/labelstudio/src/providers/CurrentUser";
// import { useAPI } from "../../../../../../apps/labelstudio/src/providers/ApiProvider";
// import { OrganizationPage } from "../../../../../../apps/labelstudio/src/pages/Organization";
export const MembershipInfo = () => {
  // const api = useAPI();
  // const { user } = useCurrentUser();
  const user = {};
  return (
    <div className="">
      <a id="membership-info" />
      <h1>Membership Info</h1>
      <div className="">
        <div>User ID</div>
        <div>{user?.id}</div>
      </div>

      <div className="">
        <div>Registration date</div>
        <div></div>
      </div>

      <div className="">
        <div>Annotations submitted</div>
        <div></div>
      </div>

      <div className="">
        <div>Projects contributed to</div>
        <div></div>
      </div>

      {/* <Divider height="1px" /> */}
      <div className="">
        <div>Organization</div>
        <div>
          <a href="/organization">{user?.email}</a>
        </div>
      </div>

      <div className="">
        <div>My role</div>
        <div>Owner</div>
      </div>

      <div className="">
        <div>Organization ID</div>
        <div>{user?.active_organization}</div>
      </div>

      <div className="">
        <div>Owner</div>
        <div>{user?.email}</div>
      </div>

      <div className="">
        <div>Created</div>
        <div></div>
      </div>
    </div>
  );
};
