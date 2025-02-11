import { useState, useEffect, memo } from "react";
import Dropdown from "apps/labelstudio/src/components/Dropdown/Dropdown.ts";
import { IconChevronDown } from "../../assets/icons";
import { type MultiTreeSelectProps, RootSymbol, type TreeAction, useTreeContext } from "./TreeContext";
import { TreeSearch } from "./TreeSearch";
import { TreeSelect } from "./TreeSelect";
import { MultiTreeSelect } from "./MultiTreeSelect";
import { TreeSelected } from "./TreeSelected";
import styles from "./MultiTreeSelect.module.scss";
import clsx from "clsx";

const DropdownIcon = memo(() => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { subscribe } = useTreeContext();

  useEffect(() => {
    return subscribe(`${RootSymbol.toString()}::dropdown`, (change: TreeAction) => {
      if (change.action === "toggleselect") {
        setDropdownOpen(change.value);
      }
    });
  }, []);

  return (
    <span className={clsx(styles.icon, { [styles.open]: dropdownOpen })}>
      <IconChevronDown />
    </span>
  );
});

const DropdownContent = memo(
  ({
    children,
    allLabel,
    searchPlaceholder,
  }: { children: React.ReactNode; allLabel?: string; searchPlaceholder?: string }) => {
    const { notify } = useTreeContext();
    return (
      <Dropdown.Trigger
        constrainHeight
        syncWidth
        content={
          <div className={styles.content}>
            <TreeSearch placeholder={searchPlaceholder} />
            <TreeSelect allLabel={allLabel} />
          </div>
        }
        onToggle={(open) =>
          notify(`${RootSymbol.toString()}::dropdown`, {
            id: `${RootSymbol.toString()}::dropdown`,
            action: "toggleselect",
            value: open,
          })
        }
      >
        {children}
      </Dropdown.Trigger>
    );
  },
);

export const MultiTreeSelectDropdown = memo(
  ({
    children,
    placeholder,
    searchPlaceholder,
    allLabel,
    allSelectedDefault,
    RootLevelIcon,
    ...props
  }: MultiTreeSelectProps) => {
    console.log("children", children);
    return (
      <MultiTreeSelect {...props} allLabel={allLabel} allSelectedDefault={allSelectedDefault}>
        <DropdownContent allLabel={allLabel} searchPlaceholder={searchPlaceholder}>
          <div className={styles.input}>
            <TreeSelected placeholder={placeholder} allLabel={allLabel} RootLevelIcon={RootLevelIcon} />
            <DropdownIcon />
          </div>
        </DropdownContent>
      </MultiTreeSelect>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.selected === nextProps.selected && prevProps.data === nextProps.data;
  },
);
