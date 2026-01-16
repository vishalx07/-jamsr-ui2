"use client";
import { Button } from "@jamsrui/button";
import { Settings2Icon } from "@jamsrui/icons";
import { Menu } from "@jamsrui/menu";

import { AnimatedTickIcon } from "@jamsrui/icons/animated";
import { useDataGridContext } from "./data-grid-context";

export const DataGridColumnVisibility = () => {
  const { table } = useDataGridContext();
  return (
    <Menu>
      <Menu.Trigger>
        <Button size="sm" variant="flat">
          <Settings2Icon />
          Column Visibility
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        {table
          .getAllLeafColumns()
          .filter((col) => col.getCanHide())
          .map((column) => {
            const headerTitle = column.columnDef.meta?.headerTitle ?? column.id;
            return (
              <Menu.Item
                key={column.id}
                preventCloseOnClick
                disabled={!column.getCanHide()}
                onClick={column.getToggleVisibilityHandler()}
                textValue={headerTitle}
                className="capitalize"
              >
                <AnimatedTickIcon
                  className="text-primary"
                  isSelected={column.getIsVisible()}
                />
                {headerTitle}
              </Menu.Item>
            );
          })}
      </Menu.Content>
    </Menu>
  );
};

export namespace DataGridColumnVisibility {
  export interface Props {}
}
