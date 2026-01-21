import {
  ScrollArea as ScrollAreaUI,
  ScrollAreaViewport as ScrollAreaViewportUI,
  ScrollAreaScrollbar as ScrollAreaScrollbarUI,
  ScrollAreaThumb as ScrollAreaThumbUI,
  ScrollAreaCorner as ScrollAreaCornerUI,
} from "@jamsrui/react";
import { cn } from "tailwind-variants";
import { scrollAreaStyles } from "./styles";

const styles = scrollAreaStyles();

export const ScrollAreaViewport = (props: ScrollAreaViewportUI.Props) => {
  const { className, ...rest } = props;
  return (
    <ScrollAreaViewportUI
      {...rest}
      className={cn(styles.viewport(), className)}
    />
  );
};

export const ScrollAreaScrollbar = (props: ScrollAreaScrollbarUI.Props) => {
  const { orientation = "vertical", className, ...rest } = props;
  return (
    <ScrollAreaScrollbarUI
      {...rest}
      orientation={orientation}
      className={cn(scrollAreaStyles({ orientation }).scrollbar(), className)}
    />
  );
};

export const ScrollAreaThumb = (props: ScrollAreaThumbUI.Props) => {
  const { className, ...rest } = props;
  return (
    <ScrollAreaThumbUI {...rest} className={cn(styles.thumb(), className)} />
  );
};

export const ScrollAreaCorner = (props: ScrollAreaCornerUI.Props) => {
  const { className, ...rest } = props;
  return (
    <ScrollAreaCornerUI {...rest} className={cn(styles.corner(), className)} />
  );
};

export const ScrollArea = (props: ScrollArea.Props) => {
  const { className, ...rest } = props;
  return <ScrollAreaUI {...rest} className={cn(styles.root(), className)} />;
};

export namespace ScrollArea {
  export interface Props extends ScrollAreaUI.Props {}
}
