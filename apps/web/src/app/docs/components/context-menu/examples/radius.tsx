import { ContextMenu } from "jamsrui/context-menu";

export const ContextMenuRadius = () => {
  const radii: ContextMenu.Props["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
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
            <ContextMenu.Item>Undo</ContextMenu.Item>
            <ContextMenu.Item>Info</ContextMenu.Item>
            <ContextMenu.Item>Search</ContextMenu.Item>
            <ContextMenu.Item isDisabled>Redo</ContextMenu.Item>
            <ContextMenu.Item>Cut</ContextMenu.Item>
            <ContextMenu.Item isDisabled>Edit</ContextMenu.Item>
            <ContextMenu.Item color="danger">Delete</ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu>
      ))}
    </div>
  );
};
