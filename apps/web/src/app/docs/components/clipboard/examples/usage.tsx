import { Clipboard } from "jamsrui/clipboard";

export const ClipboardUsage = () => {
  return (
    <Clipboard text="Hello world!">
      <Clipboard.Icon />
    </Clipboard>
  );
};
