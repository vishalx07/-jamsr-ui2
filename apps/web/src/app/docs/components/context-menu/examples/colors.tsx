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
        <ContextMenu.Item textValue="Default" color="default">
          Default
        </ContextMenu.Item>
        <ContextMenu.Item textValue="Primary" color="primary">
          Primary
        </ContextMenu.Item>
        <ContextMenu.Item textValue="Secondary" color="secondary">
          Secondary
        </ContextMenu.Item>
        <ContextMenu.Item textValue="Success" color="success">
          Success
        </ContextMenu.Item>
        <ContextMenu.Item textValue="Warning" color="warning">
          Warning
        </ContextMenu.Item>
        <ContextMenu.Item textValue="Danger" color="danger">
          Danger
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  );
};
