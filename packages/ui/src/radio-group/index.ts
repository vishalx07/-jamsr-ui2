import {
  Radio as RadioRoot,
  RadioControl,
  RadioContent,
  RadioGroup,
  RadioIndicator,
} from "./radio-group";

export const Radio = Object.assign(RadioRoot, {
  Group: RadioGroup,
  Control: RadioControl,
  Content: RadioContent,
  Indicator: RadioIndicator,
});

export { RadioControl, RadioContent, RadioGroup, RadioIndicator };
