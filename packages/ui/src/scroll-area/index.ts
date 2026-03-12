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
  export interface Viewport extends ScrollAreaViewport.Props {}
  export interface Scrollbar extends ScrollAreaScrollbar.Props {}
  export interface Thumb extends ScrollAreaThumb.Props {}
  export interface Corner extends ScrollAreaCorner.Props {}
}

export {
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
};
