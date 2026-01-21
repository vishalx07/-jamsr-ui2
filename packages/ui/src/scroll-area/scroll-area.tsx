import {
  ScrollAreaCorner as ScrollAreaCornerUI,
  ScrollAreaScrollbar as ScrollAreaScrollbarUI,
  ScrollAreaThumb as ScrollAreaThumbUI,
  ScrollArea as ScrollAreaUI,
  ScrollAreaViewport as ScrollAreaViewportUI,
} from "@jamsrui/react";
import { scrollAreaStyles } from "./styles";

const styles = scrollAreaStyles();

export const ScrollAreaViewport = (props: ScrollAreaViewportUI.Props) => {
  const { className, ...rest } = props;
  return (
    <ScrollAreaViewportUI
      {...rest}
      className={styles.viewport({ className })}
    />
  );
};

export const ScrollAreaScrollbar = (props: ScrollAreaScrollbarUI.Props) => {
  const { orientation = "vertical", className, ...rest } = props;
  return (
    <ScrollAreaScrollbarUI
      {...rest}
      orientation={orientation}
      className={styles.scrollbar({ className })}
    />
  );
};

export const ScrollAreaThumb = (props: ScrollAreaThumbUI.Props) => {
  const { className, ...rest } = props;
  return (
    <ScrollAreaThumbUI {...rest} className={styles.thumb({ className })} />
  );
};

export const ScrollAreaCorner = (props: ScrollAreaCornerUI.Props) => {
  const { className, ...rest } = props;
  return (
    <ScrollAreaCornerUI {...rest} className={styles.corner({ className })} />
  );
};

export const ScrollArea = (props: ScrollArea.Props) => {
  const { className, ...rest } = props;
  return <ScrollAreaUI {...rest} className={styles.root({ className })} />;
};

export namespace ScrollArea {
  export interface Props extends ScrollAreaUI.Props {}
}
