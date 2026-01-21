import { Header as HeaderUI } from "@jamsrui/react";
import { headerStyles } from "./styles";

export const Header = (props: Header.Props) => {
  const { isBorder, className, ...rest } = props;
  const styles = headerStyles({ className });
  return <HeaderUI {...rest} className={styles} />;
};

export namespace Header {
  export interface Props extends HeaderUI.Props {
    isBorder?: boolean;
  }
}
