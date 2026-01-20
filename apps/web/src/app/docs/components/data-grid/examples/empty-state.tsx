"use client";

import { DataGrid, useDataGridTable } from "jamsrui";
import { useMemo } from "react";
import { COLUMNS } from "./columns";

export const DataGridEmptyState = () => {
  const emptyData = useMemo(() => [], []);
  const table = useDataGridTable({ columns: COLUMNS, data: emptyData });
  return (
    <DataGrid table={table}>
      <DataGrid.Table />
    </DataGrid>
  );
};
