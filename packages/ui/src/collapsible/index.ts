import {
  CollapsibleContent,
  CollapsibleRoot,
  CollapsibleTrigger,
} from "./collapsible";

export const Collapsible = Object.assign(CollapsibleRoot, {
  Content: CollapsibleContent,
  Trigger: CollapsibleTrigger,
});
