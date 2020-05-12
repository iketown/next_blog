import React from "react";

const CustomError = ({ statusCode }) => {
  if (statusCode === 404) return <h1>resource wasnt found</h1>;
  return (
    <div>
      there was an ERRRRRORRR CUSTOM ERROR PAGE
      {statusCode}
    </div>
  );
};

CustomError.getInitialProps = ({ err, res }) => {
  return { statusCode: res ? res.statusCode : err ? err.statusCode : 404 };
};
export default CustomError;
