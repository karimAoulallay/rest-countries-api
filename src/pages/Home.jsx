import React, { useEffect, useState } from "react";
import Country from "../components/Country";
import Loading from "../components/Loading";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [data, setData] = useState(null);
  const [region, setRegion] = useState(null);
  const [name, setName] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    fetchData(region, name);
  }, [region, name]);

  function fetchData(region, name) {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        if (!region && !name) {
          setData(data);
        } else if (region && !name) {
          setData(data.filter((country) => country.region === region));
        } else if (!region && name) {
          setData(data.filter((country) => country.name === name));
        } else {
          setData(
            data.filter(
              (country) => country.name === name && country.region === region
            )
          );
        }
      });
  }

  function handleSearchName(e) {
    setSearchName(e.target.value);
  }

  function handleRegion(e) {
    setRegion(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setName(
      searchName.slice(0, 1).toUpperCase() + searchName.slice(1).toLowerCase()
    );
  }

  return (
    <div className="container">
      <div className="flex justify-between gap-y-4 flex-col sm:flex-row">
        <form
          onSubmit={handleSubmit}
          className="flex items-center rounded-md shadow-default shadow-darkGray bg-light
        dark:bg-darkBlue dark:text-lightGray dark:shadow-DarkestBlue
      "
        >
          <button className="h-full px-4 scale-125">
            <i className="bx bx-search-alt-2"></i>
            <span className="sr-only">search icon</span>
          </button>
          <input
            onChange={handleSearchName}
            value={searchName}
            type="text"
            placeholder="Search for country..."
            id="search"
            className="flex-1 py-2 h-full rounded-r-md pl-3 placeholder:text-darkGray dark:placeholder:text-lightGray placeholder:font-semibold bg-transparent"
          />
        </form>

        <div className="relative flex flex-col space-y-2 text-DarkerBlue font-semibold w-56">
          <button
            aria-expanded={isExpanded}
            className="flex items-center justify-between bg-white p-2 px-4 space-x-4 rounded-md shadow-default shadow-darkGray
          dark:bg-darkBlue dark:text-lightGray dark:shadow-DarkestBlue
          focus:outline outline-2
          "
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            <p>{region ? region : "Filter by Region"}</p>
            <i
              className={`bx bx-chevron-down transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            ></i>
          </button>
          <ul
            className={`flex flex-col text-center py-2 bg-white overflow-hidden rounded-md shadow-default shadow-darkGray absolute top-full w-full 
          dark:bg-darkBlue dark:text-lightGray dark:shadow-DarkestBlue
          ${isExpanded ? "" : "hidden"}
          `}
          >
            <li>
              <button
                value=""
                onClick={handleRegion}
                className="w-full py-1 hover:bg-darkBlue hover:text-lightGray
              dark:hover:bg-light dark:hover:text-darkBlue
              "
              >
                Filter bg Region
              </button>
            </li>
            <li>
              <button
                value="Africa"
                onClick={handleRegion}
                className="w-full py-1 hover:bg-darkBlue hover:text-lightGray
              dark:hover:bg-light dark:hover:text-darkBlue
              "
              >
                Africa
              </button>
            </li>
            <li>
              <button
                value="Asia"
                onClick={handleRegion}
                className="w-full py-1 hover:bg-darkBlue hover:text-lightGray
              dark:hover:bg-light dark:hover:text-darkBlue"
              >
                Asia
              </button>
            </li>
            <li>
              <button
                value="Americas"
                onClick={handleRegion}
                className="w-full py-1 hover:bg-darkBlue hover:text-lightGray
              dark:hover:bg-light dark:hover:text-darkBlue"
              >
                Americas
              </button>
            </li>
            <li>
              <button
                value="Europe"
                onClick={handleRegion}
                className="w-full py-1 hover:bg-darkBlue hover:text-lightGray
              dark:hover:bg-light dark:hover:text-darkBlue"
              >
                Europe
              </button>
            </li>
            <li>
              <button
                value="Oceania"
                onClick={handleRegion}
                className="w-full py-1 hover:bg-darkBlue hover:text-lightGray
              dark:hover:bg-light dark:hover:text-darkBlue"
              >
                Oceania
              </button>
            </li>
          </ul>
        </div>
      </div>
      {data ? (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-8 mt-12">
          {data.map((c) => (
            <Country {...c} key={c.name} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
