import {
  InputGroup as InputGroupRoot,
  InputGroupPrefix,
  InputGroupSuffix,
  InputGroupInput,
  InputGroupTextArea,
} from "./input-group";

export const InputGroup = Object.assign(InputGroupRoot, {
  Prefix: InputGroupPrefix,
  Suffix: InputGroupSuffix,
  Input: InputGroupInput,
  Textarea: InputGroupTextArea,
});

export namespace InputGroup {
  export interface Props extends InputGroupRoot.Props {}
}

export {
  InputGroupPrefix,
  InputGroupSuffix,
  InputGroupInput,
  InputGroupTextArea,
};
