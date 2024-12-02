import React, { useMemo, useState } from "react";
import { Redirect } from "react-router-dom";
import { useAPI } from "../../providers/ApiProvider";
import { SidebarMenu } from "../../components/SidebarMenu/SidebarMenu";
import styles from "./AccountSettings.module.scss";
import { accountSettingsSections } from "./sections";
import { Card } from "../../components/Card/Card";


export const AccountSettingsPage = () => {
  const api = useAPI();
  const menuItems = useMemo(() => accountSettingsSections.map(({title, id}) => ({title, path: `#${id}`})), [accountSettingsSections]);

  return (
    <div className={styles.accountSettings}>
      <SidebarMenu menuItems={menuItems} path={AccountSettingsPage.path} >
        <div className={styles.accountSettings__content}>
          {accountSettingsSections?.map(({component: Section, id}: any) => (
            <Card key={id}>
              <Section />
            </Card>
          ))}
        </div>
      </SidebarMenu>
    </div>
  );
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
    // pages: {
    //   DataManagerPage,
    //   SettingsPage,
    // },
  },
];
