import { Toggle, ToggleGroup } from "jamsrui/toggle";
import { Bold, Italic, Underline } from "lucide-react";

export const ToggleGroupUsage = () => {
  return (
    <ToggleGroup>
      <Toggle>
        <Bold className="size-4" />
      </Toggle>
      <Toggle>
        <Italic className="size-4" />
      </Toggle>
      <Toggle>
        <Underline className="size-4" />
      </Toggle>
    </ToggleGroup>
  );
};
