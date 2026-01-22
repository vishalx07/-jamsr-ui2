import { Kbd } from "jamsrui/kbd";

export const KbdUsage = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      <Kbd keys={["k"]}>K</Kbd>
      <div className="flex gap-2">
        <Kbd keys={["ctrl"]}>Ctrl</Kbd>+<Kbd keys={["k"]}>K</Kbd>
      </div>
      <div className="flex gap-2">
        <Kbd keys={["cmd"]}>Cmd</Kbd>+<Kbd keys={["k"]}>K</Kbd>
      </div>
    </div>
  );
};
