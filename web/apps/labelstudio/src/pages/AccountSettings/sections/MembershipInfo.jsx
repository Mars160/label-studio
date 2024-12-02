import React from "react";
import { Divider } from "../../../components/Divider/Divider";
export const MembershipInfo = () => {
  return (
    <>
      <a id="membership-info" />
      <div className="">
        <h2>Membership Info</h2>
        <div className="">
          <div>User ID</div>
          <div></div>
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
          <div></div>
        </div>

        <div className="">
          <div>My role</div>
          <div></div>
        </div>

        <div className="">
          <div>Organization ID</div>
          <div></div>
        </div>

        <div className="">
          <div>Owner</div>
          <div></div>
        </div>

        <div className="">
          <div>Created</div>
          <div></div>
        </div>
      </div>
    </>
  )
};