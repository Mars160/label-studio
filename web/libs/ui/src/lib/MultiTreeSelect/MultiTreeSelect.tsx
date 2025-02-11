import { memo } from "react";
import { type MultiTreeSelectProps, useMultiTreeSelectProvider } from "./TreeContext";
import { TreeSelected } from "./TreeSelected";
import { TreeSearch } from "./TreeSearch";
import { TreeSelect } from "./TreeSelect";
import styles from "./MultiTreeSelect.module.scss";

export const MultiTreeSelect = memo(
  ({ children, allLabel, placeholder, RootLevelIcon, ...props }: MultiTreeSelectProps) => {
    console.trace("MultiTreeSelect1", children, props);
    const { Provider } = useMultiTreeSelectProvider(props);

    return (
      <Provider>
        <div className={styles.multiTreeSelect}>
          {children ? (
            children
          ) : (
            <div className={styles.content}>
              <TreeSelected allLabel={allLabel} placeholder={placeholder} RootLevelIcon={RootLevelIcon} />
              <TreeSearch />
              <TreeSelect allLabel={allLabel} />
            </div>
          )}
        </div>
      </Provider>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.selected === nextProps.selected && prevProps.data === nextProps.data;
  },
);
