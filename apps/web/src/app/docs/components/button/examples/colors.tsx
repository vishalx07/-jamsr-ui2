import { Button } from "@jamsrui/react";

export const ButtonColors = () => {
  return (
    <div className="flex gap-4">
      <Button color="default" radius="full">
        Default
      </Button>
      <Button color="primary" radius="full">
        Primary
      </Button>
      <Button color="secondary" radius="full">
        Secondary
      </Button>
      <Button color="success" radius="full">
        Success
      </Button>
      <Button color="warning" radius="full">
        Warning
      </Button>
      <Button color="danger" radius="full">
        Danger
      </Button>
    </div>
  );
};
