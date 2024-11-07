import { Toast, ToastAction, ToastType, type ToastProps } from "../Toast/Toast";
import { LsCross } from "../../assets/icons";
import type { FC } from "react";
import { Block } from "../../utils/bem";
import "./MessageToast.scss";

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
    <Block
      name="MessageToast"
      tag={Toast}
      open={!!children}
      mod={{
        info: toastType === ToastType.info,
        error: toastType === ToastType.error,
        alertError: toastType === ToastType.alertError,
      }}
      action={
        <ToastAction closeCallback={closeCallback} altText="x">
          <LsCross />
        </ToastAction>
      }
      {...props}
    >
      {children}
    </Block>
  );
};
