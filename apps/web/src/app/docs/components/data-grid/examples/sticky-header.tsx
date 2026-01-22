"use client";

import { DataGrid, useDataGridTable } from "jamsrui/data-grid";
import { COLUMNS, USERS } from "./columns";

export const DataGridStickyHeader = () => {
  const table = useDataGridTable({ columns: COLUMNS, data: USERS });
  return (
    <DataGrid table={table}>
      <DataGrid.Table isHeaderSticky />
      <DataGrid.Pagination />
    </DataGrid>
  );
};
