import { Label as LabelUI } from "@jamsrui/react";
import { cn } from "tailwind-variants";

import { labelStyles } from "./styles";

export const Label = (props: Label.Props) => {
  const { className, ...restProps } = props;
  return <LabelUI {...restProps} className={cn(labelStyles(), className)} />;
};

export namespace Label {
  export interface Props extends LabelUI.Props {}
}
