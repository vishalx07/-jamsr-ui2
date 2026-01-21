import { ContextMenu } from "jamsrui/context-menu";

export const ContextMenuWithoutLockScroll = () => {
  return (
    <ContextMenu lockScroll={false}>
      <ContextMenu.Trigger>
        <div className="border-border text-center p-12 border-dashed border w-full">
          Right Click Here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>Undo</ContextMenu.Item>
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
