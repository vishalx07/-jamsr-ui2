import { Pagination as PaginationRoot } from "./pagination";
import { PaginationEllipsis } from "./pagination-ellipsis";
import { PaginationItem } from "./pagination-item";

export const Pagination = Object.assign(PaginationRoot, {
  Item: PaginationItem,
  Ellipsis: PaginationEllipsis,
});

export namespace Pagination {
  export interface Props extends PaginationRoot.Props {}
  export interface Item extends PaginationItem.Props {}
  export interface Ellipsis extends PaginationEllipsis.Props {}
}
