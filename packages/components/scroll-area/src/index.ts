import { ScrollArea as ScrollAreaRoot } from "./scroll-area";
import { ScrollAreaContent } from "./scroll-area-content";
import { useScrollAreaContext } from "./scroll-area-context";
import { ScrollAreaCorner } from "./scroll-area-corner";
import { ScrollAreaScrollbar } from "./scroll-area-scrollbar";
import { ScrollAreaThumb } from "./scroll-area-thumb";
import { ScrollAreaViewport } from "./scroll-area-viewport";

export { useScrollAreaContext };

export const ScrollArea = Object.assign(ScrollAreaRoot, {
  Viewport: ScrollAreaViewport,
  Content: ScrollAreaContent,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Corner: ScrollAreaCorner,
});

export namespace ScrollArea {
  export interface Props extends ScrollAreaRoot.Props {}
  export interface Viewport extends ScrollAreaViewport.Props {}
  export interface Content extends ScrollAreaContent.Props {}
  export interface Scrollbar extends ScrollAreaScrollbar.Props {}
  export interface Thumb extends ScrollAreaThumb.Props {}
  export interface Corner extends ScrollAreaCorner.Props {}
}
