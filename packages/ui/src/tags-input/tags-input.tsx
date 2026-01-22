import { TagsInput as TagsInputUI } from "@jamsrui/react";
import { tagsInputStyles } from "./styles";

export const TagsInput = (props: TagsInput.Props) => {
  const { className, ...rest } = props;
  const styles = tagsInputStyles();
  return <TagsInputUI {...rest} className={styles.root({ className })} />;
};

export namespace TagsInput {
  export interface Props extends TagsInputUI.Props {}
}
