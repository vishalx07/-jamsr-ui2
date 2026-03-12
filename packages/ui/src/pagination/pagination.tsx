import { Pagination as PaginationUI } from "@jamsrui/react";

import { paginationStyles } from "./styles";

const styles = paginationStyles();

export const PaginationItem = (props: PaginationItem.Props) => {
  const { isActive, className, ...rest } = props;
  return (
    <PaginationUI.Item
      {...rest}
      className={paginationStyles({ isActive }).item({ className })}
    />
  );
};

export const PaginationEllipsis = (props: PaginationEllipsis.Props) => {
  const { className, ...rest } = props;
  return (
    <PaginationUI.Ellipsis
      {...rest}
      className={styles.ellipsis({ className })}
    />
  );
};

export const Pagination = (props: Pagination.Props) => {
  const { className, ...rest } = props;
  return <PaginationUI {...rest} className={styles.root({ className })} />;
};

export namespace Pagination {
  export interface Props extends PaginationUI.Props {}
}

export namespace PaginationItem {
  export interface Props extends PaginationUI.Item {
    isActive?: boolean;
  }
}

export namespace PaginationEllipsis {
  export interface Props extends PaginationUI.Ellipsis {}
}
