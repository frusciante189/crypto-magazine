import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import React from "react";
import { useProvider } from "../../context/context";

const DarkMode = () => {
  const { theme, setTheme } = useProvider();

  const themeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      onClick={themeHandler}
      className="sm:p-2 p-1.5 rounded-lg text-lightTitle dark:text-darkTitle border dark:border-darkTitle dark:focus:border-transparent focus:border-transparent focus:outline-2 focus:outline-transparent focus:ring-2 focus:ring-indigo-500
      transition-all transform duration-300 ease-in-out"
    >
      {theme === "light" ? (
        <>
          <MoonIcon className="w-4 h-4" />
          <span className="sr-only">Sun Icon</span>
        </>
      ) : (
        <>
          <SunIcon className="w-4 h-4" />
          <span className="sr-only">Moon Icon</span>
        </>
      )}
    </button>
  );
};

export default DarkMode;
