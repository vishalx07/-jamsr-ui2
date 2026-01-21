import { Header as HeaderRoot } from "./header";

export const Header = Object.assign(HeaderRoot, {});

export namespace Header {
  export interface Props extends HeaderRoot.Props {}
}
