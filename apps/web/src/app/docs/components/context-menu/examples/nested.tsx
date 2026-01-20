import { ContextMenu } from "jamsrui";

export const ContextMenuNested = () => {
  return (
    <ContextMenu>
      <ContextMenu.Trigger>
        <div className="border-border text-center p-12 border-dashed border w-full">
          Right Click Here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>Undo</ContextMenu.Item>
        <ContextMenu.Item>Info</ContextMenu.Item>
        <ContextMenu.Item>Search</ContextMenu.Item>
        <ContextMenu>
          <ContextMenu.Trigger>
            <ContextMenu.Item>Search</ContextMenu.Item>
          </ContextMenu.Trigger>
          <ContextMenu.Content>
            <ContextMenu.Item>Undo</ContextMenu.Item>
            <ContextMenu.Item>Info</ContextMenu.Item>
            <ContextMenu.Item>Search</ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu>
      </ContextMenu.Content>
    </ContextMenu>
  );
};
