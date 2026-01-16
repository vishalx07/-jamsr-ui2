"use client";

import { Table } from "@jamsrui/table";
import { DataGridBody } from "./data-grid-body";
import { DataGridHeader } from "./data-grid-header";
import { cn } from "@jamsrui/utils";

export const DataGridTable = (props: DataGridTable.Props) => {
  const {
    children = (
      <>
        <DataGridHeader />
        <DataGridBody />
      </>
    ),
    className,
    ...restProps
  } = props;
  return (
    <Table className={cn("w-full table-fixed", className)} {...restProps}>
      {children}
    </Table>
  );
};

export namespace DataGridTable {
  export interface Props extends Table.Props {}
}
