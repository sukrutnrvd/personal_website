import { useEffect } from "react";

const useKeyPress = (key: string, handler: () => void) => {
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === key) handler();
    });

    return () => {
      window.addEventListener("keydown", (e) => {
        if (e.key === key) handler();
      });
    };
  }, [handler, key]);
};

export default useKeyPress;
