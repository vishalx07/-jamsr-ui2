import { InfoIcon } from "@jamsrui/icons";
import { IconButton } from "jamsrui/icon-button";
import { Popover } from "jamsrui/popover";
import { Text } from "jamsrui/text";

export const PopoverWithArrow = () => {
  return (
    <Popover showArrow>
      <Popover.Trigger
        render={
          <IconButton label="Popover Trigger">
            <InfoIcon />
          </IconButton>
        }
      />
      <Popover.Content className="flex flex-col gap-2">
        <Popover.Arrow />
        <Text variant="h6">Notifications</Text>
        <Text>You are all caught up. Good job!</Text>
        <Text>I am the popover content.</Text>
      </Popover.Content>
    </Popover>
  );
};
