import { ContextMenu } from "jamsrui/context-menu";

export const ContextMenuPlacement = () => {
  const placements: ContextMenu.Props["placement"][] = [
    "bottom",
    "bottom-end",
    "bottom-start",
    "left",
    "left-end",
    "left-start",
    "right",
    "right-end",
    "right-start",
    "top",
    "top-end",
    "top-start",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {placements.map((placement) => (
        <ContextMenu key={placement} placement={placement}>
          <ContextMenu.Trigger>
            <div className="border-border text-center p-12 border-dashed border w-full">
              Placement:{placement}
            </div>
          </ContextMenu.Trigger>
          <ContextMenu.Content>
            <ContextMenu.Item>Undo</ContextMenu.Item>
            <ContextMenu.Item>Info</ContextMenu.Item>
            <ContextMenu.Item>Search</ContextMenu.Item>
            <ContextMenu.Item disabled>Redo</ContextMenu.Item>
            <ContextMenu.Item>Cut</ContextMenu.Item>
            <ContextMenu.Item disabled>Edit</ContextMenu.Item>
            <ContextMenu.Item color="danger">Delete</ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu>
      ))}
    </div>
  );
};
