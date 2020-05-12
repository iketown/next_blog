import React from "react";
import Header from "../components/Header/Header";

//
//
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <style jsx>{`
        @font-face {
          font-family: "raleway";
          src: url("/fonts/raleway/Raleway-Regular.ttf") format("truetype");
        }
        :global(html) {
          font-family: "raleway";
        }
        :global(ul) {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      `}</style>
    </>
  );
};

export default App;
