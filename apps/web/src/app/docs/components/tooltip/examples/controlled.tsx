"use client";

import { Button } from "jamsrui/button";
import { Tooltip } from "jamsrui/tooltip";
import { useState } from "react";

export const TooltipControlled = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid place-content-center gap-4">
      <Tooltip isOpen={isOpen} onOpenChange={setIsOpen}>
        <Tooltip.Trigger>
          <Button>Hover me</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>This is a tooltip</Tooltip.Content>
      </Tooltip>
      {!isOpen ? "Closed" : "Opened"}
    </div>
  );
};
