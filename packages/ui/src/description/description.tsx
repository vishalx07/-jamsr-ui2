import { Description as DescriptionUI } from "@jamsrui/react";
import { cn } from "tailwind-variants";

import { descriptionStyles } from "./styles";

export const Description = (props: Description.Props) => {
  const { className, ...restProps } = props;
  return (
    <DescriptionUI
      {...restProps}
      className={cn(descriptionStyles(), className)}
    />
  );
};

export namespace Description {
  export interface Props extends DescriptionUI.Props {}
}
