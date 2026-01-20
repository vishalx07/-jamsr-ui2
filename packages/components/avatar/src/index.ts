import { Avatar as AvatarRoot } from "./avatar";
import { AvatarContext, useAvatarContext } from "./avatar-context";
import { AvatarFallback } from "./avatar-fallback";
import { AvatarImage } from "./avatar-image";
import { AvatarIndicator } from "./avatar-indicator";
import { useAvatar } from "./use-avatar";

export {
  AvatarContext,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  useAvatar,
  useAvatarContext,
};

export const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
  Indicator: AvatarIndicator,
});

export namespace Avatar {
  export interface Props extends AvatarRoot.Props {}
  export interface Image extends AvatarImage.Props {}
  export interface Fallback extends AvatarFallback.Props {}
  export interface Indicator extends AvatarIndicator.Props {}
}
