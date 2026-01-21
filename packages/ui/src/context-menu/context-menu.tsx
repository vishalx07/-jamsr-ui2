import { ContextMenu as ContextMenuUI } from "@jamsrui/react";
import { cn, VariantProps } from "tailwind-variants";
import { contextMenuStyles } from "./styles";

type ContextMenuVariants = VariantProps<typeof contextMenuStyles>;

export const ContextMenu = (props: ContextMenu.Props) => {
  const { radius, backdrop, color, ...restProps } = props;
  return <ContextMenuUI {...restProps} />;
};

export namespace ContextMenu {
  export interface Props extends ContextMenuUI.Props, ContextMenuVariants {}
}

export const ContextMenuTrigger = (props: ContextMenuUI.Trigger) => {
  return <ContextMenuUI.Trigger {...props} />;
};

export const ContextMenuContent = (props: ContextMenuUI.Content) => {
  const styles = contextMenuStyles();
  return (
    <ContextMenuUI.Content
      {...props}
      className={cn(styles.content(), props.className)}
    />
  );
};

export const ContextMenuItem = (props: ContextMenuUI.Item) => {
  const styles = contextMenuStyles();
  return (
    <ContextMenuUI.Item
      {...props}
      className={cn(styles.menuItem(), props.className)}
    />
  );
};
