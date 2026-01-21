import { InfoIcon, SearchIcon, TrashIcon } from "@jamsrui/icons";
import { ContextMenu } from "jamsrui/context-menu";
import { Kbd } from "jamsrui/kbd";

export const ContextMenuStartEndContent = () => {
  return (
    <ContextMenu>
      <ContextMenu.Trigger>
        <div className="border-border text-center p-12 border-dashed border w-full">
          Right Click Here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item
          startContent={
            <SearchIcon
              width={20}
              height={20}
              className="text-foreground-secondary"
            />
          }
          endContent={<Kbd keys={["command"]}>U</Kbd>}
        >
          Undo
        </ContextMenu.Item>
        <ContextMenu.Item
          startContent={
            <InfoIcon
              width={20}
              height={20}
              className="text-foreground-secondary"
            />
          }
          endContent={<Kbd keys={["command"]}>I</Kbd>}
        >
          Info
        </ContextMenu.Item>
        <ContextMenu.Item
          startContent={
            <SearchIcon
              width={20}
              height={20}
              className="text-foreground-secondary"
            />
          }
          endContent={<Kbd keys={["command"]}>K</Kbd>}
        >
          Search
        </ContextMenu.Item>
        <ContextMenu.Item
          startContent={
            <SearchIcon
              width={20}
              height={20}
              className="text-foreground-secondary"
            />
          }
          endContent={<Kbd keys={["command"]}>C</Kbd>}
        >
          Cut
        </ContextMenu.Item>
        <ContextMenu.Item
          className="hover:bg-danger"
          endContent={<Kbd keys={["command"]}>D</Kbd>}
          startContent={
            <TrashIcon
              width={20}
              height={20}
              className="text-foreground-secondary"
            />
          }
        >
          Delete
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  );
};
