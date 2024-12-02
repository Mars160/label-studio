import React, { useMemo, useState } from "react";
import { Redirect } from "react-router-dom";
import { useAPI } from "../../providers/ApiProvider";
import { SidebarMenu } from "../../components/SidebarMenu/SidebarMenu";
import "./AccountSettings.scss";
import { useCurrentUser } from "../../providers/CurrentUser";
import { accountSettingsSections } from "./sections";

export const AccountSettingsPage = () => {
  const api = useAPI();
  const { user } = useCurrentUser();
  // const abortController = useAbortController();

  console.log("user", api, user, accountSettingsSections);

  return (
    <div className="account-settings">
      
      {accountSettingsSections?.map(({component: Section, id}: any) => (
        <Section key={id} />
      ))}
    </div>
  );
};


const MenuLayout = ({ children, ...routeProps }: { children: any, routeProps: any}) => {
  const menuItems = useMemo(() => accountSettingsSections.map(({title, id}) => ({title, path: `#${id}`})), [accountSettingsSections]);

  return <SidebarMenu menuItems={menuItems} path={routeProps.match.url} children={children} />;
};

AccountSettingsPage.title = "My Account";
AccountSettingsPage.path = "/user/account";
AccountSettingsPage.exact = true;
AccountSettingsPage.routes = () => [
  {
    title: () => 'My Account',
    exact: true,
    component: () => {
      return <Redirect to={AccountSettingsPage.path} />;
    },
    layout: MenuLayout,
    // pages: {
    //   DataManagerPage,
    //   SettingsPage,
    // },
  },
];
