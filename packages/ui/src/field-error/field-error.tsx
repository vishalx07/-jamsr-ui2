import { FieldError as FieldErrorUI } from "@jamsrui/react";
import { cn } from "tailwind-variants";

import { fieldErrorStyles } from "./styles";

export const FieldError = (props: FieldError.Props) => {
  const { className, ...restProps } = props;
  return (
    <FieldErrorUI
      {...restProps}
      className={cn(fieldErrorStyles(), className)}
    />
  );
};

export namespace FieldError {
  export interface Props extends FieldErrorUI.Props {}
}
