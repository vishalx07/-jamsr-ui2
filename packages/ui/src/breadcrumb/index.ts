import {
  Breadcrumb as BreadcrumbRoot,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "./breadcrumb";

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Item: BreadcrumbItem,
  Separator: BreadcrumbSeparator,
});

export namespace Breadcrumb {
  export interface Props extends BreadcrumbRoot.Props {}
  export interface Item extends BreadcrumbItem.Props {}
  export interface Separator extends BreadcrumbSeparator.Props {}
}

export { BreadcrumbItem, BreadcrumbSeparator };
