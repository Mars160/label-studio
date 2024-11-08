import { Toast, ToastAction, ToastType, type ToastProps } from "../Toast/Toast";
import { IconCross } from "../../assets/icons";
import type { FC } from "react";
import styles from "./MessageToast.module.scss";
import clsx from "clsx";

export interface MessageToastProps extends ToastProps {
  children?: any;
  toastType?: ToastType | null;
  closeCallback?: () => void;
}

export const MessageToast: FC<MessageToastProps> = ({
  toastType = ToastType.info,
  closeCallback,
  children,
  ...props
}) => {
  return (
    <Toast
      className={clsx(
        styles.MessageToast,
        { 
          [styles.MessageToast_info]: toastType === ToastType.info,
          [styles.MessageToast_error]: toastType === ToastType.error,
          [styles.MessageToast_alertError]: toastType === ToastType.alertError, 
        }
      )}
      open={!!children}
      action={
        <ToastAction closeCallback={closeCallback} altText="x">
          <IconCross />
        </ToastAction>
      }
      {...props}
    >
      {children}
    </Toast>
  );
};
