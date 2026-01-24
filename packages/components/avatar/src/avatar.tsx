"use client";

import { AvatarContext } from "./avatar-context";
import { AvatarRoot } from "./avatar-root";
import { useAvatar } from "./use-avatar";

export const Avatar = (props: Avatar.Props) => {
  const { children } = props;
  const ctx = useAvatar(props);
  return (
    <AvatarContext value={ctx}>
      <AvatarRoot>{children}</AvatarRoot>
    </AvatarContext>
  );
};

export namespace Avatar {
  export interface Props extends useAvatar.Props {}
}
