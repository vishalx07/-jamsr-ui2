import { Toggle } from "jamsrui/toggle";
import { Bold, Italic, Underline } from "lucide-react";

export const ToggleOutlined = () => {
  return (
    <div className="flex items-center gap-2">
      <Toggle variant="outline">
        <Bold className="size-4" />
      </Toggle>
      <Toggle variant="outline">
        <Italic className="size-4" />
      </Toggle>
      <Toggle variant="outline">
        <Underline className="size-4" />
      </Toggle>
    </div>
  );
};
