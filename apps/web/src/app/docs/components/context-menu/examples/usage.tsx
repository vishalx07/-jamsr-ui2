import { ContextMenu } from "jamsrui/context-menu";

export const ContextMenuUsage = () => {
  return (
    <ContextMenu>
      <ContextMenu.Trigger>
        <div className="border-border text-center p-12 border-dashed border w-full">
          Right Click Here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item textValue="Edit">Edit</ContextMenu.Item>
        <ContextMenu.Item textValue="Delete">Delete</ContextMenu.Item>
        <ContextMenu.Item textValue="Rename">Rename</ContextMenu.Item>
        <ContextMenu.Item textValue="Others">Others</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  );
};
