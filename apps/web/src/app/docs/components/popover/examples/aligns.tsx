import { Button } from "jamsrui/button";
import { Popover } from "jamsrui/popover";

export const PopoverAligns = () => {
  const aligns: Popover.Positioner["align"][] = ["start", "center", "end"];
  return (
    <div className="flex flex-wrap gap-4">
      {aligns.map((align) => (
        <Popover key={align}>
          <Popover.Trigger render={<Button>{align}</Button>} />
          <Popover.Content
            slotProps={{
              positioner: {
                align,
              },
            }}
          >
            Popover is a non-modal dialog that floats around its disclosure.
            It's commonly used for displaying additional rich content on top of
            something.
          </Popover.Content>
        </Popover>
      ))}
    </div>
  );
};
