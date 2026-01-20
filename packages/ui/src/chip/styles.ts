import { tv } from "tailwind-variants";

const allColors = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
] as const;

const colorVariants = {
  solid: {
    default: "bg-default text-default-foreground",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    success: "bg-success text-success-foreground",
    warning: "bg-warning text-warning-foreground",
    danger: "bg-danger text-danger-foreground",
  },
  bordered: {
    default: "border-default text-default-foreground",
    primary: "border-primary text-primary",
    secondary: "border-secondary text-secondary",
    success: "border-success text-success",
    warning: "border-warning text-warning",
    danger: "border-danger text-danger",
  },
  soft: {
    default: "bg-default-soft text-default-foreground",
    primary: "bg-primary-soft text-primary",
    secondary: "bg-secondary-soft text-secondary",
    success: "bg-success-soft text-success",
    warning: "bg-warning-soft text-warning",
    danger: "bg-danger-soft text-danger",
  },
};

export const chipStyles = tv({
  slots: {
    root: "chip chip__root relative box-border inline-flex min-w-min max-w-fit shrink-0 items-center justify-between whitespace-nowrap rounded-full gap-2",
    dot: "chip__dot size-1.5 rounded-full",
  },
  variants: {
    variant: {
      solid: {
        root: "chip--solid",
      },
      bordered: {
        root: "chip--bordered border",
      },
      soft: {
        root: "chip--soft",
      },
      dot: {
        dot: "chip--dot outline-2",
      },
    },
    size: {
      sm: {
        root: "chip--xs h-5 px-1 text-xs",
      },
      md: {
        root: "chip--sm h-6 px-2 text-xs",
      },
      lg: {
        root: "chip--md h-7 px-3 text-sm",
      },
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: "",
    },
    isSquare: {
      true: {
        root: "chip--squared flex aspect-square items-center justify-center",
      },
    },
    isBordered: {
      true: {
        root: "chip--bordered border",
      },
    },
    radius: {
      none: { root: "rounded-none" },
      sm: { root: "rounded-sm" },
      md: { root: "rounded-md" },
      lg: { root: "rounded-lg" },
      xl: { root: "rounded-xl" },
      "2xl": { root: "rounded-2xl" },
      "3xl": { root: "rounded-3xl" },
      full: { root: "rounded-full" },
    },
  },
  compoundVariants: [
    ...(["solid", "bordered", "soft"] as const).flatMap((variant) =>
      allColors.map((color) => ({
        variant,
        color,
        className: {
          root: colorVariants[variant][color],
        },
      })),
    ),
    // dot
    ...allColors.map((color) => ({
      variant: "dot" as const,
      color,
      className: {
        dot: colorVariants["solid"][color],
      },
    })),
    {
      variant: "dot",
      color: "primary",
      className: {
        dot: "outline-primary-border",
      },
    },
    {
      variant: "dot",
      color: "secondary",
      className: {
        dot: "outline-secondary-border",
      },
    },
    {
      variant: "dot",
      color: "success",
      className: {
        dot: "outline-success-border",
      },
    },
    {
      variant: "dot",
      color: "warning",
      className: {
        dot: "outline-warning-border",
      },
    },
    {
      variant: "dot",
      color: "danger",
      className: {
        dot: "outline-danger-border",
      },
    },
    {
      variant: "dot",
      color: "default",
      className: {
        dot: "outline-default-border",
      },
    },
    // bordered
    {
      isBordered: true,
      color: "danger",
      className: { root: "border-danger" },
    },
    {
      isBordered: true,
      color: "primary",
      className: { root: "border-primary" },
    },
    {
      isBordered: true,
      color: "secondary",
      className: { root: "border-secondary" },
    },
    {
      isBordered: true,
      color: "success",
      className: { root: "border-success" },
    },
    {
      isBordered: true,
      color: "warning",
      className: { root: "border-warning" },
    },
    {
      isBordered: true,
      color: "default",
      className: { root: "border-border" },
    },
  ],
  defaultVariants: {
    color: "default",
    size: "md",
    radius: "full",
    variant: "solid",
  },
});
