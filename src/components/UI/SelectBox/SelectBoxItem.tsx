"use client";
import { FC, PropsWithChildren } from "react";
import useSelect from "@/lib/hooks/useSelect";
import styles from "./SelectBox.module.css";

interface SelectBoxItemProps {
  value?: any;
}

const SelectBoxItem: FC<PropsWithChildren<SelectBoxItemProps>> = ({
  children,
  value,
}) => {
  const { handleSelect } = useSelect();
  return (
    <li
      className={styles["select-item"]}
      onClick={() => {
        handleSelect(value);
      }}
    >
      {children}
    </li>
  );
};

export default SelectBoxItem;
