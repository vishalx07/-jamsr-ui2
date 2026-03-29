import { InfoIcon } from "@jamsrui/icons";
import { IconButton } from "jamsrui/icon-button";
import { Popover } from "jamsrui/popover";

export const PopoverOpenOnHover = () => {
  return (
    <Popover>
      <Popover.Trigger
        openOnHover
        render={
          <IconButton label="Popover Trigger">
            <InfoIcon />
          </IconButton>
        }
      />
      <Popover.Content>
        Popover is a non-modal dialog that floats around its disclosure. It's
        commonly used for displaying additional rich content on top of
        something.
      </Popover.Content>
    </Popover>
  );
};
