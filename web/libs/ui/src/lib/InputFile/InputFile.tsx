import { IconUpload } from "../../assets/icons";
import clsx from "clsx";
type InputFileProps = {
  name?: string,
  className?: string,
  text?: React.ReactNode | string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  props?: Record<string, any>,
};
import styles from "./InputFile.module.scss"
export const InputFile = ({ name, className, text, onChange, ...props }: InputFileProps) => {
  return (
    <label className={clsx(styles.inputWrapper, className)}>
      <span className={styles.labelContent}><IconUpload className={styles.icon} /> {text ?? <>Upload Image</>}</span>
      <input type="file" className={clsx("file-input", styles.input)} name={name} {...props} onChange={onChange}/>
    </label>
  )
};