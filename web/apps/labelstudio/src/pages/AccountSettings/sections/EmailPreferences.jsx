import React from "react";
import { Checkbox } from "@humansignal/ui";

export const EmailPreferences = () => {
  return (
    <>
      <a id="email-preferences" />
      <div className="">
        <h2>Email Preferences</h2>
        <Checkbox label="Subscribe to HumanSignal news and tips from Heidi" />
      </div>
    </>
  );
};