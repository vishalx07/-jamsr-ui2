import { Menubar as MenubarRoot, MenubarTrigger } from "./menubar";

export const Menubar = Object.assign(MenubarRoot, {
  Trigger: MenubarTrigger,
});

export namespace Menubar {
  export interface Props extends MenubarRoot.Props {}
}
