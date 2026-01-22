import { Breadcrumb as BreadcrumbUI } from "@jamsrui/react";
import { cn } from "tailwind-variants";
import { breadcrumbStyles } from "./styles";

const styles = breadcrumbStyles();

export const BreadcrumbItem = (
  props: BreadcrumbUI.Item & { isCurrent?: boolean },
) => {
  const { isCurrent, className, ...rest } = props;
  return (
    <BreadcrumbUI.Item
      {...rest}
      className={cn(isCurrent ? styles.current() : styles.item(), className)}
    />
  );
};

export const BreadcrumbSeparator = (props: BreadcrumbUI.Separator) => {
  const { className, ...rest } = props;
  return (
    <BreadcrumbUI.Separator
      {...rest}
      className={cn(styles.separator(), className)}
    />
  );
};

export const Breadcrumb = (props: BreadcrumbUI.Props) => {
  const { className, ...rest } = props;
  return <BreadcrumbUI {...rest} className={cn(styles.root(), className)} />;
};

export namespace Breadcrumb {
  export interface Props extends BreadcrumbUI.Props {}
}
