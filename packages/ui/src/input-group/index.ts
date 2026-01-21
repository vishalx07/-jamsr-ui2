import {
  InputGroup as InputGroupRoot,
  InputGroupPrefix,
  InputGroupSuffix,
  InputGroupInput,
} from "./input-group";

export const InputGroup = Object.assign(InputGroupRoot, {
  Prefix: InputGroupPrefix,
  Suffix: InputGroupSuffix,
  Input: InputGroupInput,
});

export namespace InputGroup {
  export interface Props extends InputGroupRoot.Props {}
}

export { InputGroupPrefix, InputGroupSuffix, InputGroupInput };
