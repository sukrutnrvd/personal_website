import { createContext } from "react";

interface SelectBoxContextProps {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  open: () => void;
  handleSelect: (value: any) => void;
  value?: any;
}

const SelectContext = createContext<SelectBoxContextProps>({
  isOpen: false,
  toggle: () => {},
  close: () => {},
  open: () => {},
  handleSelect: () => {},
  value: null,
});

export default SelectContext;
