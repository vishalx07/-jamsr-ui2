import {
  Autocomplete as AutocompleteUI,
  AutocompleteItem as AutocompleteItemUI,
} from "@jamsrui/react";
import { cn } from "tailwind-variants";
import { autocompleteStyles } from "./styles";

const styles = autocompleteStyles();

export const AutocompleteItem = (props: AutocompleteItemUI.Props) => {
  const { className, ...rest } = props;
  return (
    <AutocompleteItemUI {...rest} className={cn(styles.item(), className)} />
  );
};

export const Autocomplete = (props: Autocomplete.Props) => {
  const { className, ...rest } = props;
  return <AutocompleteUI {...rest} className={cn(styles.root(), className)} />;
};

export namespace Autocomplete {
  export interface Props extends AutocompleteUI.Props {}
}
