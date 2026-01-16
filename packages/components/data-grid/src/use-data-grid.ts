"use client";
import { useMemo } from "react";

import { Table } from "@jamsrui/table";
import type { Table as ReactTable } from "@tanstack/react-table";

export const useDataGrid = (props: useDataGrid.Props) => {
  const {
    isHeaderSticky,
    variant,
    radius,
    density,
    allowHover,
    separateRows,
    table,
    ...tableProps
  } = props;
  const isEmpty = table.getCoreRowModel().rows.length === 0;

  const rootProps = useMemo(
    () => ({
      isHeaderSticky,
      variant,
      radius,
      density,
      allowHover,
      separateRows,
    }),
    [allowHover, density, isHeaderSticky, radius, separateRows, variant]
  );

  return useMemo(
    () => ({
      table,
      isEmpty,
      rootProps,
    }),
    [isEmpty, rootProps, table]
  );
};

export namespace useDataGrid {
  export interface Props extends Table.Props {
    table: ReactTable<any>;
  }
}
