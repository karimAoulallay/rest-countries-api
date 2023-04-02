import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const Detail = () => {
  const [data, setData] = useState(null);
  const { name, id } = useParams();
  let country;

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (data) {
    country = data.find((c) => c.name === name);
  }

  return (
    <div className="container">
      <Link
        to="../"
        className="flex items-center w-fit mb-12 space-x-2 rounded-md py-1 px-8 group shadow-default shadow-DarkerBlue text-DarkestBlue bg-light
        dark:text-lightGray dark:bg-darkBlue dark:shadow-DarkestBlue"
      >
        <i className="bx bx-left-arrow-alt group-hover:-translate-x-2 duration-300"></i>
        <span>Back</span>
      </Link>

      {!data ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-DarkerBlue dark:text-lightGray">
          <img src={country.flag} alt="Flag" />
          <div>
            <h2 className="text-3xl font-extrabold mb-8">{country.name}</h2>
            <div className="flex flex-col lg:flex-row gap-8">
              <ul className="flex justify-between flex-col space-y-2">
                <li>
                  <span className="font-semibold">Native name: </span>
                  {country.nativeName}
                </li>
                <li>
                  <span className="font-semibold">Population: </span>
                  {country.population}
                </li>
                <li>
                  <span className="font-semibold">Region: </span>
                  {country.region}
                </li>
                <li>
                  <span className="font-semibold">Sub Region: </span>
                  {country.subregion}
                </li>
                <li>
                  <span className="font-semibold">Capital: </span>
                  {country.capital}
                </li>
              </ul>
              <ul className="flex flex-col space-y-2">
                <li>
                  <span className="font-semibold">Top Level Domain: </span>
                  {country.topLevelDomain}
                </li>
                <li>
                  <span className="font-semibold">Currencies: </span>
                  {country.currencies[0].name}
                </li>
                <li>
                  <span className="font-semibold">Languages: </span>
                  {country.languages.map((l) => l.name).join(", ")}
                </li>
              </ul>
            </div>
            <div className="mt-8 flex flex-wrap flex-col sm:flex-row gap-4">
              <span className="font-semibold">Border countries:</span>
              <div className="flex flex-wrap gap-2">
                {country.borders
                  ? country.borders.map((b) => {
                      const countryDetail = data.find(
                        (c) => c.alpha3Code === b
                      );
                      return (
                        <Link
                          key={countryDetail.name}
                          to={`../${countryDetail.name}`}
                          className="px-4 rounded-md shadow-default shadow-darkBlue
                          dark:shadow-DarkestBlue"
                        >
                          {countryDetail.name}
                        </Link>
                      );
                    })
                  : "Unknown"}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
