import { tableCN } from "../TableContext";

export const TableCell = ({ ...props }) => {
  return <span {...props} className={tableCN.elem("cell")} />;
};
TableCell.displayName = "TableCell";

export const TableCellContent = ({ ...props }) => {
  return <span {...props} className={tableCN.elem("cell-content")} />;
};
TableCellContent.displayName = "TableCellContent";
