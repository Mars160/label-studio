import { forwardRef } from "react";
import clsx from "clsx";
import styles from "./label.module.scss";

export const Label = forwardRef(
  ({ text, children, required, placement, description, size, large, style, simple, flat }) => {
    const tagName = simple ? "div" : "label";
    const mods = {
      size,
      large,
      flat,
      placement,
      withDescription: !!description,
      empty: !children,
    };

    return (
      <div mod={mods} tag={tagName} style={style} data-required={required} className={clsx(styles.label)}>
        <span className={clsx(styles.label_text)}>
          <span className={clsx(styles.label_content)}>
            {text}
            {description && <span className={clsx(styles.label_description)}>{description}</span>}
          </span>
        </span>
        <span className={clsx(styles.label_field)}>{children}</span>
      </div>
    );
  },
);

export default Label;