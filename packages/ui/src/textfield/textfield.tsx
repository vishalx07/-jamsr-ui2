"use client";

import { createContext, use, useMemo } from "react";

import { Field as FieldUI } from "@jamsrui/react";

import { textFieldStyles } from "./styles";

const FieldStylesContext = createContext<{
  styles: ReturnType<typeof textFieldStyles>;
} | null>(null);

const useFieldContext = () => {
  const ctx = use(FieldStylesContext);
  if (!ctx) {
    throw new Error("useFieldContext must be used within a Field");
  }
  return ctx;
};

export const Field = (props: FieldUI.Props) => {
  const styles = textFieldStyles({
    className: props.className,
    orientation: props.orientation,
  });
  const value = useMemo(() => ({ styles }), [styles]);
  return (
    <FieldStylesContext value={value}>
      <FieldUI {...props} className={styles.root()} />
    </FieldStylesContext>
  );
};
export namespace Field {
  export interface Props extends FieldUI.Props {}
}

export const FieldContent = (props: FieldUI.Content) => {
  const { styles } = useFieldContext();
  return <FieldUI.Content {...props} className={styles.content()} />;
};
export namespace FieldContent {
  export interface Props extends FieldUI.Content {}
}
