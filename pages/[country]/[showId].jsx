import React from "react";
import axios from "axios";
import parse from "html-react-parser";
import Link from "next/link";
import Cast from "../../components/Cast/Cast";
import Error from "next/error";
import CustomError from "../_error";
import { withAuth } from "../../utils/withAuth";
//
//
const ShowDetails = ({ show = {}, country, url, statusCode }) => {
  const { name, image, summary, _embedded } = show;
  if (statusCode) {
    return <CustomError statusCode={statusCode} title="awwww shit." />;
  }
  return (
    <div className="show-details">
      <Link href="/[country]" as={`/${country}`}>
        <a>Back to home</a>
      </Link>
      <div
        className="show-details__poster"
        style={{ backgroundImage: `url(${image?.original})` }}
      ></div>
      <h1>{name}</h1>
      <div>{parse(summary)}</div>
      {_embedded.cast?.length > 0 && <Cast cast={_embedded.cast} />}
      <style jsx>
        {`
          .show-details__poster {
            height: 294px;
            width: 200px;
            background-size: cover;
          }
        `}
      </style>
    </div>
  );
};

ShowDetails.getInitialProps = async ({ query }) => {
  try {
    const { country, showId } = query;
    const url = `https://api.tvmaze.com/shows/${showId}?embed=cast`;
    const show = await axios.get(url).then(({ data }) => data);
    return {
      show,
      country,
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
    };
  }
};

export default withAuth(ShowDetails);
