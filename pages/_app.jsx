import React from "react"
import Header from "../components/Header/Header"

//
//
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
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
        :global(form) {
          display: flex;
          width: 100%;
          flex-direction: column;
          text-align: center;
        }
        :global(input) {
          margin-bottom: 10px;
          padding: 10px;
          box-sizing: border-box;
        }
        :global(button) {
          padding: 10px;
          margin-bottom: 10px;
          cursor: pointer;
          background-color: teal;
          color: white;
          font-weight: bold;
        }
        :global(button:disabled) {
          opacity: 0.4;
        }
        :global(.error) {
          color: maroon;
          padding-bottom: 10px;
        }
      `}</style>
    </>
  )
}

export default App
