import { PersonalInfo } from "./PersonalInfo";
import { EmailPreferences } from "./EmailPreferences";
import React from "react";
import { PersonalAccessToken } from "./PersonalAccessToken";
import { MembershipInfo } from "./MembershipInfo";
type SectionType = {
  title: string;
  id: string;
  component: React.FC;
}
export const accountSettingsSections: SectionType[] = [
  {
    title: "Personal Info",
    id: "personal-info",
    component: PersonalInfo,
  },
  {
    title: "Email Preferences",
    id: "email-preferences",
    component: EmailPreferences,
  },
  {
    title: "Personal Access Token",
    id: "personal-access-token",
    component: PersonalAccessToken,
  },
  {
    title: "Membership Info",
    id: "membership-info",
    component: MembershipInfo,
  }
]