"use client";

import { ContextMenu } from "jamsrui/context-menu";

export const ContextMenuPreventClose = () => {
  return (
    <ContextMenu>
      <ContextMenu.Trigger>
        <div className="border-border text-center p-12 border-dashed border w-full">
          Right Click Here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item preventCloseOnClick>Click me here!</ContextMenu.Item>
        <ContextMenu.Item>Info</ContextMenu.Item>
        <ContextMenu.Item>Search</ContextMenu.Item>
        <ContextMenu.Item isDisabled>Redo</ContextMenu.Item>
        <ContextMenu.Item>Cut</ContextMenu.Item>
        <ContextMenu.Item isDisabled>Edit</ContextMenu.Item>
        <ContextMenu.Item color="danger">Delete</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  );
};
