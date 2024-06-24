"use client";
import React, { ButtonHTMLAttributes, FC } from "react";
import useSelect from "@/lib/hooks/useSelect";
import styles from "./SelectBox.module.css";

interface SelectBoxButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const SelectBoxButton: FC<SelectBoxButtonProps> = ({ children, ...props }) => {
  const { toggle } = useSelect();
  return (
    <button
      {...props}
      onClick={() => {
        toggle();
      }}
      type="button"
      className={styles["select-button"]}
    >
      {children}
    </button>
  );
};

export default SelectBoxButton;
