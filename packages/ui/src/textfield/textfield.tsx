import { Field as FieldUI } from "@jamsrui/react";

import { textFieldStyles } from "./styles";

export const Field = (props: FieldUI.Props) => {
  const styles = textFieldStyles({
    className: props.className,
    orientation: props.orientation,
  });
  return <FieldUI {...props} className={styles} />;
};
export namespace Field {
  export interface Props extends FieldUI.Props {}
}

export const FieldContent = (props: FieldUI.Content) => {
  return <FieldUI.Content {...props} />;
};
export namespace FieldContent {
  export interface Props extends FieldUI.Content {}
}
