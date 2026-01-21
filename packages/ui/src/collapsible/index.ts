import {
  Collapsible as CollapsibleRoot,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";

export const Collapsible = Object.assign(CollapsibleRoot, {
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent,
});

export namespace Collapsible {
  export interface Props extends CollapsibleRoot.Props {}
}

export { CollapsibleContent, CollapsibleTrigger };
