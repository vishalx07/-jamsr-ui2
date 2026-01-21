import { TagsInput as TagsInputUI } from "@jamsrui/react";
import { cn } from "tailwind-variants";
import { tagsInputStyles } from "./styles";

export const TagsInput = (props: TagsInput.Props) => {
  const { className, ...rest } = props;
  const styles = tagsInputStyles();
  return <TagsInputUI {...rest} className={cn(styles.root(), className)} />;
};

export namespace TagsInput {
  export interface Props extends TagsInputUI.Props {}
}
