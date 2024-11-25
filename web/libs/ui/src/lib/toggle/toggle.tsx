import { forwardRef, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import Label from "../label/label";
import styles from "./toggle.module.scss";

const Toggle = forwardRef(
  (
    { className, label, labelProps, description, checked, defaultChecked, onChange, required, style, ...props },
  ) => {
    const initialChecked = useMemo(() => defaultChecked ?? checked ?? false, [defaultChecked, checked]);
    const [isChecked, setIsChecked] = useState(defaultChecked ?? checked ?? false);

    const mods = {};

    useEffect(() => {
      setIsChecked(initialChecked);
    }, [initialChecked]);

    if (isChecked) mods.checked = isChecked;
    mods.disabled = props.disabled;

    const formField = (
      <div className={clsx(styles.toggle)} mod={mods} style={style}>
        <input
          {...props}
          className={clsx(styles.toggle_input)}
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
            onChange?.(e);
          }}
        />
        <span className={clsx(styles.toggle_indicator)} />
      </div>
    );

    return label ? (
      <Label
        placement="right"
        required={required}
        text={label}
        children={formField}
        description={description}
        {...(labelProps ?? {})}
      />
    ) : (
      formField
    );
  },
);

export default Toggle;