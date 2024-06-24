"use client";

import React, { FC, PropsWithChildren } from "react";
import styles from "./SelectBox.module.css";
import { AnimatePresence, motion } from "framer-motion";
import useSelect from "@/lib/hooks/useSelect";

const SelectBoxItems: FC<PropsWithChildren> = ({ children, ...props }) => {
  const { isOpen } = useSelect();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={styles["select-items"]}
          data-testid="select-items"
        >
          {children}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default SelectBoxItems;
