import { useEffect, useState } from "react";
import { VscColorMode } from "react-icons/vsc";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setDarkMode(savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <VscColorMode onClick={toggleTheme} className="h-6 w-6 text-theme hover:text-brand" />
    </div>
  );
};

export default ThemeSwitcher;
