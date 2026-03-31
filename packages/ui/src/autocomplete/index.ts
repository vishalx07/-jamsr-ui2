import {
  Autocomplete as AutocompleteRoot,
  AutocompleteItem,
} from "./autocomplete";

export const Autocomplete = Object.assign(AutocompleteRoot, {
  Item: AutocompleteItem,
});

export namespace Autocomplete {
  export interface Props extends AutocompleteRoot.Props {}
  export interface Item extends AutocompleteItem.Props {}
}
