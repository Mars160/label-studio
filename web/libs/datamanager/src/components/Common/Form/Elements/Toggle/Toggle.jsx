import { forwardRef, useEffect, useMemo, useState } from "react";
import { Toggle as UiToggle } from "@humansignal/ui";
import { cn } from "../../../../../utils/bem";
import { FormField } from "../../FormField";
import { default as Label } from "../Label/Label";
import "./Toggle.scss";

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
    const rootClass = cn("toggle-dm");
    const initialChecked = useMemo(() => defaultChecked ?? checked ?? false, [defaultChecked, checked]);
    const [isChecked, setIsChecked] = useState(defaultChecked ?? checked ?? false);

    const classList = [rootClass];
    const mods = {};

    useEffect(() => {
      setIsChecked(initialChecked);
    }, [initialChecked]);

    if (isChecked) mods.checked = isChecked;
    mods.disabled = props.disabled;

    classList.push(rootClass.mod(mods), className);

    const formField = (
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
        {({ ref }) => (
          <div className={classList.join(" ")}>
            <UiToggle
              ref={ref}
              {...props}
              checked={isChecked}
              onChange={(e) => {
                setIsChecked(e.target.checked);
                onChange?.(e);
              }}
            />
          </div>
        )}
      </FormField>
    );

    return label ? (
      <Label
        ref={ref}
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
