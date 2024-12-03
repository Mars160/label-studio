import React, { useRef, useState } from "react";
import { Button } from "apps/labelstudio/src/components";
import { Input } from "apps/labelstudio/src/components/Form/Elements";
import { Userpic } from "apps/labelstudio/src/components/Userpic/Userpic";
import { useCurrentUser } from "../../../providers/CurrentUser";
import styles from "../AccountSettings.module.scss";
import { InputFile } from "@humansignal/ui";

export const PersonalInfo = () => {
  const { user } = useCurrentUser();
  const [fname, setFName] = useState(user?.first_name);
  const [lname, setLName] = useState(user?.last_name);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
  const userInfoForm = useRef();
  const userAvatarForm = useRef();
  const fileChangeHandler = (e) => {
    userAvatarForm.current.submit();
  };
  const avatarFormSubmitHandler = (e) => {
    console.log("avatarFormSubmitHandler", e);
  };
  const userFormSubmitHandler = (e) => {
    console.log("userFormSubmitHandler", e);
  };
  return (
    <div className="">
      <a id="personal-info" />
      <h1>Personal Info</h1>
      <form ref={userAvatarForm} onSubmit={avatarFormSubmitHandler}>
        <div className={styles.flexRow}>
          <Userpic user={user} size={92} style={{flex: "none"}}/>
          <InputFile name="avatar" onChange={fileChangeHandler} accept="image/png, image/jpeg, image/jpg" />
          {user?.avatar ? <Button look="danger">Delete</Button> : <Button style={{display: "none"}} look="primary">Upload</Button>}
        </div>
      </form>
      <form ref={userInfoForm} onSubmit={userFormSubmitHandler}>
        <div className={styles.flexRow}>
          <div className={styles.flex1}>
            <Input label="First Name" name="fname" value={fname} onChange={(e) => setFName(e.target.value)}/>
          </div>
          <div className={styles.flex1}>
            <Input label="Last Name" name="lname" value={lname} onChange={(e) => setLName(e.target.value)}/>
          </div>
        </div>
        <div className={styles.flexRow}>
          <div className={styles.flex1}>
            <Input label="E-mail" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={styles.flex1}>
            <Input label="Phone" name="phone" type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
        </div>
        <div className={styles.flexRow}>
          <Button look="primary" size="compact">Save</Button>
        </div>
      </form>
    </div>
  )
};