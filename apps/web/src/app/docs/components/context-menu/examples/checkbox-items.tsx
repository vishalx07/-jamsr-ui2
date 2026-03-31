"use client";
import { ContextMenu } from "jamsrui/context-menu";

export const ContextMenuCheckboxItemsExample = () => {
  return (
    <ContextMenu>
      <ContextMenu.Trigger>
        <div className="border-border text-foreground-secondary flex w-full items-center justify-center rounded-xl border border-dashed py-12 text-center">
          Right Click Here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItemIndicator />
          Date
        </ContextMenu.CheckboxItem>
        <ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItemIndicator />
          Name
        </ContextMenu.CheckboxItem>
        <ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItemIndicator />
          Type
        </ContextMenu.CheckboxItem>
      </ContextMenu.Content>
    </ContextMenu>
  );
};
