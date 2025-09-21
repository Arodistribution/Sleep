"use client";

import * as React from "react";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast";
import { useToast } from "@/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function (t) {
        const { id, title, description, action, ...props } = t as {
          id: string;
          title?: React.ReactNode;
          description?: React.ReactNode;
          action?: React.ReactElement;
        } & Record<string, any>;
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}

export default Toaster;
