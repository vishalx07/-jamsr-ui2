"use client";

import { Button, toast } from "jamsrui";

const ToastUsage = () => {
  return <Button onClick={() => toast("Hello, world!")}>Press Me</Button>;
};

export default ToastUsage;
