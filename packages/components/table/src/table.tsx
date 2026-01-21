"use client";

import { TableContext } from "./table-context";
import { TableTable } from "./table-table";
import { useTable } from "./use-table";

export const Table = (props: Table.Props) => {
  const { children } = props;
  const ctx = useTable(props);
  return (
    <TableContext value={ctx}>
      <TableTable>{children}</TableTable>
    </TableContext>
  );
};

export namespace Table {
  export interface Props extends useTable.Props {}
}
