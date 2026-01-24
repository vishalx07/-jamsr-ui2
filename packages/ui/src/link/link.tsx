import { Link as LinkUI } from "@jamsrui/react";
import { VariantProps } from "tailwind-variants";
import { linkStyles } from "./styles";

type LinkVariantProps = VariantProps<typeof linkStyles>;

export const Link = (props: Link.Props) => {
  const { className, underline, variant, ...restProps } = props;
  const styles = linkStyles({ underline, variant, className });
  return <LinkUI {...restProps} className={styles} />;
};

export namespace Link {
  export interface Props extends LinkUI.Props, LinkVariantProps {}
}
