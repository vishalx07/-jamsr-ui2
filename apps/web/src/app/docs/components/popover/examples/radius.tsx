import { Button } from "jamsrui/button";
import { Popover } from "jamsrui/popover";
import { Text } from "jamsrui/text";

export const PopoverRadius = () => {
  const radii: Popover.Props["radius"][] = ["none", "sm", "md", "lg"];
  return (
    <div className="flex flex-wrap gap-4">
      {radii.map((radius) => (
        <Popover key={radius} radius={radius}>
          <Popover.Trigger>
            <Button>{radius}</Button>
          </Popover.Trigger>
          <Popover.Content>
            Popover is a non-modal dialog that floats around its disclosure.
            It's commonly used for displaying additional rich content on top of
            something.
          </Popover.Content>
        </Popover>
      ))}
    </div>
  );
};
