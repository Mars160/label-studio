import { Menubar } from "../components/Menubar/Menubar";
import { ProjectRoutes } from "../routes/ProjectRoutes";
import { useOrgValidation } from "../hooks/useOrgValidation";
import { useEffect } from "react";

export const RootPage = ({ content }) => {
  useOrgValidation();
  const pinned = localStorage.getItem("sidebar-pinned") === "true";
  const opened = pinned && localStorage.getItem("sidebar-opened") === "true";

  useEffect(() => {
    const frontendEvents = window.APP_SETTINGS.frontend_events;

    frontendEvents.forEach((event) => {
      if (window.APP_SETTINGS.collect_analytics && event.with_iframe) {
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.labelstud.io/track/?event=${event.name}`;
        iframe.style.display = "none";
        iframe.style.visibility = "hidden";
        document.body.appendChild(iframe);
      }

      // TODO: __lsa(event.name)
      // I don't know why but __lsa isn't defined yet here
    });
  }, []);

  return (
    <Menubar
      enabled={true}
      defaultOpened={opened}
      defaultPinned={pinned}
      onSidebarToggle={(visible) => localStorage.setItem("sidebar-opened", visible)}
      onSidebarPin={(pinned) => localStorage.setItem("sidebar-pinned", pinned)}
    >
      <ProjectRoutes content={content} />
    </Menubar>
  );
};
