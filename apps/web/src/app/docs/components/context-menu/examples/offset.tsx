import { ContextMenu } from "jamsrui/context-menu";

export const ContextMenuOffset = () => {
  return (
    <ContextMenu offset={100}>
      <ContextMenu.Trigger>
        <div className="border-border text-center p-12 border-dashed border w-full">
          Right Click Here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item textValue="Undo">Undo</ContextMenu.Item>
        <ContextMenu.Item textValue="Info">Info</ContextMenu.Item>
        <ContextMenu.Item textValue="Search">Search</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  );
};
