"use client";

import { SwitchContext } from "./switch-context";
import { SwitchRoot } from "./switch-root";
import { useSwitch } from "./use-switch";

export const Switch = (props: Switch.Props) => {
  const ctx = useSwitch(props);
  return (
    <SwitchContext value={ctx}>
      <SwitchRoot>{props.children}</SwitchRoot>
    </SwitchContext>
  );
};

export namespace Switch {
  export interface Props extends useSwitch.Props {}
}
