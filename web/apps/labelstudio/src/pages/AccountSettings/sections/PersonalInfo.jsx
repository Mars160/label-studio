import { Button } from "apps/labelstudio/src/components";
import { Input } from "apps/labelstudio/src/components/Form/Elements";
import { Userpic } from "apps/labelstudio/src/components/Userpic/Userpic";
import React from "react";

export const PersonalInfo = () => {
  return (
    <div className="">
      <a id="personal-info" />
      <h2>Personal Info</h2>
      <div className="">
        <Userpic />
        <Input className="file-input" type="file" name="avatar" accept="image/png, image/jpeg, image/jpg"/>
      </div>
      <div className="">
        <Input label="First Name" name="fname" />
        <Input label="Last Name" name="lname"/>
      </div>
      <div className="">
        <Input label="E-mail" name="email" type="email" />
        <Input label="Phone" name="phone" type="phone"/>
      </div>
      <div className="">
        <Button look="primary" size="compact">Save</Button>
      </div>
    </div>
  )
};