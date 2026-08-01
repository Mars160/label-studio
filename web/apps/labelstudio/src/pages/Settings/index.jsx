import { Redirect } from "react-router-dom";
import { useProject } from "../../providers/ProjectProvider";
import { useParams } from "../../providers/RoutesProvider";
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
  const params = useParams();
  const routeProjectId = Number(params.id);
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
    : [];

  if (!project?.id || project.id !== routeProjectId) return null;
  if (!project.capabilities?.manage_project) return <Redirect to={`/projects/${project.id}/data`} />;

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
  const params = useParams();
  const routeProjectId = Number(params.id);
  if (!project?.id || project.id !== routeProjectId) return null;
  return project.capabilities?.manage_project ? <GeneralSettings /> : <Redirect to={`/projects/${project.id}/data`} />;
};

export const SettingsPage = {
  title: "Settings",
  path: "/settings",
  exact: true,
  layout: MenuLayout,
  component: SettingsLanding,
  pages,
};
