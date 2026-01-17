"use client";
import { useState } from "react";

import { IconButton } from "@jamsrui/icon-button";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@jamsrui/icons";
import { Label } from "@jamsrui/label";
import { Select } from "@jamsrui/select";

import { useRenderElement } from "@jamsrui/hooks";
import { cn, UIProps } from "@jamsrui/utils";
import { useDataGridContext } from "./data-grid-context";

export const DataGridPaginationSelector = (
  props: DataGridPaginationSelector.Props,
) => {
  const { className, ...restProps } = props;
  const { table } = useDataGridContext();
  const [value, setValue] = useState<number>(10);

  const onValueChange = (value: string) => {
    const valueAsNumber = Number(value);
    table.setPageSize(valueAsNumber);
    setValue(valueAsNumber);
  };
  return (
    <Select
      className={cn("flex flex-row items-center gap-2", className)}
      onValueChange={onValueChange}
      returnFocus={false}
      size="sm"
      value={value}
      data-slot="pagination-selector"
      {...restProps}
    >
      <Label>Rows Per Page:</Label>
      <Select.Trigger className="px-1" />
      <Select.Popover>
        <Select.Content>
          {[10, 20, 50, 100, 500].map((pageSize) => (
            <Select.Item
              key={pageSize.toString()}
              textValue={pageSize.toString()}
              value={pageSize}
            >
              {pageSize.toString()}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Popover>
    </Select>
  );
};

export namespace DataGridPaginationSelector {
  export interface Props extends Select.Props {}
}

export const DataGridPaginationControls = (
  props: DataGridPaginationControls.Props,
) => {
  const { className, ...restProps } = props;
  const { table } = useDataGridContext();
  const onNext = () => {
    table.nextPage();
  };
  const onPrevious = () => {
    table.previousPage();
  };
  const onFirstPage = () => {
    table.setPageIndex(0);
  };
  const onEnd = () => {
    table.setPageIndex(table.getPageCount() - 1);
  };

  const totalPageCount = table.getPageCount();
  const currentPageIndex = totalPageCount
    ? table.getState().pagination.pageIndex + 1
    : 0;

  return (
    <div
      data-slot="pagination-controls"
      className={cn("flex gap-1 md:gap-4", className)}
      {...restProps}
    >
      <div className="flex items-center justify-center text-sm font-medium">
        Page {currentPageIndex} of {totalPageCount}
      </div>
      <div className="flex items-center">
        <IconButton
          disabled={!table.getCanPreviousPage()}
          label="Go to first page"
          onClick={onFirstPage}
          radius="full"
          size="sm"
          variant="light"
        >
          <ChevronDoubleLeftIcon height={20} width={20} />
        </IconButton>
        <IconButton
          disabled={!table.getCanPreviousPage()}
          label="Go to previous page"
          onClick={onPrevious}
          radius="full"
          size="sm"
          variant="light"
        >
          <ChevronLeftIcon height={20} width={20} />
        </IconButton>
        <IconButton
          disabled={!table.getCanNextPage()}
          label="Go to next page"
          onClick={onNext}
          radius="full"
          size="sm"
          variant="light"
        >
          <ChevronRightIcon height={20} width={20} />
        </IconButton>
        <IconButton
          disabled={!table.getCanNextPage()}
          label="Go to last page"
          onClick={onEnd}
          radius="full"
          size="sm"
          variant="light"
        >
          <ChevronDoubleRightIcon height={20} width={20} />
        </IconButton>
      </div>
    </div>
  );
};

export namespace DataGridPaginationControls {
  export interface Props extends UIProps<"div"> {}
}

export const DataGridPagination = (props: DataGridPagination.Props) => {
  const { isEmpty } = useDataGridContext();
  if (isEmpty) return null;

  const {
    children = (
      <>
        <DataGridPaginationSelector />
        <DataGridPaginationControls />
      </>
    ),
    ...restProps
  } = props;

  const renderElement = useRenderElement("div", {
    props: [
      {
        className:
          "flex flex-col w-full justify-between gap-4 md:flex-row md:items-center mt-2",
        "data-slot": "pagination",
        children,
      },
      restProps,
    ],
  });
  return <>{renderElement}</>;
};

export namespace DataGridPagination {
  export interface Props extends UIProps<"div"> {}
}
