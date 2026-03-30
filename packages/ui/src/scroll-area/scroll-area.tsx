"use client";

import { createContext, use, useMemo } from "react";

import { ScrollArea as ScrollAreaUI } from "@jamsrui/react";
// import { ScrollArea } from "@base-ui/react/scroll-area";

import { scrollAreaStyles } from "./styles";

import type { ScrollAreaVariants } from "./styles";

const ScrollAreaContext = createContext<{
  styles: ReturnType<typeof scrollAreaStyles>;
} | null>(null);

const useScrollAreaContext = () => {
  const ctx = use(ScrollAreaContext);
  if (!ctx) {
    throw new Error("useScrollAreaContext must be used within a ScrollArea");
  }
  return ctx;
};

export const ScrollArea = (props: ScrollArea.Props) => {
  const { orientation, isScrollable, className, ...rest } = props;
  const styles = scrollAreaStyles({ orientation, isScrollable });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <ScrollAreaContext value={value}>
      <ScrollAreaUI {...rest} className={styles.root({ className })} />
    </ScrollAreaContext>
  );
};

export namespace ScrollArea {
  export interface Props extends ScrollAreaUI.Props, ScrollAreaVariants {}
}

export const ScrollAreaViewport = (props: ScrollAreaViewport.Props) => {
  const { styles } = useScrollAreaContext();
  const { className, ...rest } = props;
  return (
    <ScrollAreaUI.Viewport
      {...rest}
      className={styles.viewport({ className })}
    />
  );
};

export const ScrollAreaScrollbar = (props: ScrollAreaScrollbar.Props) => {
  const { styles } = useScrollAreaContext();
  const { orientation = "vertical", className, ...rest } = props;
  return (
    <ScrollAreaUI.Scrollbar
      {...rest}
      className={styles.scrollbar({ className })}
      orientation={orientation}
    />
  );
};

export const ScrollAreaThumb = (props: ScrollAreaThumb.Props) => {
  const { styles } = useScrollAreaContext();
  const { className, ...rest } = props;
  return (
    <ScrollAreaUI.Thumb {...rest} className={styles.thumb({ className })} />
  );
};

export const ScrollAreaCorner = (props: ScrollAreaCorner.Props) => {
  const { styles } = useScrollAreaContext();
  const { className, ...rest } = props;
  return (
    <ScrollAreaUI.Corner {...rest} className={styles.corner({ className })} />
  );
};

export const ScrollAreaContent = (props: ScrollAreaContent.Props) => {
  const { styles } = useScrollAreaContext();
  const { className, ...rest } = props;
  return (
    <ScrollAreaUI.Content {...rest} className={styles.content({ className })} />
  );
};

export namespace ScrollAreaViewport {
  export interface Props extends ScrollAreaUI.Viewport {}
}

export namespace ScrollAreaScrollbar {
  export interface Props extends ScrollAreaUI.Scrollbar {}
}

export namespace ScrollAreaThumb {
  export interface Props extends ScrollAreaUI.Thumb {}
}

export namespace ScrollAreaCorner {
  export interface Props extends ScrollAreaUI.Corner {}
}

export namespace ScrollAreaContent {
  export interface Props extends ScrollAreaUI.Content {}
}
