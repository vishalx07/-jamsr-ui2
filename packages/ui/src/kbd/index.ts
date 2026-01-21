import { Kbd as KbdRoot } from "./kbd";

export const Kbd = Object.assign(KbdRoot, {});

export namespace Kbd {
  export interface Props extends KbdRoot.Props {}
}
