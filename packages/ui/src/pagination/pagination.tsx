import { Pagination as PaginationUI } from "@jamsrui/react";

import { paginationStyles } from "./styles";

const styles = paginationStyles();

export const PaginationItem = (
  props: PaginationUI.Item & { isActive?: boolean },
) => {
  const { isActive, className, ...rest } = props;
  return (
    <PaginationUI.Item
      {...rest}
      className={paginationStyles({ isActive }).item({ className })}
    />
  );
};

export const PaginationEllipsis = (props: PaginationUI.Ellipsis) => {
  const { className, ...rest } = props;
  return (
    <PaginationUI.Ellipsis
      {...rest}
      className={styles.ellipsis({ className })}
    />
  );
};

export const Pagination = (props: PaginationUI.Props) => {
  const { className, ...rest } = props;
  return <PaginationUI {...rest} className={styles.root({ className })} />;
};

export namespace Pagination {
  export interface Props extends PaginationUI.Props {}
}
