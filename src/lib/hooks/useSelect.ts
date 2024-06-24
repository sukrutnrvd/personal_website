import SelectContext from "@/components/Context/SelectBoxContext";
import React, { useContext } from "react";

const useSelect = () => {
  return useContext(SelectContext);
};

export default useSelect;
