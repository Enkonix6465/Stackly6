// ToggleTheme.jsx
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center bg-gray-300 dark:bg-gray-700 rounded-full px-2 py-1 w-16 justify-between"
    >
      <Sun className="w-4 h-4 text-yellow-500" />
      <Moon className="w-4 h-4 text-white" />
    </button>
  );
}
