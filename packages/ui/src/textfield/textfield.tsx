import { TextField as TextFieldUI } from "@jamsrui/react";
import { textFieldStyles } from "./styles";

export const TextField = (props: TextFieldUI.Props) => {
  const styles = textFieldStyles({ className: props.className });
  return <TextFieldUI {...props} className={styles} />;
};

export namespace TextField {
  export interface Props extends TextFieldUI.Props {}
}
