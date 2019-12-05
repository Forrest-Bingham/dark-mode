import { useEffect } from "react";

import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [someValue, setSomeValue] = useLocalStorage("darkMode");

  useEffect(() => {
    if (someValue === false) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [someValue]);

  return [someValue, setSomeValue];
};
