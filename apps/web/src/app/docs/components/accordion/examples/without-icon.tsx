import { Accordion } from "jamsrui/accordion";

export const AccordionWithoutIcon = () => {
  return (
    <Accordion variant="splitted">
      <Accordion.Item>
        <Accordion.Trigger>Accordion 1</Accordion.Trigger>
        <Accordion.Content>I am the accordion content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>Accordion 2</Accordion.Trigger>
        <Accordion.Content>I am the accordion content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>Accordion 3</Accordion.Trigger>
        <Accordion.Content>I am the accordion content</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};
