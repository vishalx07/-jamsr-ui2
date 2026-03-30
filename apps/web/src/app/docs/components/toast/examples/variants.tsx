"use client";

import { toastManager } from "@/app/provider/toast";
import { Button } from "jamsrui/button";

const ToastVariants = () => {
  const handleClick = (
    variant: "success" | "error" | "info" | "warning" | "default",
  ) => {
    toastManager.add({
      title: "Hello, world!",
      description: "This is a toast",
      type: variant,
    });
  };
  return (
    <div className="flex gap-4">
      <Button onClick={() => handleClick("success")}>Success toast</Button>
      <Button onClick={() => handleClick("error")}>Error toast</Button>
      <Button onClick={() => handleClick("info")}>Info toast</Button>
      <Button onClick={() => handleClick("warning")}>Warning toast</Button>
    </div>
  );
};

export default ToastVariants;
