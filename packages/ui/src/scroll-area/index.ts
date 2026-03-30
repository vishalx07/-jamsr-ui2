import {
  ScrollArea as ScrollAreaRoot,
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "./scroll-area";

export const ScrollArea = Object.assign(ScrollAreaRoot, {
  Viewport: ScrollAreaViewport,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Corner: ScrollAreaCorner,
  Content: ScrollAreaContent,
});

export namespace ScrollArea {
  export interface Props extends ScrollAreaRoot.Props {}
}
