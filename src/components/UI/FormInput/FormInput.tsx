import { FC, InputHTMLAttributes } from "react";
import styles from "./FormInput.module.css";
import Text from "../Typography/Text";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: React.ReactNode;
}

const FormInput: FC<FormInputProps> = ({ icon, error, ...props }) => {
  return (
    <div
      className={`${styles["input-container"]} ${
        error && styles["input-container-error"]
      }`}
    >
      {icon && <div className={styles["input-icon"]}>{icon}</div>}
      <input
        className={`${styles.input} ${icon && styles["input-with-icon"]} ${
          error && styles["input-with-error"]
        }`}
        {...props}
      />
      <Text
        key={error}
        animate={{ opacity: [0, 1] }}
        size="s"
        color={error ? "danger" : "black"}
        className={styles["input-error"]}
      >
        {error}
      </Text>
    </div>
  );
};

export default FormInput;
