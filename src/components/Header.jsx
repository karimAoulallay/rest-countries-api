import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="py-6 text-DarkestBlue dark:text-light dark:bg-darkBlue">
      <div className="container flex justify-between">
        <div className="font-extrabold text-lg sm:text-2xl">
          Where in the world?
        </div>
        <button
          className="space-x-2 flex items-center overflow-hidden rounded-md px-1 focus:outline outline-2"
          onClick={props.toggle}
        >
          <div
            className={`w-4 h-full relative transition-transform duration-300 ${
              props.darkMode ? "-translate-y-full" : ""
            }`}
          >
            <div className="absolute w-full h-full flex items-center top-full">
              <i className="bx bxs-sun"></i>
            </div>
            <div className="absolute w-full h-full flex items-center">
              <i className="bx bxs-moon"></i>
            </div>
          </div>
          <span className="font-semibold">
            {props.darkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
