"use client";

import { Alert } from "@/ui/alert";
import { Button } from "@/ui/button";
import { CloseIcon } from "@jamsrui/icons";
import { IconButton } from "@jamsrui/react";
import { useState } from "react";

export const AlertWithAction = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  return (
    <div className="flex flex-col gap-4">
      <Alert status="warning">
        <Alert.Icon />
        <Alert.Content>
          Your plan will expire soon, please renew your plan.
        </Alert.Content>
        <Button
          variant="light"
          color="warning"
          size="sm"
          className="self-center"
        >
          Renew Now!
        </Button>
      </Alert>
      {isOpen && (
        <Alert status="error">
          <Alert.Icon />
          <Alert.Content>Your Pro plan has expired.</Alert.Content>
          <IconButton
            label="Close"
            onClick={handleClose}
            radius="full"
            color="danger"
            variant="solid"
            size="sm"
            className="self-center"
          >
            <CloseIcon className="size-5" />
          </IconButton>
        </Alert>
      )}
      <Alert status="success">
        <Alert.Icon />
        <Alert.Content>Your Pro plan has been activated.</Alert.Content>
        <Button
          variant="solid"
          color="success"
          size="sm"
          className="self-center"
        >
          Let's start!
        </Button>
      </Alert>
    </div>
  );
};
