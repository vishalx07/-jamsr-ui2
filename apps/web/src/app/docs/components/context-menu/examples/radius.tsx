import { ContextMenu } from "jamsrui/context-menu";

export const ContextMenuRadius = () => {
  const radii: ContextMenu.Props["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "full",
  ];
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {radii.map((radius) => (
        <ContextMenu key={radius} radius={radius}>
          <ContextMenu.Trigger>
            <div className="border-border text-center p-12 border-dashed border w-full">
              Radius:{radius}
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
