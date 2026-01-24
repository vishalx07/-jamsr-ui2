import {
  ScrollArea as ScrollAreaRoot,
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
});

export namespace ScrollArea {
  export interface Props extends ScrollAreaRoot.Props {}
}

export {
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
};
