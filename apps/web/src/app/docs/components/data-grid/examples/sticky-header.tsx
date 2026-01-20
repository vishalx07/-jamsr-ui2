"use client";

import {
  DataGrid,
  DataGridPagination,
  DataGridTable,
  useDataGridTable,
} from "jamsrui";
import { COLUMNS, USERS } from "./columns";

export const DataGridStickyHeader = () => {
  const table = useDataGridTable({ columns: COLUMNS, data: USERS });
  return (
    <DataGrid table={table}>
      <DataGridTable isHeaderSticky />
      <DataGridPagination />
    </DataGrid>
  );
};
