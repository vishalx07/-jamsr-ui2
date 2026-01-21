import {
  Breadcrumb as BreadcrumbUI,
  BreadcrumbItem as BreadcrumbItemUI,
  BreadcrumbSeparator as BreadcrumbSeparatorUI,
} from "@jamsrui/react";
import { cn } from "tailwind-variants";
import { breadcrumbStyles } from "./styles";

const styles = breadcrumbStyles();

export const BreadcrumbItem = (
  props: BreadcrumbItemUI.Props & { isCurrent?: boolean },
) => {
  const { isCurrent, className, ...rest } = props;
  return (
    <BreadcrumbItemUI
      {...rest}
      className={cn(isCurrent ? styles.current() : styles.item(), className)}
    />
  );
};

export const BreadcrumbSeparator = (props: BreadcrumbSeparatorUI.Props) => {
  const { className, ...rest } = props;
  return (
    <BreadcrumbSeparatorUI
      {...rest}
      className={cn(styles.separator(), className)}
    />
  );
};

export const Breadcrumb = (props: Breadcrumb.Props) => {
  const { className, ...rest } = props;
  return <BreadcrumbUI {...rest} className={cn(styles.root(), className)} />;
};

export namespace Breadcrumb {
  export interface Props extends BreadcrumbUI.Props {}
}
