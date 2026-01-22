import {
  InputGroupPrefix,
  InputGroup as InputGroupRoot,
  InputGroupSuffix,
} from "./input-group";

export const InputGroup = Object.assign(InputGroupRoot, {
  Prefix: InputGroupPrefix,
  Suffix: InputGroupSuffix,
});

export namespace InputGroup {
  export interface Props extends InputGroupRoot.Props {}
}

export { InputGroupPrefix, InputGroupSuffix };
