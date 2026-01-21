import {
  Pagination as PaginationUI,
  PaginationItem as PaginationItemUI,
  PaginationEllipsis as PaginationEllipsisUI,
} from "@jamsrui/react";
import { cn } from "tailwind-variants";
import { paginationStyles } from "./styles";

const styles = paginationStyles();

export const PaginationItem = (
  props: PaginationItemUI.Props & { isActive?: boolean },
) => {
  const { isActive, className, ...rest } = props;
  return (
    <PaginationItemUI
      {...rest}
      className={cn(paginationStyles({ isActive }).item(), className)}
    />
  );
};

export const PaginationEllipsis = (props: PaginationEllipsisUI.Props) => {
  const { className, ...rest } = props;
  return (
    <PaginationEllipsisUI
      {...rest}
      className={cn(styles.ellipsis(), className)}
    />
  );
};

export const Pagination = (props: Pagination.Props) => {
  const { className, ...rest } = props;
  return <PaginationUI {...rest} className={cn(styles.root(), className)} />;
};

export namespace Pagination {
  export interface Props extends PaginationUI.Props {}
}
