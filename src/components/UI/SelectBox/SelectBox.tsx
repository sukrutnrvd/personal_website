"use client";
import SelectContext from "@/components/Context/SelectBoxContext";
import React, { useRef, useState } from "react";
import styles from "./SelectBox.module.css";
import useOutsideClick from "@/lib/hooks/useOutsideClick";
import useKeyPress from "@/lib/hooks/useKeyPress";
import SelectBoxButton from "./SelectBoxButton";
import SelectBoxItems from "./SelectBoxItems";
import SelectBoxItem from "./SelectBoxItem";

interface SelectBoxProps {
  children: React.ReactNode;
  onChange?: (value: any) => void;
  value?: any;
}

const SelectBox = ({
  children,
  onChange,
  value: itemValue,
}: SelectBoxProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(itemValue);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(true);
  };

  useOutsideClick(divRef, () => {
    close();
  });

  useKeyPress("Escape", () => {
    close();
  });

  const handleSelect = (value: any) => {
    setValue(value);
    onChange && onChange(value);
    close();
  };
  return (
    <SelectContext.Provider
      value={{
        isOpen,
        toggle,
        close,
        open,
        value,
        handleSelect,
      }}
    >
      <div ref={divRef} className={styles.select} data-testid="select">
        {children}
      </div>
    </SelectContext.Provider>
  );
};

SelectBox.Button = SelectBoxButton;
SelectBox.Items = SelectBoxItems;
SelectBox.Item = SelectBoxItem;

export default SelectBox;
