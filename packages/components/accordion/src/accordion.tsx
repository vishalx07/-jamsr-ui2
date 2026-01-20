"use client";
import { Composite } from "@jamsrui/composite";
import { useRenderElement } from "@jamsrui/hooks";

import { AccordionContext } from "./accordion-context";
import { useAccordion } from "./use-accordion";

const Accordion = (props: Accordion.Props) => {
  const ctx = useAccordion(props);
  const { getRootProps } = ctx;
  const { children } = props;

  const renderElement = useRenderElement("div", {
    props: [getRootProps({}), { children }],
  });
  return (
    <Composite>
      <AccordionContext value={ctx}>{renderElement}</AccordionContext>
    </Composite>
  );
};

namespace Accordion {
  export interface Props extends useAccordion.Props {}
}

export { Accordion };
