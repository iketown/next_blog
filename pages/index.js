import Head from "next/head";
import Router from "next/router";

export default function Home() {
  return <div className="container">this is my home page</div>;
}

Home.getInitialProps = (ctx) => {
  console.log("brower", process.browser);
  const country = ctx.query?.country || "us";

  if (process.browser) {
    // client side.  go to default country
    Router.replace("/[country]", `/${country}`);
  } else {
    ctx.res.writeHead(302, { Location: `/${country}` });
    ctx.res.end();
  }
};
