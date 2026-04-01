import {
  Avatar as AvatarRoot,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
} from "./avatar";

export const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
  Indicator: AvatarIndicator,
});

export namespace Avatar {
  export interface Props extends AvatarRoot.Props {}
}
