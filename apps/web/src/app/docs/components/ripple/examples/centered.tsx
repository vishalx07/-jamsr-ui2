import { Ripple } from "jamsrui/ripple";

export const RippleAtCenter = () => {
  return (
    <div className="relative grid h-full place-items-center">
      <div className="h-[500px]">
        <Ripple isCentered />
        Click anywhere
      </div>
    </div>
  );
};
