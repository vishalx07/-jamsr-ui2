import { tv } from "tailwind-variants";

export const labelStyles = tv({
  base: [
    "label cursor-default shrink-0 text-sm font-normal text-foreground group-data-invalid:text-danger",
    "group-data-disabled:status-disabled",
    "group-data-invalid:text-danger",
  ],
});
