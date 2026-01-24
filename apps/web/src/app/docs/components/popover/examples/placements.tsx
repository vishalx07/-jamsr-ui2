import { Button } from "jamsrui/button";
import { Popover } from "jamsrui/popover";
import { Text } from "jamsrui/text";

export const PopoverPlacements = () => {
  const placements: Popover.Props["placement"][] = [
    "top",
    "top-start",
    "top-end",
    "right",
    "right-start",
    "right-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "left",
    "left-start",
    "left-end",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {placements.map((placement) => (
        <Popover key={placement} placement={placement}>
          <Popover.Trigger>
            <Button>{placement}</Button>
          </Popover.Trigger>
          <Popover.Content>
            Popover is a non-modal dialog that floats around its disclosure.
            It's commonly used for displaying additional rich content on top of
            something.{" "}
          </Popover.Content>
        </Popover>
      ))}
    </div>
  );
};
