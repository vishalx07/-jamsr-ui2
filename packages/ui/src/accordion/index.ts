import {
  AccordionContent,
  AccordionIndicator,
  AccordionItem,
  Accordion as AccordionRoot,
  AccordionTrigger,
} from "./accordion";

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
  Indicator: AccordionIndicator,
});

export namespace Accordion {
  export interface Props extends AccordionRoot.Props {}
}

export {
  AccordionContent,
  AccordionIndicator,
  AccordionItem,
  AccordionTrigger,
};
