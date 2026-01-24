import { Clipboard } from "jamsrui/clipboard";

export const ClipboardWithContent = () => {
  return (
    <Clipboard text="Hello world!">
      Click me to copy text
      <Clipboard.Icon />
    </Clipboard>
  );
};
