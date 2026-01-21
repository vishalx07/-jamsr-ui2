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
        <Text>This is a Popover content</Text>
      </Popover.Content>
    </Popover>
  );
};
