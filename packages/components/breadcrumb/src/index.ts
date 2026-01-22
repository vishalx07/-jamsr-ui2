import { Breadcrumb as BreadcrumbRoot } from "./breadcrumb";
import { BreadcrumbItem } from "./breadcrumb-item";
import { BreadcrumbSeparator } from "./breadcrumb-separator";

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Item: BreadcrumbItem,
  Separator: BreadcrumbSeparator,
});

export namespace Breadcrumb {
  export interface Props extends BreadcrumbRoot.Props {}
  export interface Item extends BreadcrumbItem.Props {}
  export interface Separator extends BreadcrumbSeparator.Props {}
}
