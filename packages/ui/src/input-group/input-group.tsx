"use client";

import { Input, InputGroup as InputGroupUI, Textarea } from "@jamsrui/react";
import { createContext, use, useMemo } from "react";
import { VariantProps } from "tailwind-variants";
import { inputGroupInputStyles, inputGroupStyles } from "./styles";

type InputGroupVariants = VariantProps<typeof inputGroupStyles>;

const InputGroupContext = createContext<{
  styles: ReturnType<typeof inputGroupStyles>;
} | null>(null);

const useInputGroupContext = () => {
  const context = use(InputGroupContext);
  if (!context) {
    throw new Error("useInputGroupContext must be used within an InputGroup");
  }
  return context;
};

export const InputGroup = (props: InputGroup.Props) => {
  const { className, variant, ...restProps } = props;
  const styles = inputGroupStyles({ variant });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <InputGroupContext value={value}>
      <InputGroupUI {...restProps} className={styles.root({ className })} />
    </InputGroupContext>
  );
};

export namespace InputGroup {
  export interface Props extends InputGroupUI.Props, InputGroupVariants {}
}

export const InputGroupPrefix = (props: InputGroupUI.Prefix) => {
  const { styles } = useInputGroupContext();
  return (
    <InputGroupUI.Prefix
      {...props}
      className={styles.prefix({ className: props.className })}
    />
  );
};

export const InputGroupSuffix = (props: InputGroupUI.Suffix) => {
  const { styles } = useInputGroupContext();
  return (
    <InputGroupUI.Suffix
      {...props}
      className={styles.suffix({ className: props.className })}
    />
  );
};

export const InputGroupInput = (props: Input.Props) => {
  const styles = inputGroupInputStyles();
  return <Input {...props} className={styles} />;
};

export const InputGroupTextArea = (props: Textarea.Props) => {
  const styles = inputGroupInputStyles();
  return <Textarea {...props} className={styles} />;
};
