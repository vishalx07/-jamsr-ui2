import { Button } from "jamsrui/button";
import { Tooltip } from "jamsrui/tooltip";

export const TooltipAligns = () => {
  const aligns: Tooltip.Positioner["align"][] = ["start", "center", "end"];
  return (
    <div className="flex flex-col gap-4  min-h-25 items-center justify-center">
      {aligns.map((align) => (
        <Tooltip key={align}>
          <Tooltip.Trigger render={<Button>{align}</Button>} />
          <Tooltip.Content slotProps={{ positioner: { align } }}>
            <Tooltip.Arrow />I am tooltip
          </Tooltip.Content>
        </Tooltip>
      ))}
    </div>
  );
};
