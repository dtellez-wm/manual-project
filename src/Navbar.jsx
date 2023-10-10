import { useEffect } from "react";
import { useState } from "react";
import { Button } from 'flowbite-react';
import { HiOutlineMoon } from "react-icons/hi";
import Content from "./Content";

function Navbar() {
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
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        
      <div className="max-w-screen-xl flex flex-wrap justify-center mx-auto p-4">
        <a href="#" className="flex items-center">
          <img
            src="https://manual.webmaps.com.mx/mobile/css/Login/images/9c271f8a2e8c1453d25925b23c239dcba0226afddd7c3ebbce7c82f10f30ac34_logoLogin.svg"
            className="h-16 mr-3"
            alt="Manual Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Manual</span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-40 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                FUNCIONALIDAD
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                BUSCADOR
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                FAQ
              </a>
            </li>
        <Button
          className="bg-slate-500 border-gray-400 text-black px-4 py-2 rounded hover:bg-slate-600 dark:bg-slate-300 dark:hover:bg-slate-100 dark:text-black"
          onClick={handleChangeTheme}
        >
          Modo oscuro
          <HiOutlineMoon className="ml-2 h-5 w-5" />
        </Button>
          </ul>
        </div>
      </div>
      <Content></Content>
    </nav>
  );
}

export default Navbar;
