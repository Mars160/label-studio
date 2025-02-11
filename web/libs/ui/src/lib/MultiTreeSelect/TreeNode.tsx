import { memo, useEffect, useState } from "react";
import {
  IdDelimiter,
  RootSymbol,
  type TreeAction,
  type TreeNodeProps,
  getChildrenIds,
  useTreeContext,
} from "./TreeContext";
import { Checkbox } from "@humansignal/ui";
import { Button } from "apps/labelstudio/src/components/Button/Button";
import { IconChevronDown } from "../../assets/icons";
import styles from "./MultiTreeSelect.module.scss";
import clsx from "clsx";

export const TreeNode = memo(({ id, label, children }: TreeNodeProps) => {
  const update = useState(0)[1];
  const {
    allNodeIds,
    selected,
    expanded: allExpanded,
    notify,
    subscribe,
    searchQuery,
    searchResults,
  } = useTreeContext();
  const isRoot = id === RootSymbol.toString();

  const notifyParent = (state: TreeAction) => {
    // notify the parent
    let parentId: string | Symbol = RootSymbol;
    if (typeof state.id === "string" && state.id !== RootSymbol.toString()) {
      parentId = state.id.split(IdDelimiter).slice(0, -1).join(IdDelimiter) || RootSymbol;
    }
    // Ensure the root symbol is always a symbol even if it came from a string
    if (state.id === RootSymbol.toString()) {
      state.id = RootSymbol;
    }
    notify(parentId, state);
    update((prev: number) => prev + 1);
  };

  const setSelected = (value: boolean) => {
    // Special handling for the root node All case
    if (isRoot) {
      if (value) {
        selected.current = [...allNodeIds.current];
      } else {
        selected.current = [];
      }
      notifyParent({ id, action: "select", value });
      return;
    }

    // Update the selected state
    const index = selected.current.indexOf(id);
    if (value && index === -1) {
      selected.current.push(id);
      // select all children of this leaf
      const childrenIds = getChildrenIds({ id, label, children });
      selected.current = Array.from(new Set([...selected.current, ...childrenIds]));
    } else if (!value && index !== -1) {
      selected.current.splice(index, 1);
      // unselect all children
      const childrenIds = getChildrenIds({ id, label, children });
      selected.current = selected.current.filter((id) => !childrenIds.includes(id));
    }
    notifyParent({ id, action: "select", value });
  };

  const updateExpanded = (value: boolean) => {
    const index = allExpanded.current.indexOf(id);
    if (value && index === -1) {
      allExpanded.current.push(id);
    } else if (!value && index !== -1) {
      allExpanded.current.splice(index, 1);
      allExpanded.current = allExpanded.current.filter((expandedId) => !expandedId.startsWith(`${id}${IdDelimiter}`));
    }
  };

  const isSelected = (isRoot && allNodeIds.current.length === selected.current.length) || selected.current.includes(id);
  const isIndeterminate =
    !isRoot && !isSelected && selected.current.some((selectedId) => selectedId.startsWith(`${id}${IdDelimiter}`));
  const isSearching = searchQuery.current.trim().length > 2;
  const isMatched =
    !isRoot &&
    (!isSearching || searchResults.current.some((result) => result === id || result.startsWith(`${id}${IdDelimiter}`)));
  const isExpanded = !isRoot && allExpanded.current.includes(id);
  const hasChildren = children.length > 0;
  const hasChildrenMatched =
    !isSearching ||
    (isMatched &&
      children.some((child) =>
        searchResults.current.some((result) => result === child.id || result.startsWith(`${child.id}${IdDelimiter}`)),
      ));

  useEffect(() => {
    if (id === RootSymbol.toString()) {
      return;
    }
    return subscribe(id, (change: TreeAction) => {
      switch (change.action) {
        case "select": {
          if (change.value && children.every((child: TreeNodeProps) => selected.current.includes(child.id))) {
            selected.current.push(id);
          } else {
            const index = selected.current.indexOf(id);
            if (index !== -1) {
              selected.current.splice(index, 1);
            }
          }
          notifyParent({ id, action: "select", value: change.value });
          break;
        }
      }
    });
  }, []);

  useEffect(() => {
    return subscribe(RootSymbol, (change: TreeAction) => {
      switch (change.action) {
        case "select": {
          // All values are selected/deselected
          // update the component and allow the logic to handle the rest
          if (change.id === RootSymbol || id === RootSymbol.toString()) {
            update((prev: number) => prev + 1);
          }
          break;
        }
        case "search": {
          if (change.value.query.trim().length > 2) {
            updateExpanded(
              change.value.results.some((result: string) => result === id || result.startsWith(`${id}${IdDelimiter}`)),
            );
          }
          update((prev: number) => prev + 1);
          break;
        }
      }
    });
  }, []);

  const setExpanded = (value: boolean) => {
    updateExpanded(value);
    notifyParent({ id, action: "expand", value });
  };

  return (
    <div className={clsx(styles.node, { [styles.filtered]: !isRoot && !isMatched })}>
      <div className={styles.node__container}>
        {hasChildren && (
          <Button
            name="toggle"
            className={clsx({ [styles.filtered]: !hasChildrenMatched })}
            size="small"
            look="ghost"
            onClick={() => setExpanded(!isExpanded)}
          >
            <span className={clsx(styles.icon, { [styles.expanded]: isExpanded })}>
              {hasChildrenMatched && <IconChevronDown />}
            </span>
          </Button>
        )}
        <label className={styles["label-container"]}>
          <Checkbox
            name="checkbox"
            indeterminate={isIndeterminate}
            checked={isSelected}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelected(e.currentTarget.checked)}
          />
          <span className={styles.label}>{label}</span>
        </label>
      </div>

      {isExpanded && isMatched && hasChildrenMatched && (
        <div className={styles.children}>
          {children.map((child) => (
            <TreeNode key={child.id} {...child} parentChecked={isSelected} />
          ))}
        </div>
      )}
    </div>
  );
});
