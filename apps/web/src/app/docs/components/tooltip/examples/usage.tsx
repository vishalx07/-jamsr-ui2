import { Button } from "jamsrui/button";
import { Tooltip } from "jamsrui/tooltip";

export const TooltipUsage = () => {
  return (
    <Tooltip>
      <Tooltip.Trigger>
        <Button>Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>This is a tooltip</Tooltip.Content>
    </Tooltip>
  );
};
