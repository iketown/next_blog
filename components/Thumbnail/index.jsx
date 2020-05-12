import React from "react";
import Link from "next/link";

const Thumbnail = ({ imageUrl, caption, href = "", as = "", small }) => {
  const defaultImg = `http://via.placeholder.com/210x295?text=?`;
  return (
    <div className="thumbnail">
      <Link {...{ href, as }}>
        <a>
          <img src={imageUrl || defaultImg} className="thumbnail__image" />
          <h4 className="thumbnail__caption">{caption}</h4>
        </a>
      </Link>
      <style jsx>{`
        .thumbnail__image {
          width: ${small ? "100px" : "100%"};
        }
        .thumbnail__caption {
          text-align: center;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default Thumbnail;
