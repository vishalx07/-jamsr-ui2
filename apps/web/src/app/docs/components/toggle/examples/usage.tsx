import { Toggle } from "jamsrui/toggle";
import { Bold, Italic, Underline } from "lucide-react";

export const ToggleUsage = () => {
  return (
    <div className="flex items-center gap-2">
      <Toggle>
        <Bold className="size-4" />
      </Toggle>
      <Toggle>
        <Italic className="size-4" />
      </Toggle>
      <Toggle>
        <Underline className="size-4" />
      </Toggle>
    </div>
  );
};
