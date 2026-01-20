import { Accordion } from "jamsrui";

export const AccordionDisabled = () => {
  return (
    <Accordion variant="splitted">
      <Accordion.Item>
        <Accordion.Trigger>
          Accordion 1
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>I am the accordion content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item disabled>
        <Accordion.Trigger>
          Accordion 2
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>I am the accordion content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>
          Accordion 3
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>I am the accordion content</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};
