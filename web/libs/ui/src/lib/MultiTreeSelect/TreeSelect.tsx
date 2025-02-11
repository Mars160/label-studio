import { memo } from "react";
import { RootSymbol, useTreeContext } from "./TreeContext";
import { TreeNode } from "./TreeNode";
import styles from "./MultiTreeSelect.module.scss";

export const TreeSelect = memo(({ allLabel }: { allLabel?: string }) => {
  const { data, searchIndexed } = useTreeContext();

  console.log("data", data);
  return (
    <div className={styles.select}>
      {allLabel && searchIndexed && <TreeNode id={RootSymbol.toString()} label={allLabel} children={[]} />}
      {searchIndexed ? data.current.map((node) => <TreeNode key={node.id} {...node} />) : <div>Loading...</div>}
    </div>
  );
});
