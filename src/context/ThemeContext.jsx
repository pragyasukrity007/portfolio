/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";
export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    //we get json format from local storage so we parse it into objects for JavaScript
    const theme = localStorage.getItem("theme");
    //check if we got theme from local storage, if yes then set the theme
    if (theme) {
      setTheme(theme);
      toast.success(`Theme is set to ${theme} mode`, { theme });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
