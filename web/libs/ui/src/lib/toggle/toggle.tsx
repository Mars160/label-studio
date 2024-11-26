import { forwardRef, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import {Label} from "@humansignal/ui";
import styles from "./toggle.module.scss";

export const Toggle = forwardRef(
  (
    { className, label, labelProps, description, checked, defaultChecked, onChange, required, style, ...props }, ref
  ) => {
    const initialChecked = useMemo(() => defaultChecked ?? checked ?? false, [defaultChecked, checked]);
    const [isChecked, setIsChecked] = useState(defaultChecked ?? checked ?? false);
    console.log(isChecked);
    useEffect(() => {
      setIsChecked(initialChecked);
    }, [initialChecked]);

    const formField = (
      <div ref={ref} className={clsx(styles.toggle, { [styles.toggle_disabled]: props.disabled, [styles.toggle_checked]: isChecked })} style={style}>
        <input
          {...props}
          ref={ref}
          className={clsx(styles.toggle__input)}
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
            onChange?.(e);
          }}
        />
        <span className={clsx(styles.toggle__indicator)} />
      </div>
    );

    return label ? (
      <Label
        placement="right"
        required={required}
        text={label}
        description={description}
        {...(labelProps ?? {})}
      >{formField}</Label>
    ) : (
      formField
    );
  },
);