"use client";

import { useDisclosure } from "@jamsrui/hooks";
import { InfoIcon } from "@jamsrui/icons";
import { Button } from "jamsrui/button";
import { IconButton } from "jamsrui/icon-button";
import { Popover } from "jamsrui/popover";
import { Text } from "jamsrui/text";

export const PopoverControlled = () => {
  const { isOpen, setIsOpen, onToggle } = useDisclosure();
  return (
    <div className="flex flex-col items-center gap-4">
      <Popover isOpen={isOpen} onOpenChange={setIsOpen}>
        <Popover.Trigger>
          <IconButton label="Popover Trigger">
            <InfoIcon />
          </IconButton>
        </Popover.Trigger>
        <Popover.Content>
          Popover is a non-modal dialog that floats around its disclosure. It's
          commonly used for displaying additional rich content on top of
          something.
        </Popover.Content>
      </Popover>
      <Button onClick={onToggle}>{isOpen ? "Close" : "Open"}</Button>
    </div>
  );
};
