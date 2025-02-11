import { memo, useEffect, useRef, useState } from "react";
import { RootSymbol, type TreeAction, useTreeContext, IdDelimiter } from "./TreeContext";
import styles from "./MultiTreeSelect.module.scss";

export const TreeSelected = memo(
  ({
    allLabel,
    placeholder,
    RootLevelIcon,
  }: { RootLevelIcon?: React.ReactNode; allLabel?: string; placeholder?: string }) => {
    const update = useState(0)[1];
    const { selected, allNodeIds, getLabel, subscribe } = useTreeContext();
    const selectedRef = useRef<Array<string>>(
      selected.current.length === allNodeIds.current.length ? [RootSymbol.toString()] : selected.current,
    );
    useEffect(() => {
      // Subscribe to changes in the selected state
      return subscribe(RootSymbol, (change: TreeAction) => {
        if (change.action === "select") {
          if (allNodeIds.current.length === selected.current.length) {
            selectedRef.current = [RootSymbol.toString()];
          } else if (selected.current) {
            const currentSelection = [...selected.current].sort((a, b) => a.localeCompare(b));
            // Only show the uppermost selected node when all nodes are selected
            // when a node is encountered, filter out all other nodes which begin with the same path
            // ex. 2-1, 2-1-1, 2-1-2, 2-2, 2-1-1, 3, 3-1
            // Since 2-1 is selected, 2-1-1, 2-1-2, 2-1-1 should be filtered out
            // Since 3 is selected, 3-1 should be filtered out
            let currentPath = null;
            selectedRef.current = currentSelection.filter((id, index) => {
              if (index === 0) {
                return true;
              }
              currentPath ??= `${currentSelection[index - 1]}${IdDelimiter}`;
              const partOfPath = id.startsWith(currentPath);
              if (!partOfPath) {
                currentPath = null;
              }

              return !partOfPath;
            });
          }
          update((prev: number) => prev + 1);
        }
      });
    }, []);

    let selectedNodes = null;
    if (!selectedRef.current.length) {
      selectedNodes = <span className={styles.selection__placeholder}>{placeholder}</span>;
    } else {
      selectedNodes = selectedRef.current?.map((id) => (
        <span className={styles.selection__tag} key={id}>
          {!!RootLevelIcon && id.toString().indexOf("-") === -1 && (
            <span className={styles.selection__tag__icon}>{RootLevelIcon}</span>
          )}
          <span>{id === RootSymbol.toString() ? allLabel : getLabel(id)}</span>
        </span>
      ));
    }

    return <div className={styles.selection}>{selectedNodes}</div>;
  },
);
