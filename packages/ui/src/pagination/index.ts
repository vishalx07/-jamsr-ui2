import {
  Pagination as PaginationRoot,
  PaginationEllipsis,
  PaginationItem,
} from "./pagination";

export const Pagination = Object.assign(PaginationRoot, {
  Item: PaginationItem,
  Ellipsis: PaginationEllipsis,
});

export namespace Pagination {
  export interface Props extends PaginationRoot.Props {}
}

export { PaginationEllipsis, PaginationItem };
