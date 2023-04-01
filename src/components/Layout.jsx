import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  function toggle() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div
      className={`${darkMode ? "dark" : ""} grid grid-rows-[auto_1fr] h-screen`}
    >
      <Header toggle={toggle} darkMode={darkMode} />
      <main className="py-12 bg-lightGray dark:bg-DarkerBlue">
        <Outlet />
      </main>
    </div>
  );
};
