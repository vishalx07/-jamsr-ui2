import { Link as LinkUI } from "@jamsrui/react";
import { linkStyles, LinkVariantProps } from "./styles";

export const Link = (props: Link.Props) => {
  const { className, underline, color, variant, ...restProps } = props;
  // linkStyles({ ... }) returns a string classname
  const styles = linkStyles({ underline, color, variant, className });

  return <LinkUI {...restProps} className={styles} />;
};

export namespace Link {
  export interface Props extends LinkUI.Props, LinkVariantProps {}
}
