"use client";
import { useCallback, useMemo } from "react";

import { dataAttrDev, mergeProps } from "@jamsrui/utils";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import { Table } from "./table";
import type { TableBody } from "./table-body";
import type { TableCell } from "./table-cell";
import type { TableColumn } from "./table-column";
import type { TableFooter } from "./table-footer";
import type { TableHeader } from "./table-header";
import type { TableRoot } from "./table-root";
import type { TableRow } from "./table-row";
import type { TableWrapper } from "./table-wrapper";

export const useTable = (props: useTable.Props) => {
  const { className, ...elementProps } = props;

  const getRootProps: PropGetter<TableRoot.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("table"),
    }),
    [],
  );

  const getWrapperProps: PropGetter<TableWrapper.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("wrapper"),
    }),
    [],
  );

  const getTableProps: PropGetter<Table.Props> = useCallback(
    (props) => ({
      ...mergeProps(elementProps, props),
      "data-slot": dataAttrDev("table"),
      className,
    }),
    [className, elementProps],
  );

  const getHeaderProps: PropGetter<TableHeader.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("header"),
    }),
    [],
  );

  const getColumnProps: PropGetter<TableColumn.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("column"),
    }),
    [],
  );

  const getBodyProps: PropGetter<TableBody.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("body"),
    }),
    [],
  );

  const getRowProps: PropGetter<TableRow.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("row"),
    }),
    [],
  );

  const getCellProps: PropGetter<TableCell.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("cell"),
    }),
    [],
  );

  const getFooterProps: PropGetter<TableFooter.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("footer"),
    }),
    [],
  );

  return useMemo(
    () => ({
      getRootProps,
      getTableProps,
      getHeaderProps,
      getColumnProps,
      getBodyProps,
      getRowProps,
      getCellProps,
      getFooterProps,
      getWrapperProps,
    }),
    [
      getBodyProps,
      getCellProps,
      getColumnProps,
      getFooterProps,
      getHeaderProps,
      getRootProps,
      getRowProps,
      getTableProps,
      getWrapperProps,
    ],
  );
};

export namespace useTable {
  export interface Props extends UIProps<"table"> {}
}
