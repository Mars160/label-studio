import { forwardRef, useEffect, useMemo } from "react";
import { cn } from "../../../../utils/bem";
import { FormField } from "../../FormField";
import { useValueTracker } from "../../Utils";
import { default as Label } from "../Label/Label";
import "./Toggle.scss";
import { Toggle as UiToggle } from "@humansignal/ui";

const Toggle = forwardRef(
  (
    {
      className,
      label,
      labelProps,
      description,
      checked,
      defaultChecked,
      onChange,
      validate,
      required,
      skip,
      ...props
    },
    ref,
  ) => {
    const rootClass = cn("toggle");
    const initialChecked = useMemo(() => defaultChecked ?? checked ?? false, [defaultChecked, checked]);
    const [isChecked, setIsChecked] = useValueTracker(checked, defaultChecked ?? false);

    const classList = [rootClass];
    const mods = {};

    useEffect(() => {
      setIsChecked(initialChecked);
    }, [initialChecked]);

    if (isChecked) mods.checked = isChecked;
    mods.disabled = props.disabled;

    classList.push(rootClass.mod(mods), className);

    return (
      <FormField
        ref={label ? null : ref}
        label={label}
        name={props.name}
        validate={validate}
        required={required}
        skip={skip}
        setValue={(value) => setIsChecked(value)}
        {...props}
      >
        {/* {(ref) => (
          <UiToggle ref={ref} {...props} label={label} labelProps={labelProps} required={required} checked={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
            onChange?.(e);
          }}
          /> 
        )} */}
        {(ref) => (
          <div className={classList.join(" ")}>
            <UiToggle ref={ref} 
              checked={isChecked} onChange={(e) => {
                setIsChecked(e.target.checked);
                onChange?.(e);
              }} />
          </div>
        )}
      </FormField>
    );
  },
);

export default Toggle;
