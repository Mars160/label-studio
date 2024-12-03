import { useCallback, useRef, useState } from "react";
import { InputFile } from "@humansignal/ui";
import { Button } from "apps/labelstudio/src/components";
import { Input } from "apps/labelstudio/src/components/Form/Elements";
import { Userpic } from "apps/labelstudio/src/components/Userpic/Userpic";
import { useCurrentUser } from "../../../providers/CurrentUser";
import { useAPI } from "apps/labelstudio/src/providers/ApiProvider";
import { useToast } from "@humansignal/ui";
import styles from "../AccountSettings.module.scss";

export const PersonalInfo = () => {
  const api = useAPI();
  const toast = useToast();
  const { user, fetch, isInProgress } = useCurrentUser();
  const [fname, setFName] = useState(user?.first_name);
  const [lname, setLName] = useState(user?.last_name);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
  const userInfoForm = useRef();
  const userAvatarForm = useRef();
  const avatarRef = useRef();
  const fileChangeHandler = (e) => userAvatarForm.current.requestSubmit();
  const avatarFormSubmitHandler = useCallback(
    async (e, isDelete = false) => {
      e.preventDefault();
      const response = await api.callApi(isDelete ? "deleteUserAvatar" : "updateUserAvatar", {
        params: {
          pk: user?.id,
        },
        body: {
          avatar: avatarRef.current.files[0],
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
        errorFilter: () => true,
      });
      if (!isDelete && response?.status) {
        toast.show({ message: response?.response?.detail ?? "Error updating avatar", type: "error" });
      } else {
        fetch();
      }
    },
    [user?.id, fetch],
  );
  const userFormSubmitHandler = (e) => {
    e.preventDefault();
    console.log("userFormSubmitHandler", e);
  };

  return (
    <div className="">
      <a id="personal-info" />
      <h1>Personal Info</h1>
      <div className={styles.flexRow}>
        <Userpic user={user} isInProgress={isInProgress} size={92} style={{ flex: "none" }} />
        <form ref={userAvatarForm} className={styles.flex1} onSubmit={(e) => avatarFormSubmitHandler(e)}>
          <InputFile
            name="avatar"
            onChange={fileChangeHandler}
            accept="image/png, image/jpeg, image/jpg"
            ref={avatarRef}
          />
        </form>
        {user?.avatar && (
          <form onSubmit={(e) => avatarFormSubmitHandler(e, true)}>
            <Button look="danger">Delete</Button>
          </form>
        )}
      </div>
      <form ref={userInfoForm} onSubmit={userFormSubmitHandler}>
        <div className={styles.flexRow}>
          <div className={styles.flex1}>
            <Input label="First Name" name="fname" value={fname} onChange={(e) => setFName(e.target.value)} />
          </div>
          <div className={styles.flex1}>
            <Input label="Last Name" name="lname" value={lname} onChange={(e) => setLName(e.target.value)} />
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
          <Button look="primary" size="compact">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
