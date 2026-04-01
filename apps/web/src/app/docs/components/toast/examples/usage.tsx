"use client";

import { toastManager } from "@/app/provider/toast";
import { Button } from "jamsrui/button";

const ToastUsage = () => {
  const handleClick = () => {
    toastManager.add({
      title: "Hello, world!",
      description: "This is a toast",
    });
  };
  return <Button onClick={handleClick}>Press Me</Button>;
};

export default ToastUsage;
