"use client";
import { createContext, use } from "react";

import type { useCircularProgress } from "./use-circular-progress";

export const CircularProgressContext =
  createContext<CircularProgressContext.Props | null>(null);

export const useCircularProgressContext = () => {
  const context = use(CircularProgressContext);
  if (!context) {
    throw new Error(
      "useCircularProgressContext must be used within a CircularProgressContext",
    );
  }
  return context;
};

export namespace CircularProgressContext {
  export interface Props extends ReturnType<typeof useCircularProgress> {}
}
