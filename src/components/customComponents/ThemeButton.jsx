/* eslint-disable react-hooks/rules-of-hooks */
import { motion } from "framer-motion";
import { useThemeContext } from "../../hooks/useThemeContext";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { toast } from "react-toastify";

function ThemeButton() {
  const { theme, setTheme } = useThemeContext();

  const setlocal = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    toast.success(
      `Theme is set to ${theme !== "light" ? "light" : "dark"} mode`,
      { theme: theme !== "light" ? "light" : "dark" }
    );
  };

  return (
    <>
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
          setlocal();
        }}
        className="btn text-lg accent-btn tooltip tooltip-left"
        data-tip="Change theme"
        // whileFocus={{ scale: 1.08 }}
      >
        {theme !== "light" ? <BsFillSunFill /> : <BsMoonFill />}
      </motion.button>
    </>
  );
}

export default ThemeButton;
