import { Clipboard } from "jamsrui/clipboard";

export const ClipboardWithoutButton = () => {
  return (
    <Clipboard text="Hello world!" hideCopyButton>
      Click me to copy text
    </Clipboard>
  );
};
