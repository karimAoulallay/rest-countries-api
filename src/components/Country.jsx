import React from "react";
import { Link } from "react-router-dom";

const Country = ({ flags, name, population, region, capital }) => {
  return (
    <Link
      to={name}
      className="rounded-md overflow-hidden bg-light shadow-default shadow-darkGray dark:shadow-DarkestBlue dark:bg-darkBlue"
    >
      <img src={flags.svg} alt="Flag" className="h-1/2 w-full object-cover" />
      <div className="bg-light text-DarkestBlue p-4 dark:bg-darkBlue dark:text-lightGray">
        <p className="font-extrabold mb-4 text-xl">{name}</p>
        <p>
          <span className="font-semibold">Populaltion:</span> {population}
        </p>
        <p>
          <span className="font-semibold">region:</span> {region}
        </p>
        <p>
          <span className="font-semibold">Capital:</span> {capital}
        </p>
      </div>
    </Link>
  );
};

export default Country;
