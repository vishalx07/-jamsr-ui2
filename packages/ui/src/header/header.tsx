import { Header as HeaderUI } from "@jamsrui/react";
import { cn } from "tailwind-variants";
import { headerStyles } from "./styles";

export const Header = (props: Header.Props) => {
  const { className, ...rest } = props;
  const styles = headerStyles();
  return <HeaderUI {...rest} className={cn(styles.root(), className)} />;
};

export namespace Header {
  export interface Props extends HeaderUI.Props {}
}
