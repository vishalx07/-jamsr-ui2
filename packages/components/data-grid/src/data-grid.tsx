"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { DataGridContext } from "./data-grid-context";
import { useDataGrid } from "./use-data-grid";

export const DataGrid = (props: DataGrid.Props) => {
  const ctx = useDataGrid(props);
  const renderElement = useRenderElement("div", {
    props: [
      {
        "data-component": "data-grid",
        "data-slot": "root",
        className: "relative flex flex-col gap-2",
      },
    ],
  });
  return <DataGridContext value={ctx}>{renderElement}</DataGridContext>;
};

export namespace DataGrid {
  export interface Props extends useDataGrid.Props {}
}
