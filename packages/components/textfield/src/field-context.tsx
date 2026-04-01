"use client";

import { createContext, use } from "react";

import type { useField } from "./use-field";

export const FieldContext = createContext<FieldContext.Props | null>(null);

export const useFieldContext = () => {
  const ctx = use(FieldContext);
  return ctx;
};

export namespace FieldContext {
  export interface Props extends ReturnType<typeof useField> {}
}
