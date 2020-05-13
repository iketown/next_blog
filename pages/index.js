import Head from "next/head"
import Router from "next/router"
import nookies from "nookies"

export default function Home() {
  return <div className="container">this is my home page</div>
}

Home.getInitialProps = (ctx) => {
  const { defaultCountry } = nookies.get(ctx)
  const country = ctx?.query?.country || defaultCountry || "us"

  if (process.browser) {
    // client side.  go to default country
    Router.replace("/[country]", `/${country}`)
  } else {
    ctx.res.writeHead(302, { Location: `/${country}` })
    ctx.res.end()
  }
}
