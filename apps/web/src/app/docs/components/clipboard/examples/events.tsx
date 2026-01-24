"use client";

import { Clipboard } from "jamsrui/clipboard";

export const ClipboardEvents = () => {
  const onSuccess = () => {
    alert("Copied to clipboard");
  };

  const onError = () => {
    alert("Failed to copy to clipboard");
  };
  return (
    <Clipboard
      text="Hello world!"
      onCopySuccess={onSuccess}
      onCopyError={onError}
    >
      Click me to copy text
      <Clipboard.Icon />
    </Clipboard>
  );
};
