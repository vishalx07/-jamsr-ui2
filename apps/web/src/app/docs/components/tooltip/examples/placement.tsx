import { Button } from "jamsrui/button";
import { Tooltip } from "jamsrui/tooltip";

export const TooltipPlacement = () => {
  const placements: Tooltip.Props["placement"][] = [
    "top",
    "right",
    "bottom",
    "left",
    "top-start",
    "top-end",
    "bottom-start",
    "bottom-end",
    "left-start",
    "left-end",
    "right-start",
    "right-end",
  ];
  return (
    <div className="flex flex-col gap-4  min-h-[100px] items-center justify-center">
      {placements.map((placement) => (
        <Tooltip key={placement} placement={placement}>
          <Tooltip.Trigger>
            <Button>{placement}</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>
            <Tooltip.Arrow />I am tooltip
          </Tooltip.Content>
        </Tooltip>
      ))}
    </div>
  );
};
