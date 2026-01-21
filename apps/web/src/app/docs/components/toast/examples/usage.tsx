"use client";

import { Button } from "jamsrui/button";
import { toast } from "jamsrui/toast";

const ToastUsage = () => {
  return <Button onClick={() => toast("Hello, world!")}>Press Me</Button>;
};

export default ToastUsage;
