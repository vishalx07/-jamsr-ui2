"use client";

import { Menu as MenuUI } from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { menuStyles } from "./styles";
import { createContext, use } from "react";

type MenuVariants = VariantProps<typeof menuStyles>;

const MenuContext = createContext<{
  styles: ReturnType<typeof menuStyles>;
} | null>(null);

const useMenuContext = () => {
  const ctx = use(MenuContext);
  if (!ctx) {
    throw new Error("useMenuContext must be used within a MenuContext");
  }
  return ctx;
};

export const Menu = (props: Menu.Props) => {
  const { radius, backdrop, color, ...restProps } = props;
  const styles = menuStyles({ radius, backdrop, color });
  return (
    <MenuContext.Provider value={{ styles }}>
      <MenuUI {...restProps} />
    </MenuContext.Provider>
  );
};

export namespace Menu {
  export interface Props extends MenuUI.Props, MenuVariants {}
}

export const MenuTrigger = (props: MenuUI.Trigger) => {
  return <MenuUI.Trigger {...props} />;
};

export const MenuContent = (props: MenuUI.Content) => {
  const { styles } = useMenuContext();
  return (
    <MenuUI.Portal>
      <MenuUI.Backdrop className={styles.backdrop()} />
      <MenuUI.Container className={styles.container()}>
        <MenuUI.Content
          {...props}
          className={styles.content({ className: props.className })}
        />
      </MenuUI.Container>
    </MenuUI.Portal>
  );
};

export const MenuItem = (props: MenuItem.Props) => {
  const { styles } = useMenuContext();
  const { className, color, ...restProps } = props;
  return (
    <MenuUI.Item
      {...restProps}
      className={styles.menuItem({ className, color })}
    />
  );
};
export namespace MenuItem {
  export interface Props extends MenuUI.Item {
    color?: MenuVariants["color"];
  }
}

export const MenuGroup = (props: MenuUI.Group) => {
  const { styles } = useMenuContext();
  return (
    <MenuUI.Group
      {...props}
      className={styles.menuGroup({ className: props.className })}
    />
  );
};

export const MenuGroupLabel = (props: MenuUI.GroupLabel) => {
  const { styles } = useMenuContext();
  return (
    <MenuUI.GroupLabel
      {...props}
      className={styles.menuGroupLabel({ className: props.className })}
    />
  );
};

export const MenuSeparator = (props: MenuUI.Separator) => {
  return <MenuUI.Separator {...props} />;
};

export const MenuCheckboxItem = (props: MenuUI.CheckboxItem) => {
  const { styles } = useMenuContext();
  return (
    <MenuUI.CheckboxItem
      {...props}
      className={styles.menuItem({ className: props.className })}
    />
  );
};

export const MenuRadioGroup = (props: MenuUI.RadioGroup) => {
  return <MenuUI.RadioGroup {...props} />;
};

export const MenuRadioItem = (props: MenuUI.RadioItem) => {
  const { styles } = useMenuContext();
  return (
    <MenuUI.RadioItem
      {...props}
      className={styles.menuItem({ className: props.className })}
    />
  );
};

export const MenuItemIndicator = (props: MenuUI.ItemIndicator) => {
  const { styles } = useMenuContext();
  return (
    <MenuUI.ItemIndicator
      {...props}
      className={styles.menuItemIndicator({ className: props.className })}
    />
  );
};

export const MenuSubmenuIndicator = (props: React.ComponentProps<"span">) => {
  const { styles } = useMenuContext();
  return (
    <MenuUI.SubmenuIndicator
      {...props}
      className={styles.submenuIndicator({ className: props.className })}
    />
  );
};

export const MenuArrow = (props: MenuUI.Arrow) => {
  const { styles } = useMenuContext();
  return (
    <MenuUI.Arrow
      {...props}
      className={styles.arrow({ className: props.className })}
    />
  );
};

export const MenuContainer = (props: React.ComponentProps<"div">) => {
  const { styles } = useMenuContext();
  return (
    <MenuUI.Container
      {...props}
      className={styles.container({ className: props.className })}
    />
  );
};
