import { InfoIcon } from "@jamsrui/icons";
import { IconButton } from "jamsrui/icon-button";
import { Popover } from "jamsrui/popover";
import { Text } from "jamsrui/text";

export const PopoverTriggerOnHover = () => {
  return (
    <Popover triggerOn="hover">
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
  );
};
