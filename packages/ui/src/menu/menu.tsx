"use client";

import { createContext, use } from "react";

import { Menu as MenuUI } from "@jamsrui/react";

import { menuStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

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

export const MenuContent = (props: MenuContent.Props) => {
  const { styles } = useMenuContext();
  const { slotProps, ...restProps } = props;
  return (
    <MenuUI.Portal {...slotProps?.portal}>
      <MenuUI.Backdrop
        {...slotProps?.backdrop}
        className={styles.backdrop({ className: slotProps?.backdrop?.className })}
      />
      <MenuUI.Positioner
        {...slotProps?.positioner}
        className={styles.positioner({
          className: slotProps?.positioner?.className,
        })}
      >
        <MenuUI.Content
          {...restProps}
          className={styles.content({ className: restProps.className })}
        />
      </MenuUI.Positioner>
    </MenuUI.Portal>
  );
};
export namespace MenuContent {
  export interface Props extends MenuUI.Content {
    slotProps?: {
      portal?: React.ComponentProps<typeof MenuUI.Portal>;
      backdrop?: React.ComponentProps<typeof MenuUI.Backdrop>;
      positioner?: React.ComponentProps<typeof MenuUI.Positioner>;
    };
  }
}

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

export const MenuPositioner = (props: React.ComponentProps<"div">) => {
  const { styles } = useMenuContext();
  return (
    <MenuUI.Positioner
      {...props}
      className={styles.positioner({ className: props.className })}
    />
  );
};
