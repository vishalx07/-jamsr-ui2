"use client";
import {
  ArrowDownIcon,
  ArrowLeftToLineIcon,
  ArrowRightToLineIcon,
  ArrowUpIcon,
  ChevronsUpDownIcon,
  EllipsisVerticalIcon,
  EyeClosedIcon,
} from "@jamsrui/icons";
import { cn } from "@jamsrui/utils";
import { flexRender } from "@tanstack/react-table";
import { IconButton } from "../icon-button";
import { Menu } from "../menu";

import { useDataGridContext } from "./data-grid-context";
import { getPinningStyles } from "./utils";

import type { Column, Header } from "@tanstack/react-table";
import { Table } from "../table";

export const DataGridHeader = () => {
  const { table } = useDataGridContext();
  const headerGroups = table.getHeaderGroups();
  return (
    <Table.Header>
      {headerGroups.map((headerGroup) => {
        return (
          <Table.Row key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <Table.Column
                  key={header.id}
                  className="relative"
                  colSpan={header.colSpan}
                  data-pinned={header.column.getIsPinned() || undefined}
                  style={{
                    width: header.getSize(),
                    ...getPinningStyles(header.column),
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </Table.Column>
              );
            })}
          </Table.Row>
        );
      })}
    </Table.Header>
  );
};

export namespace DataGridHeader {
  export interface Props {}
}

const DataGridColumnHeaderDropdown = ({
  column,
}: {
  column: Column<any, any>;
}) => {
  return (
    <Menu>
      <Menu.Trigger>
        <IconButton
          label="More"
          size="sm"
          variant="light"
          className="invisible group-hover/th:visible"
        >
          <EllipsisVerticalIcon className="size-4" />
        </IconButton>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Group>
          <Menu.RadioGroup value={column.getIsSorted() || ""}>
            <Menu.RadioItem
              disabled={!column.getCanSort()}
              preventCloseOnClick={false}
              value="asc"
              onClick={() => {
                if (column.getIsSorted() === "asc") {
                  column.clearSorting();
                } else {
                  column.toggleSorting(false);
                }
              }}
              textValue="Asc"
            >
              <ArrowUpIcon />
              Asc
              <Menu.ItemIndicator className="ml-auto" />
            </Menu.RadioItem>
            <Menu.RadioItem
              disabled={!column.getCanSort()}
              preventCloseOnClick={false}
              value="desc"
              onClick={() => {
                if (column.getIsSorted() === "desc") {
                  column.clearSorting();
                } else {
                  column.toggleSorting(true);
                }
              }}
              textValue="Desc"
            >
              <ArrowDownIcon />
              Desc
              <Menu.ItemIndicator className="ml-auto" />
            </Menu.RadioItem>
          </Menu.RadioGroup>
        </Menu.Group>
        <Menu.Separator />
        <Menu.Item
          disabled={!column.getCanHide()}
          onClick={column.getToggleVisibilityHandler()}
          textValue="Hide Column"
        >
          <EyeClosedIcon />
          Hide Column
        </Menu.Item>
        <Menu.Separator />
        <Menu.Group>
          <Menu.RadioGroup value={column.getIsPinned() || ""}>
            <Menu.RadioItem
              preventCloseOnClick={false}
              value="left"
              onClick={() => {
                column.pin(column.getIsPinned() === "left" ? false : "left");
              }}
              textValue="Pin To Left"
            >
              <ArrowLeftToLineIcon />
              Pin To Left
              <Menu.ItemIndicator className="ml-auto" />
            </Menu.RadioItem>
            <Menu.RadioItem
              preventCloseOnClick={false}
              value="right"
              onClick={() =>
                column.pin(column.getIsPinned() === "right" ? false : "right")
              }
              textValue="Pin To Right"
            >
              <ArrowRightToLineIcon />
              Pin To Right
              <Menu.ItemIndicator className="ml-auto" />
            </Menu.RadioItem>
          </Menu.RadioGroup>
        </Menu.Group>
      </Menu.Content>
    </Menu>
  );
};

const DataGridHeaderResizer = ({
  header,
}: {
  header: Header<any, unknown>;
}) => {
  return (
    <span
      data-slot="data-grid-header-resizer"
      aria-label="resize"
      onDoubleClick={() => header.column.resetSize()}
      onMouseDown={header.getResizeHandler()}
      onTouchStart={header.getResizeHandler()}
      role="presentation"
      className={cn(
        "absolute right-0 top-1/2  h-3/5 w-0.5 -translate-y-1/2 cursor-ew-resize bg-slate-300/30 transition-all duration-500 select-none touch-none",
        "invisible group-hover/table:visible",
        {
          "isResizing cursor-ew-resize": header.column.getIsResizing(),
        },
      )}
    />
  );
};

export const DataGridHeaderColumn = (props: {
  header: Header<any, unknown>;
  children: React.ReactNode;
  hideResizer?: boolean;
  hideDropdown?: boolean;
}) => {
  const { header, children, hideResizer = false, hideDropdown = false } = props;
  return (
    <div
      className="flex"
      data-slot="data-grid-header-column"
      data-sort={header.column.getIsSorted()}
    >
      <button
        onClick={header.column.getToggleSortingHandler()}
        type="button"
        className={cn(
          "flex w-full cursor-default select-none gap-1 overflow-hidden pr-1 text-transform-inherit",
          {
            "": header.column.getCanSort(),
          },
        )}
      >
        <span className="flex w-full  grow items-center overflow-hidden font-medium">
          {children}
          {
            {
              asc: <ArrowUpIcon className="size-3 shrink-0" />,
              desc: <ArrowDownIcon className="size-3 shrink-0" />,
              empty: <ChevronsUpDownIcon className="size-3 shrink-0" />,
            }[header.column.getIsSorted() || "empty"]
          }
        </span>
      </button>
      {!hideDropdown && <DataGridColumnHeaderDropdown column={header.column} />}
      {!hideResizer && <DataGridHeaderResizer header={header} />}
    </div>
  );
};
