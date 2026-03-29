import { Button } from "jamsrui/button";
import { Tooltip } from "jamsrui/tooltip";

export const TooltipSides = () => {
  const sides: Tooltip.Positioner["side"][] = [
    "top",
    "right",
    "bottom",
    "left",
    "inline-start",
    "inline-end",
  ];
  return (
    <div className="flex flex-col gap-4  min-h-25 items-center justify-center">
      {sides.map((side) => (
        <Tooltip key={side}>
          <Tooltip.Trigger>
            <Button>{side}</Button>
          </Tooltip.Trigger>
          <Tooltip.Content slotProps={{ positioner: { side } }}>
            <Tooltip.Arrow />I am tooltip
          </Tooltip.Content>
        </Tooltip>
      ))}
    </div>
  );
};
