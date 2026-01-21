import { ContextMenu } from "jamsrui/context-menu";

export const ContextMenuColors = () => {
  return (
    <ContextMenu>
      <ContextMenu.Trigger>
        <div className="border-border text-center p-12 border-dashed border w-full">
          Right Click Here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item color="default">Default</ContextMenu.Item>
        <ContextMenu.Item color="primary">Primary</ContextMenu.Item>
        <ContextMenu.Item color="secondary">Secondary</ContextMenu.Item>
        <ContextMenu.Item color="success">Success</ContextMenu.Item>
        <ContextMenu.Item color="warning">Warning</ContextMenu.Item>
        <ContextMenu.Item color="danger">Danger</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  );
};
