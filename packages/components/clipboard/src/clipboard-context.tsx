"use client";
import { createContext, use } from "react";

export const ClipboardContext = createContext<ClipboardContext.Props | null>(
  null,
);

export const useClipboardContext = () => {
  const ctx = use(ClipboardContext);
  if (!ctx) {
    throw new Error("useClipboardContext must be with with a ClipboardContext");
  }
  return ctx;
};

export namespace ClipboardContext {
  export interface Props {
    isCopied: boolean;
  }
}
