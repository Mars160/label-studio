import { createContext, type FC, type ReactNode, useCallback, useContext, useState } from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import styles from "./Toast.module.scss";
import { MessageToast } from "../MessageToast/MessageToast";
import clsx from "clsx";
import { IconCross } from "../../assets/icons";

export type ToastViewportProps = ToastPrimitive.ToastViewportProps & any;
export interface ToastProps extends ToastPrimitive.ToastProps {
  title?: string;
  action?: ReactNode;
  closeable?: boolean;
  open?: boolean;
  onClose?: () => void;
  theme?: ToastTheme;
  mod?: Record<string, unknown>;
}

enum ToastTheme {
  dark = "dark",
  light = "light",
}

export enum ToastType {
  info = "info",
  error = "error",
  alertError = "alertError",
}
interface ToastProviderWithTypes extends ToastPrimitive.ToastProviderProps {
  toastType: ToastType;
}
export const ToastViewport: FC<ToastViewportProps> = ({ hotkey, label, ...props }) => {
  return (
    <div className={styles["toast-viewport"]} {...props}>
      <ToastPrimitive.Viewport hotkey={hotkey} label={label} />
    </div>
  );
};

export const Toast: FC<ToastProps> = ({
  title,
  action,
  children,
  closeable = false,
  theme = ToastTheme.light,
  onClose,
  ...props
}) => {
  const closeHandler = useCallback(
    (open: boolean) => {
      props.onOpenChange?.(open);
      if (!closeable) return;
      if (!open) onClose?.();
    },
    [closeable, onClose, props.onOpenChange],
  );
  return (
    <ToastPrimitive.Root {...props} onOpenChange={closeHandler}>
      <div className={clsx(styles.toast, {
        [styles.theme_dark] : theme === ToastTheme.dark, 
        [styles.theme_light] : theme === ToastTheme.light, 
      })}>
        {title && (
          <ToastPrimitive.Title>
            <div className={clsx(styles.toast__title)}>{title}</div>
          </ToastPrimitive.Title>
        )}
        <ToastPrimitive.Description>
          <div className={clsx(styles.toast__content)}>{children}</div>
        </ToastPrimitive.Description>
        {action}
        {closeable && (
          <ToastPrimitive.Close asChild>
            <div className={clsx(styles.toast__close)} aria-label="Close">
              <span aria-hidden><IconCross /></span>
            </div>
          </ToastPrimitive.Close>
        )}
      </div>
    </ToastPrimitive.Root>
  );
};

export interface ToastActionProps extends ToastPrimitive.ToastActionProps {
  closeCallback?: () => void;
}
export const ToastAction: FC<ToastActionProps> = ({ children, closeCallback, altText, ...props }) => (
  <ToastPrimitive.Action altText={altText} asChild style={{ pointerEvents: "none" }}>
    <button className={styles.toast__action} onClick={closeCallback} style={{ pointerEvents: "all" }} {...props}>
      {children}
    </button>
  </ToastPrimitive.Action>
);
export type ToastShowArgs = {
  message: string;
  type?: ToastType;
  duration?: number; // -1 for no auto close
};
type ToastContextType = {
  show: ({ message, type }: ToastShowArgs) => void;
};

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: FC<ToastProviderWithTypes> = ({ swipeDirection = "down", children, ...props }) => {
  const [toastMessage, setToastMessage] = useState<ToastShowArgs | null>();
  const defaultDuration = 2000;
  const duration = toastMessage?.duration ?? defaultDuration;
  const show = ({ message, type, duration = defaultDuration }: ToastShowArgs) => {
    setToastMessage({ message, type });
    if (duration < 0) return;
    setTimeout(() => setToastMessage(null), duration);
  };

  return (
    <ToastContext.Provider value={{ show }}>
      <ToastPrimitive.Provider swipeDirection={swipeDirection} duration={duration} {...props}>
        <MessageToast toastType={toastMessage?.type} closeCallback={() => setToastMessage(null)}>
          {toastMessage?.message}
        </MessageToast>
        {children}
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
};
