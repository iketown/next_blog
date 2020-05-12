import React from "react";
import Thumbnail from "../Thumbnail";
import { ThumbnailStyles } from "../Thumbnail/styles";
import css from "styled-jsx/css";

const Cast = ({ cast }) => {
  const renderCast = () => {
    return cast.map((castItem, index) => {
      const { person } = castItem;
      return (
        <li key={index || person.id}>
          <Thumbnail
            small
            imageUrl={person?.image?.medium}
            caption={person.name}
          />
        </li>
      );
    });
  };
  return (
    <div className="cast">
      <h3>Cast</h3>
      <ul className="cast__list">{renderCast()}</ul>
      <style jsx>
        {`
          .cast__list {
            display: flex;
            overflow-x: scroll;
          }
          .cast__list > :global(li) {
            margin-right: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default Cast;
