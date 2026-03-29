import { Button } from "jamsrui/button";
import { Popover } from "jamsrui/popover";

export const PopoverSides = () => {
  const sides: Popover.Positioner["side"][] = [
    "top",
    "right",
    "bottom",
    "left",
    "inline-end",
    "inline-start",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {sides.map((side) => (
        <Popover key={side}>
          <Popover.Trigger render={<Button>{side}</Button>} />
          <Popover.Content
            slotProps={{
              positioner: {
                side,
              },
            }}
          >
            Popover is a non-modal dialog that floats around its disclosure.
            It's commonly used for displaying additional rich content on top of
            something.{" "}
          </Popover.Content>
        </Popover>
      ))}
    </div>
  );
};
