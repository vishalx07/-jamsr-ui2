import {
  InputGroup as InputGroupRoot,
  InputGroupPrefix,
  InputGroupSuffix,
} from "./input-group";

export const InputGroup = Object.assign(InputGroupRoot, {
  Prefix: InputGroupPrefix,
  Suffix: InputGroupSuffix,
});

export namespace InputGroup {
  export interface Props extends InputGroupRoot.Props {}
  export interface Prefix extends InputGroupPrefix.Props {}
  export interface Suffix extends InputGroupSuffix.Props {}
}

export { InputGroupPrefix, InputGroupSuffix };
