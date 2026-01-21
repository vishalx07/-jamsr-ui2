import { Collapsible as CollapsibleRoot } from "./collapsible";
import { CollapsibleContent } from "./collapsible-content";
import { CollapsibleTrigger } from "./collapsible-trigger";

export { CollapsibleContent, CollapsibleTrigger };

export const Collapsible = Object.assign(CollapsibleRoot, {
  Content: CollapsibleContent,
  Trigger: CollapsibleTrigger,
});

export namespace Collapsible {
  export interface Props extends CollapsibleRoot.Props {}
  export interface Content extends CollapsibleContent.Props {}
  export interface Trigger extends CollapsibleTrigger.Props {}
}
