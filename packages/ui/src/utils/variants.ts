import { tv } from "tailwind-variants";

type Color =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
type Variant = "solid" | "bordered" | "text" | "light" | "soft";

const solidClasses = {
  default:
    "bg-default border-default text-default-foreground data-hover:bg-default-hover data-pressed:bg-default-active",
  primary:
    "bg-primary border-primary text-primary-foreground data-hover:bg-primary-hover data-pressed:bg-primary-active",
  secondary:
    "bg-secondary border-secondary text-secondary-foreground data-hover:bg-secondary-hover data-pressed:bg-secondary-active",
  success:
    "bg-success border-success text-success-foreground data-hover:bg-success-hover data-pressed:bg-success-active",
  warning:
    "bg-warning border-warning text-warning-foreground data-hover:bg-warning-hover data-pressed:bg-warning-active",
  danger:
    "bg-danger border-danger text-danger-foreground data-hover:bg-danger-hover data-pressed:bg-danger-active",
} satisfies Record<Color, string>;

const borderedClasses = {
  default:
    "bg-transparent border-default text-foreground data-hover:bg-default-soft data-pressed:bg-default-soft-active",
  primary:
    "bg-transparent border-primary text-primary data-hover:bg-primary-soft data-pressed:bg-primary-soft-active",
  secondary:
    "bg-transparent border-secondary text-secondary data-hover:bg-secondary-soft data-pressed:bg-secondary-soft-active",
  success:
    "bg-transparent border-success text-success data-hover:bg-success-soft data-pressed:bg-success-soft-active",
  warning:
    "bg-transparent border-warning text-warning data-hover:bg-warning-soft data-pressed:bg-warning-soft-active",
  danger:
    "bg-transparent border-danger text-danger data-hover:bg-danger-soft data-pressed:bg-danger-soft-active",
} satisfies Record<Color, string>;

const textClasses = {
  default: "text-foreground data-hover:opacity-90",
  primary: "text-primary data-hover:text-primary-hover",
  secondary: "text-secondary data-hover:text-secondary-hover",
  success: "text-success data-hover:text-success-hover",
  warning: "text-warning data-hover:text-warning-hover",
  danger: "text-danger data-hover:text-danger-hover",
} satisfies Record<Color, string>;

const lightClasses = {
  default:
    "bg-transparent text-foreground data-hover:bg-default-soft-hover data-pressed:bg-foreground-soft-active",
  primary:
    "bg-transparent text-primary data-hover:bg-primary-soft-hover data-pressed:bg-primary-soft-active",
  secondary:
    "bg-transparent text-secondary data-hover:bg-secondary-soft-hover data-pressed:bg-secondary-soft-active",
  success:
    "bg-transparent text-success data-hover:bg-success-soft-hover data-pressed:bg-success-soft-active",
  warning:
    "bg-transparent text-warning data-hover:bg-warning-soft-hover data-pressed:bg-warning-soft-active",
  danger:
    "bg-transparent text-danger data-hover:bg-danger-soft-hover data-pressed:bg-danger-soft-active",
} satisfies Record<Color, string>;

const flatClasses = {
  default:
    "bg-default-soft-hover text-foreground data-hover:bg-default-soft data-pressed:bg-default-soft-active",
  primary:
    "bg-primary-soft-hover text-primary data-hover:bg-primary-soft data-pressed:bg-primary-soft-active",
  secondary:
    "bg-secondary-soft-hover text-secondary data-hover:bg-secondary-soft data-pressed:bg-secondary-soft-active",
  success:
    "bg-success-soft-hover text-success data-hover:bg-success-soft data-pressed:bg-success-soft-active",
  warning:
    "bg-warning-soft-hover text-warning data-hover:bg-warning-soft data-pressed:bg-warning-soft-active",
  danger:
    "bg-danger-soft-hover text-danger data-hover:bg-danger-soft data-pressed:bg-danger-soft-active",
} satisfies Record<Color, string>;

export const colorVariants = {
  solid: solidClasses,
  bordered: borderedClasses,
  text: textClasses,
  light: lightClasses,
  soft: flatClasses,
} satisfies Record<Variant, Record<Color, string>>;

export const allColors: Color[] = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];
export const allVariants: Variant[] = [
  "solid",
  "bordered",
  "text",
  "light",
  "soft",
];

export const variantStyles = tv({
  variants: {
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: "",
    },
    variant: {
      solid: "",
      bordered: "border",
      light: "",
      text: "",
      soft: "",
    },
  },
  compoundVariants: [
    ...allVariants.flatMap((variant) =>
      allColors.map((color) => ({
        variant,
        color,
        className: colorVariants[variant][color],
      })),
    ),
  ],
});
