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
}
