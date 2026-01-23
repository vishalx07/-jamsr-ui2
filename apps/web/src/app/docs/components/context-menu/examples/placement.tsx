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
            <ContextMenu.Item textValue="Undo">Undo</ContextMenu.Item>
            <ContextMenu.Item textValue="Info">Info</ContextMenu.Item>
            <ContextMenu.Item textValue="Search">Search</ContextMenu.Item>
            <ContextMenu.Item textValue="Redo" disabled>
              Redo
            </ContextMenu.Item>
            <ContextMenu.Item textValue="Cut">Cut</ContextMenu.Item>
            <ContextMenu.Item textValue="Edit" disabled>
              Edit
            </ContextMenu.Item>
            <ContextMenu.Item textValue="Delete" color="danger">
              Delete
            </ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu>
      ))}
    </div>
  );
};
