import React, { useEffect } from "react";
import { Divider } from "../../../components/Divider/Divider";
import { useCurrentUser } from "../../../providers/CurrentUser";
import { useAPI } from "../../../providers/ApiProvider";
import { OrganizationPage } from "../../../pages/Organization";
export const MembershipInfo = () => {
  const api = useAPI();
  const { user } = useCurrentUser();

  return (
    <div className="">
      <a id="membership-info" />
      <h2>Membership Info</h2>
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

      <Divider height="1px"/>
      <div className="">
        <div>Organization</div>
        <div><a href={OrganizationPage.path}>{user?.email}</a></div>
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
  )
};