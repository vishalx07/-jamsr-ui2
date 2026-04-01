import { Button } from "jamsrui/button";
import { Tooltip } from "jamsrui/tooltip";

export const TooltipUsage = () => {
  return (
    <Tooltip>
      <Tooltip.Trigger render={<Button>Hover me</Button>} />
      <Tooltip.Content>This is a tooltip</Tooltip.Content>
    </Tooltip>
  );
};
