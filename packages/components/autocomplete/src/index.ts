import { Autocomplete as AutocompleteRoot } from "./autocomplete";
import { AutocompleteItem } from "./autocomplete-item";
import { useAutocomplete } from "./use-autocomplete";

export { AutocompleteItem, useAutocomplete };

export const Autocomplete = Object.assign(AutocompleteRoot, {
  Item: AutocompleteItem,
});

export namespace Autocomplete {
  export interface Props extends AutocompleteRoot.Props {}
  export interface Item extends AutocompleteItem.Props {}
}
