"use client";

import PropTypes from "prop-types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Navbar({ options = [] }) {
  const pathname = usePathname();

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <nav className="bg-white text-black p-4 dark:bg-gray-800 dark:text-white">
      <div className="flex items-center justify-between">
        {/* Nav links with rounded box */}
        <div className="mx-auto flex items-center justify-between rounded-full border border-gray-300 shadow-md dark:border-gray-700">
          {options.length > 0 ? (
            <ul className="flex space-x-6 px-4 py-2">
              {options.map((option, index) => (
                <li key={index}>
                  <Link
                    href={option.path}
                    className={`text-lg font-medium hover:text-gray-300 ${
                      pathname === option.path ? "text-teal-400 underline" : ""
                    }`}
                  >
                    {option.label.trim()}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No navigation options available</p>
          )}
        </div>

        {/* Dark mode toggle button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          aria-pressed={isDarkMode}
          className="ml-4 p-2 border border-gray-300 rounded-full hover:border-teal-400 dark:border-gray-600"
        >
          {isDarkMode ? (
            <img
              src="../public/moon.svg"
              alt="Switch to Light Mode"
              className="w-6 h-6"
            />
          ) : (
            <img src="../public/sun.svg" alt="Switch to Dark Mode" className="w-6 h-6"/>
          )}
        </button>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
