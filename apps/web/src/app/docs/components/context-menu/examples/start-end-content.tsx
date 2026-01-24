import { InfoIcon, SearchIcon, TrashIcon } from "@jamsrui/icons";
import { ContextMenu } from "jamsrui/context-menu";
import { Kbd } from "jamsrui/kbd";
import { Label } from "jamsrui/label";

export const ContextMenuStartEndContent = () => {
  return (
    <ContextMenu>
      <ContextMenu.Trigger>
        <div className="border-border text-center p-12 border-dashed border w-full">
          Right Click Here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item textValue="Undo">
          <SearchIcon
            width={20}
            height={20}
            className="text-foreground-secondary"
          />
          Undo
          <Kbd className="ml-auto" keys={["command"]}>
            U
          </Kbd>
        </ContextMenu.Item>
        <ContextMenu.Item textValue="Info">
          <InfoIcon
            width={20}
            height={20}
            className="text-foreground-secondary"
          />
          Info
          <Kbd className="ml-auto" keys={["command"]}>
            I
          </Kbd>
        </ContextMenu.Item>
        <ContextMenu.Item textValue="Search">
          <SearchIcon
            width={20}
            height={20}
            className="text-foreground-secondary"
          />
          Search
          <Kbd className="ml-auto" keys={["command"]}>
            K
          </Kbd>
        </ContextMenu.Item>
        <ContextMenu.Item textValue="Cut">
          <SearchIcon
            width={20}
            height={20}
            className="text-foreground-secondary"
          />
          Cut
          <Kbd className="ml-auto" keys={["command"]}>
            C
          </Kbd>
        </ContextMenu.Item>
        <ContextMenu.Item textValue="Delete" color="danger">
          <TrashIcon
            width={20}
            height={20}
            className="text-foreground-secondary"
          />
          Delete{" "}
          <Kbd className="ml-auto" keys={["command"]}>
            D
          </Kbd>
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  );
};
