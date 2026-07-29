import { useProject } from "../../providers/ProjectProvider";
import { SidebarMenu } from "../../components/SidebarMenu/SidebarMenu";
import { WebhookPage } from "../WebhookPage/WebhookPage";
import { DangerZone } from "./DangerZone";
import { GeneralSettings } from "./GeneralSettings";
import { AnnotationSettings } from "./AnnotationSettings";
import { LabelingSettings } from "./LabelingSettings";
import { MachineLearningSettings } from "./MachineLearningSettings/MachineLearningSettings";
import { PredictionsSettings } from "./PredictionsSettings/PredictionsSettings";
import { StorageSettings } from "./StorageSettings/StorageSettings";
import { ProjectMembersSettings } from "./ProjectMembersSettings";
import "./settings.prefix.css";

export const MenuLayout = ({ children, ...routeProps }) => {
  const { project } = useProject();
  const menuItems = project?.capabilities?.manage_project
    ? [
        GeneralSettings,
        ProjectMembersSettings,
        LabelingSettings,
        AnnotationSettings,
        MachineLearningSettings,
        PredictionsSettings,
        StorageSettings,
        WebhookPage,
        DangerZone,
      ]
    : [ProjectMembersSettings];

  return <SidebarMenu menuItems={menuItems.filter(Boolean)} path={routeProps.match.url} children={children} />;
};

const pages = {
  AnnotationSettings,
  LabelingSettings,
  MachineLearningSettings,
  PredictionsSettings,
  StorageSettings,
  WebhookPage,
  ProjectMembersSettings,
  DangerZone,
};

const SettingsLanding = () => {
  const { project } = useProject();
  return project?.capabilities?.manage_project ? <GeneralSettings /> : <ProjectMembersSettings />;
};

export const SettingsPage = {
  title: "Settings",
  path: "/settings",
  exact: true,
  layout: MenuLayout,
  component: SettingsLanding,
  pages,
};
