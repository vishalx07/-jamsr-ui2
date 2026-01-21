import { InputGroup as InputGroupUI } from "@jamsrui/react";
import { cn } from "tailwind-variants";
import { inputGroupStyles } from "./styles";

export const InputGroup = (props: InputGroup.Props) => {
  const { className, ...rest } = props;
  const styles = inputGroupStyles();
  return <InputGroupUI {...rest} className={cn(styles.root(), className)} />;
};

export namespace InputGroup {
  export interface Props extends InputGroupUI.Props {}
}
