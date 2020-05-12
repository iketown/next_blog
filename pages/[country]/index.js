import React from "react";
import axios from "axios";
import Thumbnail from "../../components/Thumbnail";
import Link from "next/link";
import { useRouter } from "next/router";
import Error from "next/error";
const CountryHome = ({ shows, country, statusCode }) => {
  if (statusCode) {
    return <Error {...{ statusCode }} />;
  }
  console.log("country in copmonents", country);
  const renderShows = () => {
    const { query } = useRouter();
    console.log("query", query);
    return shows.map((showItem, index) => {
      const { show } = showItem;
      return (
        <div>
          <li key={`${index}${show.id}`}>
            <a>{show?.name}</a>
            <Thumbnail
              imageUrl={show?.image?.medium}
              caption={show?.name}
              href="/[country]/[showId]"
              as={`/${country}/${show.id}`}
            />
          </li>
        </div>
      );
    });
  };
  return (
    <div>
      <ul className="tvshows-grid">{renderShows()}</ul>
      <style jsx>{`
        .tvshows-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin: 0;
          list-style-type: none;
        }
      `}</style>
    </div>
  );
};

CountryHome.getInitialProps = async (ctx) => {
  try {
    const country = ctx?.query?.country || "US";
    const url = `https://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`;
    const data = await axios.get(url).then(({ data }) => data);
    return {
      shows: data,
      country,
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
    };
  }
};

export default CountryHome;
