import { Menu as MenuUI } from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { menuStyles } from "./styles";

type MenuVariants = VariantProps<typeof menuStyles>;

export const Menu = (props: Menu.Props) => {
  const { radius, backdrop, color, ...restProps } = props;
  return <MenuUI {...restProps} />;
};

export namespace Menu {
  export interface Props extends MenuUI.Props, MenuVariants {}
}

export const MenuTrigger = (props: MenuUI.Trigger) => {
  return <MenuUI.Trigger {...props} />;
};

export const MenuContent = (props: MenuUI.Content) => {
  const styles = menuStyles();
  return (
    <MenuUI.Content
      {...props}
      className={cn(styles.content(), props.className)}
    />
  );
};

export const MenuItem = (props: MenuUI.Item) => {
  const styles = menuStyles();
  return (
    <MenuUI.Item
      {...props}
      className={cn(styles.menuItem(), props.className)}
    />
  );
};

export const MenuGroup = (props: MenuUI.Group) => {
  const styles = menuStyles();
  return (
    <MenuUI.Group
      {...props}
      className={cn(styles.menuGroup(), props.className)}
    />
  );
};

export const MenuGroupLabel = (props: MenuUI.GroupLabel) => {
  const styles = menuStyles();
  return (
    <MenuUI.GroupLabel
      {...props}
      className={cn(styles.menuGroupLabel(), props.className)}
    />
  );
};

export const MenuSeparator = (props: MenuUI.Separator) => {
  return <MenuUI.Separator {...props} />;
};

export const MenuCheckboxItem = (props: MenuUI.CheckboxItem) => {
  const styles = menuStyles();
  return (
    <MenuUI.CheckboxItem
      {...props}
      className={cn(styles.menuItem(), props.className)}
    />
  );
};

export const MenuRadioGroup = (props: MenuUI.RadioGroup) => {
  return <MenuUI.RadioGroup {...props} />;
};

export const MenuRadioItem = (props: MenuUI.RadioItem) => {
  const styles = menuStyles();
  return (
    <MenuUI.RadioItem
      {...props}
      className={cn(styles.menuItem(), props.className)}
    />
  );
};

export const MenuItemIndicator = (props: MenuUI.ItemIndicator) => {
  const styles = menuStyles();
  return (
    <MenuUI.ItemIndicator
      {...props}
      className={cn(styles.menuItemIndicator(), props.className)}
    />
  );
};

export const MenuSubmenuIndicator = (props: React.ComponentProps<"span">) => {
  const styles = menuStyles();
  return (
    <MenuUI.SubmenuIndicator
      {...props}
      className={cn(styles.submenuIndicator(), props.className)}
    />
  );
};

export const MenuArrow = (props: MenuUI.Arrow) => {
  const styles = menuStyles();
  return (
    <MenuUI.Arrow {...props} className={cn(styles.arrow(), props.className)} />
  );
};

export const MenuContainer = (props: React.ComponentProps<"div">) => {
  const styles = menuStyles();
  return (
    <MenuUI.Container
      {...props}
      className={cn(styles.container(), props.className)}
    />
  );
};
