import React, {useCallback, useEffect, useState} from "react";
import { Checkbox } from "@humansignal/ui";
import { useConfig } from "../../../providers/ConfigProvider";
import { useAPI } from "apps/labelstudio/src/providers/ApiProvider";
import { useCurrentUser } from "../../../providers/CurrentUser";
import { Spinner } from "apps/labelstudio/src/components";

export const EmailPreferences = () => {
  const config = useConfig();
  const { user } = useCurrentUser();
  const api = useAPI();
  const [isLoading, setIsLoading] = useState(false);
  const [isAllowNewsLetter, setIsAllowNewsLetter] = useState(config.user.allow_newsletters);

  const toggleHandler = useCallback(async (e) => {
    setIsAllowNewsLetter(e.target.checked);
    setIsLoading(true);
    await api.callApi("updateUser", {
      params: {
        pk: user?.id,
      },
      body: {
        allow_newsletters: e.target.checked ? 1 : 0,
      },
    })
    setIsLoading(false);
  }, [user?.id]);

  return (
    <div className="">
      <a id="email-preferences" />
      <h2>Email Preferences</h2>

      {isLoading ? <Spinner /> : (
        <Checkbox checked={isAllowNewsLetter} onChange={toggleHandler}>
          Subscribe to HumanSignal news and tips from Heidi
        </Checkbox>
      )}
    </div>
  );
};