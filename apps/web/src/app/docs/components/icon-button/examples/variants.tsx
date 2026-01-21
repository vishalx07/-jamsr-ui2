import { IconButton } from "jamsrui/icon-button";
import { EmailIcon } from "@jamsrui/icons";

export const IconButtonVariants = () => {
  const variants: IconButton.Props["variant"][] = [
    "solid",
    "light",
    "bordered",
    "text",
    "soft",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <IconButton
          label={`${variant} Icon Button`}
          color="primary"
          key={variant}
          variant={variant}
        >
          <EmailIcon />
        </IconButton>
      ))}
    </div>
  );
};
