import { Autocomplete as AutocompleteUI } from "@jamsrui/react";

import { autocompleteStyles } from "./styles";

const styles = autocompleteStyles();

export const AutocompleteItem = (props: AutocompleteUI.Item) => {
  const { className, ...rest } = props;
  return (
    <AutocompleteUI.Item {...rest} className={styles.item({ className })} />
  );
};

export const Autocomplete = (props: Autocomplete.Props) => {
  const { className, ...rest } = props;
  return <AutocompleteUI {...rest} className={styles.root({ className })} />;
};

export namespace Autocomplete {
  export interface Props extends AutocompleteUI.Props {}
}
