import {
  Collapsible as CollapsibleUI,
  CollapsibleTrigger as CollapsibleTriggerUI,
  CollapsibleContent as CollapsibleContentUI,
} from "@jamsrui/react";
import { cn } from "tailwind-variants";
import { collapsibleStyles } from "./styles";

const styles = collapsibleStyles();

export const CollapsibleTrigger = (props: CollapsibleTriggerUI.Props) => {
  const { className, ...rest } = props;
  return (
    <CollapsibleTriggerUI
      {...rest}
      className={cn(styles.trigger(), className)}
    />
  );
};

export const CollapsibleContent = (props: CollapsibleContentUI.Props) => {
  const { className, ...rest } = props;
  return (
    <CollapsibleContentUI
      {...rest}
      className={cn(styles.content(), className)}
    />
  );
};

export const Collapsible = (props: Collapsible.Props) => {
  const { className, ...rest } = props;
  return <CollapsibleUI {...rest} className={cn(styles.root(), className)} />;
};

export namespace Collapsible {
  export interface Props extends CollapsibleUI.Props {}
}
