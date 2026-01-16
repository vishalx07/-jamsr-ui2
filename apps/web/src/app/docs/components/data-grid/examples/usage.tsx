"use client";

import { DataGrid, DataGridColumnVisibility } from "@jamsrui/react";
import { COLUMNS, USERS } from "./columns";
import { useDataGridTable } from "@jamsrui/react";

export const DataGridUsage = () => {
  const table = useDataGridTable({
    columns: COLUMNS,
    data: USERS,
  });
  return (
    <DataGrid table={table}>
      <DataGridColumnVisibility />
    </DataGrid>
  );
};
