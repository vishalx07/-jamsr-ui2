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
  export interface Image extends AvatarImage.Props {}
  export interface Fallback extends AvatarFallback.Props {}
  export interface Indicator extends AvatarIndicator.Props {}
}

export { AvatarFallback, AvatarImage, AvatarIndicator };
