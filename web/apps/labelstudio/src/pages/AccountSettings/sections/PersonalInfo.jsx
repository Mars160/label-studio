import React from "react";
import { Button } from "apps/labelstudio/src/components";
import { Input } from "apps/labelstudio/src/components/Form/Elements";
import { Userpic } from "apps/labelstudio/src/components/Userpic/Userpic";
import { useCurrentUser } from "../../../providers/CurrentUser";

export const PersonalInfo = () => {
  const { user } = useCurrentUser();
  console.log("user", user);
  return (
    <div className="">
      <a id="personal-info" />
      <h2>Personal Info</h2>
      <div className="">
        <Userpic user={user} />
        <Input className="file-input" type="file" name="avatar" accept="image/png, image/jpeg, image/jpg"/>
      </div>
      <div className="">
        <Input label="First Name" name="fname" value={user?.first_name} />
        <Input label="Last Name" name="lname" value={user?.last_name} />
      </div>
      <div className="">
        <Input label="E-mail" name="email" type="email" value={user?.email} />
        <Input label="Phone" name="phone" type="phone" value={user?.phone} />
      </div>
      <div className="">
        <Button look="primary" size="compact">Save</Button>
      </div>
    </div>
  )
};