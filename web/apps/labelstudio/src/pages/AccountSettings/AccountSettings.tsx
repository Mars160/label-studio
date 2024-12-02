import React, { useMemo, useState } from "react";
import { Redirect } from "react-router-dom";
import { useAPI } from "../../providers/ApiProvider";
import { SidebarMenu } from "../../components/SidebarMenu/SidebarMenu";
import styles from "./AccountSettings.module.scss";
import { accountSettingsSections } from "./sections";
import { Card } from "../../components/Card/Card";

export const AccountSettingsPage = () => {
  const api = useAPI();

  return (
    <div className={styles.accountSettings}>
      
      {accountSettingsSections?.map(({component: Section, id}: any) => (
        <Card key={id}>
          <Section />
        </Card>
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
