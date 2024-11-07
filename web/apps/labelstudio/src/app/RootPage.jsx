import { useEffect } from "react";
import { Menubar } from "../components/Menubar/Menubar";
import { useToast } from "@humansignal/ui";
import { ProjectRoutes } from "../routes/ProjectRoutes";

const STORAGE_PERSISTANCE_TIMEOUT = -1;

export const RootPage = ({ content }) => {
  const toast = useToast();
  const pinned = localStorage.getItem("sidebar-pinned") === "true";
  const opened = pinned && localStorage.getItem("sidebar-opened") === "true";
  useEffect(() => {
    if (window.APP_SETTINGS?.flags?.storage_persistance) return;
    toast.show({
      message: (
        <>
          Data will be persisted on the node running this container, but all data will be lost if this node goes away.
        </>
      ),
      type: "alertError",
      closeable: false,
      duration: STORAGE_PERSISTANCE_TIMEOUT,
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
