import { createContext, type FC, type ReactNode, useCallback, useContext, useState } from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { type BemComponent, Block, Elem } from "../../utils/bem";
import "./Toast.scss";
import { MessageToast } from "../MessageToast/MessageToast";

export type ToastViewportProps = ToastPrimitive.ToastViewportProps & BemComponent;
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
    <Block name="toast-viewport" tag="div" {...props}>
      <ToastPrimitive.Viewport hotkey={hotkey} label={label} />
    </Block>
  );
};

export const Toast: FC<ToastProps> = ({
  title,
  action,
  children,
  closeable = false,
  theme = "light",
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
      <Block name="toast" mod={{ theme, ...(props?.mod ?? {}) }}>
        {title && (
          <ToastPrimitive.Title>
            <Elem name="title">{title}</Elem>
          </ToastPrimitive.Title>
        )}
        <ToastPrimitive.Description>
          <Elem name="content">{children}</Elem>
        </ToastPrimitive.Description>
        {action}
        {closeable && (
          <ToastPrimitive.Close asChild>
            <Elem name="close" aria-label="Close">
              <span aria-hidden>×</span>
            </Elem>
          </ToastPrimitive.Close>
        )}
      </Block>
    </ToastPrimitive.Root>
  );
};

type ToastWithoutBem = ToastPrimitive.ToastActionProps & Omit<BemComponent, "name">;
export interface ToastActionProps extends ToastWithoutBem {
  closeCallback?: () => void;
}
export const ToastAction: FC<ToastActionProps> = ({ children, closeCallback, altText, ...props }) => (
  <ToastPrimitive.Action altText={altText} asChild style={{ pointerEvents: "none" }}>
    <Elem name="action" tag="button" onClick={closeCallback} style={{ pointerEvents: "all" }} {...props}>
      {children}
    </Elem>
  </ToastPrimitive.Action>
);
type ToastShowArgs = {
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
