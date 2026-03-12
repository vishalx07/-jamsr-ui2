"use client";

import { createContext, use, useMemo } from "react";

import { ContextMenu as ContextMenuUI } from "@jamsrui/react";

import { contextMenuStyles } from "./styles";

import type { VariantProps } from "tailwind-variants";

type ContextMenuVariants = VariantProps<typeof contextMenuStyles>;

const ContextMenuContext = createContext<{
  styles: ReturnType<typeof contextMenuStyles>;
} | null>(null);

const useContextMenuContext = () => {
  const ctx = use(ContextMenuContext);
  if (!ctx) {
    throw new Error("useContextMenuContext must be used within a ContextMenu");
  }
  return ctx;
};

export const ContextMenu = (props: ContextMenu.Props) => {
  const { radius, backdrop, color, ...restProps } = props;
  const styles = contextMenuStyles({ radius, backdrop, color });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <ContextMenuContext value={value}>
      <ContextMenuUI {...restProps} />
    </ContextMenuContext>
  );
};

export namespace ContextMenu {
  export interface Props extends ContextMenuUI.Props, ContextMenuVariants {}
}

export const ContextMenuTrigger = (props: ContextMenuUI.Trigger) => {
  return <ContextMenuUI.Trigger {...props} />;
};

export const ContextMenuContent = (props: ContextMenuContent.Props) => {
  const { styles } = useContextMenuContext();
  const { slotProps, ...restProps } = props;
  return (
    <ContextMenuUI.Portal {...slotProps?.portal}>
      <ContextMenuUI.Positioner
        {...slotProps?.positioner}
        className={styles.positioner({
          className: slotProps?.positioner?.className,
        })}
      >
        <ContextMenuUI.Content
          {...restProps}
          className={styles.content({ className: restProps.className })}
        />
      </ContextMenuUI.Positioner>
    </ContextMenuUI.Portal>
  );
};
export namespace ContextMenuContent {
  export interface Props extends ContextMenuUI.Content {
    slotProps?: {
      portal?: React.ComponentProps<typeof ContextMenuUI.Portal>;
      positioner?: React.ComponentProps<typeof ContextMenuUI.Positioner>;
    };
  }
}

export const ContextMenuItem = (props: ContextMenuItem.Props) => {
  const { styles } = useContextMenuContext();
  const { color, radius, className, ...restProps } = props;
  return (
    <ContextMenuUI.Item
      {...restProps}
      className={styles.menuItem({ className, color, radius })}
    />
  );
};

export namespace ContextMenuItem {
  export interface Props extends ContextMenuUI.Item {
    color?: ContextMenuVariants["color"];
    radius?: ContextMenuVariants["radius"];
  }
}
