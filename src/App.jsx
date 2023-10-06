import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  });
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className="h-screen flex justify-center items-center dark:bg-neutral-900">
      <button
        className="bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-600 dark:bg-slate-300 dark:hover:bg-slate-100 dark:text-black"
        onClick={handleChangeTheme}
      >
        Modo oscuro
      </button>
    </div>
  );
}

export default App;
