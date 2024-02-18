import React from 'react';
import { SidebarMenu } from '../../components/SidebarMenu/SidebarMenu';
import { WebhookPage } from '../WebhookPage/WebhookPage';
import { DangerZone } from './DangerZone';
import { GeneralSettings } from './GeneralSettings';
import { AnnotationSettings } from './AnnotationSettings';
import { LabelingSettings } from './LabelingSettings';
import { MachineLearningSettings } from './MachineLearningSettings/MachineLearningSettings';
import { PredictionsSettings } from './PredictionsSettings/PredictionsSettings';
import { StorageSettings } from './StorageSettings/StorageSettings';


export const MenuLayout = ({children, ...routeProps}) => {
  return (
    <SidebarMenu
      menuItems={[
        GeneralSettings,
        LabelingSettings,
	AnnotationSettings,
        MachineLearningSettings,
	PredictionsSettings,
        StorageSettings,
        WebhookPage,
        DangerZone,
      ]}
      path={routeProps.match.url}
      children={children}
    />
  );
};

export const SettingsPage = {
  title: "Settings",
  path: "/settings",
  exact: true,
  layout: MenuLayout,
  component: GeneralSettings,
  pages: {
    AnnotationSettings,
    LabelingSettings,
    MachineLearningSettings,
    PredictionsSettings,
    StorageSettings,
    WebhookPage,
    DangerZone,
  },
};
