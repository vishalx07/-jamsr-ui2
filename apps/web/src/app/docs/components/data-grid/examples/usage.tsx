"use client";

import { DataGrid, useDataGridTable } from "jamsrui/data-grid";
import { COLUMNS, USERS } from "./columns";

export const DataGridUsage = () => {
  const table = useDataGridTable({
    columns: COLUMNS,
    data: USERS,
  });
  return (
    <DataGrid table={table}>
      <div className="flex justify-end mb-2">
        <DataGrid.ColumnVisibility />
      </div>
      <DataGrid.Table />
      <DataGrid.Pagination />
    </DataGrid>
  );
};
