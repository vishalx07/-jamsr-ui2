import { ButtonRoot } from "./button";
import { ButtonContext, useButtonContext } from "./button-context";
import { ButtonLoading } from "./button-loading";

export { ButtonContext, ButtonLoading, useButtonContext };

export const Button = Object.assign(ButtonRoot, {
  Loading: ButtonLoading,
});

export namespace Button {
  export interface Props extends ButtonRoot.Props {}
}
