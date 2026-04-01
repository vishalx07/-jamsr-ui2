import { AvatarIcon } from "@jamsrui/icons";
import { Avatar } from "jamsrui/avatar";

export const AvatarFallbacks = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Avatar>
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Fallback>A</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Fallback>
          <AvatarIcon />
        </Avatar.Fallback>
      </Avatar>
    </div>
  );
};
